import { useFrame, useThree } from '@react-three/fiber';
import { Raycaster } from 'three';
import { useMeshState } from '../DataAndContext/Context';
import { useState } from 'react';
import { RefType } from '../DataAndContext/Data';

export default function SceneRaycaster() {

	const { setIsHovered, hovered, meshRefs, setPreviousHovered, clicked, modelRefs } = useMeshState();
	const { camera, scene, pointer } = useThree();
	const [hasMouseMoved, setHasMouseMoved] = useState(false);
	const raycaster = new Raycaster();

	useFrame(() => {
		if (clicked !== null)
			return;
		if (!hasMouseMoved) {
			if (pointer.x !== 0 || pointer.y !== 0)
				setHasMouseMoved(true);
			return;
		}
		raycaster.setFromCamera(pointer, camera);
		const intersects = raycaster.intersectObjects(scene.children);
		let newHovered: number | null = null;

		if (intersects.length > 0) {
			console.log("intersects: ", intersects.length);
			const intersectedObject = intersects[0].object;
			if (hovered !== null && intersectedObject === meshRefs[hovered].current)
				return;
			// if (intersectedObject === meshRefs[0].current) {
			// 	newHovered = 0;
			// } else if (intersectedObject === meshRefs[1].current) {
			// 	newHovered = 1;
			// } else if (intersectedObject === meshRefs[2].current) {
			// 	newHovered = 2;
			// } else if (intersectedObject === meshRefs[3].current) {
			// 	newHovered = null;
			if (intersectedObject === modelRefs[RefType.BuildingAds].current)
				newHovered = RefType.BuildingAds;
			else if (intersectedObject === modelRefs[RefType.BuildingCrossPong].current)
				newHovered = RefType.BuildingCrossPong;
			else if (intersectedObject === modelRefs[RefType.BuildingDragon].current)
				newHovered = RefType.BuildingDragon;
			else if (intersectedObject === modelRefs[RefType.BuildingGithub].current)
				newHovered = RefType.BuildingGithub;
			else if (intersectedObject === modelRefs[RefType.BuildingSky].current)
				newHovered = RefType.BuildingSky;
			else if (intersectedObject === modelRefs[RefType.StreetLight].current)
				newHovered = RefType.StreetLight;
			else if (intersectedObject === modelRefs[RefType.StreetSign].current)
				newHovered = RefType.StreetSign;
			else if (intersectedObject === modelRefs[RefType.Road].current)
				newHovered = RefType.Road;
			else {
				newHovered = null;
			}
		}
		if (newHovered !== hovered) {
			setPreviousHovered(hovered);
			setIsHovered(newHovered);
			console.log("newHovered: ", newHovered);
			console.log("hovered: ", hovered);
		}
	});
	return (
		<>
		</>
	)
}