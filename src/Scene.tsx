import { MeshProvider } from './Context';
import FloatingMesh2 from './FloatingMesh2';
import SceneClickHandler from './SceneClickHandler';
import SceneMeshes from './SceneMeshes';
import SceneRaycaster from './SceneRaycaster';

export default function Scene() {

	return (
		<>
			<MeshProvider>
				<SceneRaycaster />
				<SceneMeshes />
				<FloatingMesh2 />
				<SceneClickHandler />
			</MeshProvider>
		</>
	)
}