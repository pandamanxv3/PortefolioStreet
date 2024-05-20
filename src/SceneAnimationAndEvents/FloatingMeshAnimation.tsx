import { useEffect, RefObject } from 'react';
import gsap from "gsap";
import { modelInfos, ModelInfo } from '../DataAndContext/Data';
import { Group, Mesh } from 'three';
import { useMeshState } from '../DataAndContext/Context';

const speed = 0.5;
const activateFloating = (actualRef: RefObject<Mesh | Group>) => {

	if (!actualRef.current) return;
	gsap.killTweensOf(actualRef.current.position);

	gsap.to(actualRef.current.position, {
		y: "+=0.25",
		duration: 1 * speed,
		ease: "power1.inOut"
	});
	gsap.to(actualRef.current.rotation, {
		y: "-=0.05",
		duration: 1 * speed,
		ease: "power1.inOut",
		delay: 1
	});

	gsap.to(actualRef.current.position, {
		x: "+=0.2",
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut",
		duration: 2 * speed
	});

	gsap.to(actualRef.current.rotation, {
		y: "+=0.1",
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut",
		duration: 2 * speed,
		delay: 2
	});

	// gsap.to(actualRef.current.scale, {
	// 	x: "-=0.02",
	// 	z: "-=0.02",
	// 	y: "-=0.02",
	// 	repeat: -1,
	// 	yoyo: true,
	// 	ease: "sine.inOut",
	// 	duration: 2 * speed
	// });
};

const deactivateFloating = (previousRef: RefObject<Mesh | Group>, initialInfo: ModelInfo) => {
	if (!previousRef.current) return;
	gsap.to(previousRef.current.position, {
		x: initialInfo.position[0],
		y: initialInfo.position[1],
		z: initialInfo.position[2],
		duration: 0.33 * speed,
		ease: "power1.inOut",
		onComplete: () => {
			if (!previousRef.current) return;
			gsap.killTweensOf(previousRef.current.position);
		},
	});

	gsap.to(previousRef.current.scale, {
		x: initialInfo.scale[0],
		y: initialInfo.scale[1],
		z: initialInfo.scale[2],
		duration: 0.33 * speed,
		ease: "power1.inOut",
		onComplete: () => {
			if (!previousRef.current) return;
			gsap.killTweensOf(previousRef.current.scale);
		},
	});

	gsap.to(previousRef.current.rotation, {
		x: initialInfo.rotation[0],
		y: initialInfo.rotation[1],
		z: initialInfo.rotation[2],
		duration: 0.33 * speed,
		ease: "power1.inOut",
		onComplete: () => {
			if (!previousRef.current) return;
			gsap.killTweensOf(previousRef.current.rotation);
		},
	});
};

const FloatingMeshAnimation = () => {
	const { hovered, modelRefs, previousHovered, clicked, isAnimationFinished } = useMeshState();

	useEffect(() => {

		if (clicked !== null)
			return;
		if (isAnimationFinished && (hovered !== null && hovered < 5)) {
			activateFloating(modelRefs[hovered]);
		}
		if (previousHovered !== null && previousHovered !== hovered && previousHovered < 5) {
			deactivateFloating(modelRefs[previousHovered], modelInfos[previousHovered]);
		}
	}, [hovered]);

	return (
		<>
		</>
	);
};

export default FloatingMeshAnimation;