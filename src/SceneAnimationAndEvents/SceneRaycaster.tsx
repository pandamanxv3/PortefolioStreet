import { useFrame, useThree } from '@react-three/fiber';
import { Raycaster } from 'three';
import { useMeshState } from '../DataAndContext/Context';
import { useEffect, useState } from 'react';
import { RefType } from '../DataAndContext/Data';

export default function SceneRaycaster() {

	const { setIsHovered, hovered, setPreviousHovered, clicked, modelRefs } = useMeshState();
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
			const intersectedObject = intersects[0].object;
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
			else if (intersectedObject === modelRefs[RefType.cube].current)
				newHovered = RefType.benchGrp;
			else {
				newHovered = null;
			}
			console.log(newHovered);
		}
		if (newHovered !== hovered) {
			setPreviousHovered(hovered);
			setIsHovered(newHovered);
		}
	});

	useEffect(() => {
		if (hovered !== null && hovered !== RefType.Road) {
			document.body.style.cursor = 'pointer';
		} else {
			document.body.style.cursor = 'default';
		}
	}, [hovered]);


	return (
		<>
		</>
	)
}