import { useEffect, RefObject } from 'react';
import gsap from "gsap";
import { positions } from '../Infos';
import { Mesh } from 'three';
import { useMeshState } from '../DataAndContext/Context';

const speed = 0.5;
const activateFloating = (actualRef: RefObject<Mesh>) => {

	if (!actualRef.current) return;
	gsap.killTweensOf(actualRef.current.position);

	gsap.to(actualRef.current.position, {
		y: 0.2,
		duration: 1 * speed,
		ease: "power1.inOut"
	});
	gsap.to(actualRef.current.rotation, {
		y: -0.2,
		duration: 1 * speed,
		ease: "power1.inOut",
		delay: 1
	});

	gsap.to(actualRef.current.position, {
		x: "+=0.2",
		z: "+=0.2",
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut",
		duration: 2 * speed
	});

	gsap.to(actualRef.current.rotation, {
		y: "+=0.4",
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut",
		duration: 2 * speed,
		delay: 2
	});

	gsap.to(actualRef.current.scale, {
		x: "+=0.02",
		z: "+=0.02",
		y: "+=0.02",
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut",
		duration: 2 * speed
	});
};

const deactivateFloating = (previousRef: RefObject<Mesh>, position: number[]) => {
	if (!previousRef.current) return;
	gsap.to(previousRef.current.position, {
		x: position[0],
		y: position[1],
		z: position[2],
		duration: 0.33 * speed,
		ease: "power1.inOut",
		onComplete: () => {
			if (!previousRef.current) return;
			gsap.killTweensOf(previousRef.current.position);
		},
	});

	gsap.to(previousRef.current.scale, {
		x: 1,
		y: 1,
		z: 1,
		duration: 0.33 * speed,
		ease: "power1.inOut",
		onComplete: () => {
			if (!previousRef.current) return;
			gsap.killTweensOf(previousRef.current.scale);
		},
	});

	gsap.to(previousRef.current.rotation, {
		x: 0,
		y: 0,
		z: 0,
		duration: 0.33 * speed,
		ease: "power1.inOut",
		onComplete: () => {
			if (!previousRef.current) return;
			gsap.killTweensOf(previousRef.current.rotation);
		},
	});
};

const FloatingMeshAnimation = () => {
	const { hovered, meshRefs, previousHovered, clicked } = useMeshState();

	useEffect(() => {
		if (clicked !== null)
			return;
		if (hovered !== null) {
			activateFloating(meshRefs[hovered]);
		}
		if (previousHovered !== null) {
			deactivateFloating(meshRefs[previousHovered], positions[previousHovered]);
		}
	}, [hovered]);

	return (
		<>
		</>
	);
};

export default FloatingMeshAnimation;