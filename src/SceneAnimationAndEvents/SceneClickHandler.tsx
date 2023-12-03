import { useEffect, useState } from "react"
import { useMeshState } from "../DataAndContext/Context";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { RefType } from "../DataAndContext/Data";

export default function SceneClickHandler() {
	const { hovered, clicked, modelRefs, setClicked, setIsAnimationFinished, isAnimationFinished } = useMeshState();
	const { camera } = useThree();
	const [isAnimating, setIsAnimating] = useState(false);
	const handleClick = () => {

		if (hovered !== null) {
			if (clicked !== null) {
				setClicked(null);
				return;
			}
			setClicked(hovered);
			if (hovered < 4)
				setIsAnimationFinished(false);
		}
		else
			setClicked(null);
	}

	useEffect(() => {
		if (clicked !== null && clicked < 4) {
			if (isAnimationFinished) return;
			//camera

			gsap.killTweensOf(camera.position);
			gsap.to(camera.position, {
				duration: 0.5,
				y: 34.957,
				ease: "power1.inOut",
			});
			const opacityObject = { opacity: null };
			gsap.to(opacityObject, {
				opacity: 1,
				duration: 0.5,
				ease: "power2.out"
			});
			//mesh
			gsap.killTweensOf(modelRefs[clicked].current!.position);
			gsap.to(modelRefs[clicked].current!.position, {
				duration: 0.5,
				y: 34.8,
				ease: "power1.inOut",
			});
			gsap.killTweensOf(modelRefs[clicked].current!.rotation);
			gsap.to(modelRefs[clicked].current!.rotation, { //rotateY
				duration: 0.5,
				y: 0.8,
				ease: "power1.inOut",
			});
			gsap.to(modelRefs[clicked].current!.position, {
				duration: 0.5,
				delay: 0.5,
				z: 1,
				x: -3,
				ease: "power1.inOut",
			});
		}
		else if (clicked !== null && clicked >= 4) {
			const animateObject = (modelRef: THREE.Object3D) => {
				
				if (isAnimating) return;

				setIsAnimating(true);
				setClicked(null);

				const fullRotation = Math.PI * 2;
				const jumpHeight = 1;
				const timeline = gsap.timeline();

				timeline.to(modelRef.rotation, {
					duration: 1,
					y: "+=" + fullRotation,
					ease: "power3.inOut"
				});

				timeline.to(modelRef.position, {
					duration: 0.4,
					y: "+=" + jumpHeight, // Monter
					ease: "power2.out"
				}, 0);

				timeline.to(modelRef.position, {
					duration: 0.6,
					y: "-=" + jumpHeight, // Redescendre
					ease: "bounce.out",
					onComplete: () => {
						setIsAnimating(false)
					}
				}, 0.4);
			};

			if (clicked !== null && clicked >= 4) {
				if (clicked === RefType.StreetLight || clicked === RefType.StreetSign)
					animateObject(modelRefs[clicked].current!)
				else if (clicked === RefType.BuildingAds) {
					if (isAnimating) return;
					setIsAnimating(true);
					setClicked(null);
					const timeline = gsap.timeline();

					timeline.to(modelRefs[clicked].current!.rotation, {
						duration: 0.15,
						z: "-=" + 0.3,
						ease: "power1.inOut"
					});

					timeline.to(modelRefs[clicked].current!.rotation, {
						duration: 0.3,
						z: "+=" + 0.6,
						ease: "power1.inOut"
					});

					timeline.to(modelRefs[clicked].current!.rotation, {
						duration: 0.3,
						z: "-=" + 0.5,
						ease: "power1.inOut"
					});
					timeline.to(modelRefs[clicked].current!.rotation, {
						duration: 0.25,
						z: "+=" + 0.4,
						ease: "power1.inOut"
					});
					timeline.to(modelRefs[clicked].current!.rotation, {
						duration: 0.2,
						z: "-=" + 0.3,
						ease: "power2.inOut"
					});
					timeline.to(modelRefs[clicked].current!.rotation, {
						duration: 0.1,
						z: "+=" + 0.1,
						ease: "power3.inOut",
						onComplete: () => {
							setIsAnimating(false)
						}
					});
				}
			}
		}
		else {
			gsap.killTweensOf(camera.position);
			gsap.to(camera.position, {
				duration: 1,
				y: 4.957,
				ease: "power1.inOut",
				onComplete: () => {
					setIsAnimationFinished(true);
				}
			});
		}
	}, [clicked]);

	useEffect(() => {
		const eventListener = () => handleClick();
		document.addEventListener('click', eventListener);
		return () => {
			document.removeEventListener('click', eventListener);
		};
	}, [hovered, clicked]);

	return (
		<>
		</>
	)
}