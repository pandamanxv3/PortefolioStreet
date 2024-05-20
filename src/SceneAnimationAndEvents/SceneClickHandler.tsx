import { useEffect, useState } from "react"
import { useMeshState } from "../DataAndContext/Context";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { RefType, cameraConfig, target } from "../DataAndContext/Data";

export default function SceneClickHandler() {
	const { hovered, clicked, modelRefs, setClicked, setIsAnimationFinished, isAnimationFinished, windowWidth } = useMeshState();
	const { camera } = useThree();
	const [isAnimating, setIsAnimating] = useState(false);
	const [isInit, setIsClicked] = useState(false);
	const handleClick = () => {

		if (hovered !== null) {
			if (clicked !== null) {
				setClicked(null);
				return;
			}
			setClicked(hovered);
			if (hovered < 5)
				setIsAnimationFinished(false);
		}
		else
			setClicked(null);
	}

	useEffect(() => {
		console.log(clicked, " clicked");
		if (clicked !== null && clicked < 5) {
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
			if (windowWidth < 600) {
				var yfactor = -1.5;
			}
			else if (windowWidth < 900) {
				var yfactor = -1;
			}
			else if (windowWidth < 1200) {
				var yfactor = -0.5;
			}
			else {
				var yfactor = 0;
			}
			gsap.killTweensOf(modelRefs[clicked].current!.position);
			let yAim;
			if (windowWidth < 1200)
				yAim = modelRefs[clicked] === modelRefs[RefType.benchGrp] ? 34.8 + yfactor - 1.2 : 36.8 + yfactor;
			else
				yAim = modelRefs[clicked] === modelRefs[RefType.benchGrp] ? 34.8 + yfactor - 1.2 : 34.8 + yfactor;

			gsap.to(modelRefs[clicked].current!.position, {
				duration: 0.5,
				y: yAim,
				ease: "power1.inOut",
			});
			gsap.killTweensOf(modelRefs[clicked].current!.rotation);
			gsap.to(modelRefs[clicked].current!.rotation, { //rotateY
				duration: 0.5,
				y: modelRefs[clicked] === modelRefs[RefType.benchGrp] ? -1 : 1,
				ease: "power1.inOut",
			});
			let xAim, zAim;
			if (windowWidth < 1200) {
				xAim = modelRefs[clicked] === modelRefs[RefType.benchGrp] ? 14 : 5;
				zAim = modelRefs[clicked] === modelRefs[RefType.benchGrp] ? 2 : 6;
			} else {
				zAim = modelRefs[clicked] === modelRefs[RefType.benchGrp] ? -2 : 2;
				xAim = modelRefs[clicked] === modelRefs[RefType.benchGrp] ? 8 : 0;
			}
			gsap.to(modelRefs[clicked].current!.position, {
				duration: 0.5,
				delay: 0.5,
				z: zAim,
				x: xAim,
				ease: "power1.inOut",
			});
		}
		else if (clicked !== null && clicked >= 5) {
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
					y: "+=" + jumpHeight,
					ease: "power2.out"
				}, 0);

				timeline.to(modelRef.position, {
					duration: 0.6,
					y: "-=" + jumpHeight,
					ease: "bounce.out",
					onComplete: () => {
						setIsAnimating(false)
					}
				}, 0.4);
			};

			if (clicked !== null && clicked >= 5) {
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
			if (windowWidth < 600) {
				var reculFactor = 2;
				var yfactor = 4;
			}
			else if (windowWidth < 900) {
				var reculFactor = 1.5;
				var yfactor = 1.5;
			}
			else if (windowWidth < 1200) {
				var reculFactor = 1.5;
				var yfactor = 1;
			}
			else {
				var reculFactor = 1;
				var yfactor = 0;
			}
			const newPosition = cameraConfig.position.clone().sub(target).multiplyScalar(reculFactor).add(target);
			if (!isInit) {
				setIsClicked(true);
				gsap.killTweensOf(camera.position);
				gsap.to(camera.position, {
					duration: 1,
					y: newPosition.y + yfactor,
					x: newPosition.x,
					z: newPosition.z,
					ease: "power3.Out",
					onComplete: () => {
						setIsAnimationFinished(true);
					},
					onUpdate: () => {
						camera.lookAt(0.8, 3.6, -4);
					}
				});
			} else {
				gsap.killTweensOf(camera.position);
				gsap.to(camera.position, {
					duration: 1,
					y: newPosition.y + yfactor,
					ease: "power1.inOut",
					onComplete: () => {
						setIsAnimationFinished(true);
					}
				});
			}
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