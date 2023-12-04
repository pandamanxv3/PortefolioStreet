import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useMeshState } from '../DataAndContext/Context';

export default function SceneResizer() {
	const { camera } = useThree();
	const { clicked, setWindowWidth, windowWidth } = useMeshState();
	const target = new Vector3(1.8, 4.6, -3);
	const basePosition = new Vector3(8.294, 4.957, 5.06);
	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [clicked]);

	useEffect(() => {
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


		const newPosition = basePosition.clone().sub(target).multiplyScalar(reculFactor).add(target);
		if (!clicked) {
			camera.position.set(newPosition.x, newPosition.y + (reculFactor), newPosition.z);
		}
		else
			camera.position.set(newPosition.x, 34.8 + (reculFactor), newPosition.z);
		if (!clicked)
			camera.lookAt(new Vector3(1.8, 4.6 + yfactor, -3));
		else
			camera.lookAt(new Vector3(1.8, 34.8, -3));
	}, [windowWidth, camera]);

	return (
		<>
		</>
	);
}
