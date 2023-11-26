import { useFrame, useThree } from '@react-three/fiber';
import { Raycaster } from 'three';
import { useMeshState } from './Context';
import { useState } from 'react';

export default function SceneRaycaster() {

	const { setIsHovered, hovered, meshRefs, setPreviousHovered } = useMeshState();
	const { camera, scene, pointer } = useThree();
	const [hasMouseMoved, setHasMouseMoved] = useState(false);
	const raycaster = new Raycaster();

	useFrame(() => {
		if (!hasMouseMoved) {
			if (pointer.x !== 0 || pointer.y !== 0)
				setHasMouseMoved(true);
			return;
		}

		raycaster.setFromCamera(pointer, camera);
		const intersects = raycaster.intersectObjects(scene.children);
		let newHovered: number | null = null;

		if (intersects.length > 0) {
			const intersectedObject = intersects[0].object;

			if (intersectedObject === meshRefs[0].current) {
				newHovered = 0;
			} else if (intersectedObject === meshRefs[1].current) {
				newHovered = 1;
			} else if (intersectedObject === meshRefs[2].current) {
				newHovered = 2;
			} else if (intersectedObject === meshRefs[3].current) {
				newHovered = null;
			} else {
				newHovered = null;
			}
		}
		if (newHovered !== hovered) {
			setPreviousHovered(hovered);
			setIsHovered(newHovered);
		}
	});
	return (
		<>
		</>
	)
}