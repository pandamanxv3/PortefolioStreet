import { MeshProvider, OpacityProvider } from './Context';
import FloatingMesh2 from './SceneAnimationHoover';
import SceneClickHandler from './SceneClickHandler';
import SceneMeshes from './SceneMeshes';
import { Model } from './SceneMeshes2';
import SceneRaycaster from './SceneRaycaster';

export default function Scene() {

	return (
		<>
			<MeshProvider>
				<OpacityProvider>
					<SceneRaycaster />
					<SceneMeshes />
					<FloatingMesh2 />
					<SceneClickHandler />
					{/* <Model /> */}
				</OpacityProvider>
			</MeshProvider>
		</>
	)
}