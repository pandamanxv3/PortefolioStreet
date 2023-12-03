import { MeshProvider, OpacityProvider } from './DataAndContext/Context';
import Debug from './Debug';
import SceneAnimationAndEvent from './SceneAnimationAndEvents/SceneAnimationAndEvent';
import { Model } from './Models/PortfolioScene';
import SceneRaycaster from './SceneAnimationAndEvents/SceneRaycaster';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { target } from './DataAndContext/Data';
import SceneResizer from './Handler/SceneResizer';

export default function Scene() {
	const { camera } = useThree();

	useEffect(() => {
		camera.lookAt(target.x, target.y, target.z);
	}, []);

	return (
		<>
			{/* <Debug /> */}
			<MeshProvider>
				<OpacityProvider>
					<SceneRaycaster />
					<SceneResizer />
					<pointLight position={[10, 10, 10]} />
					<SceneAnimationAndEvent />
					<Model />
				</OpacityProvider>
			</MeshProvider>
		</>
	)
}