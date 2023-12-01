import { MeshProvider, OpacityProvider } from './DataAndContext/Context';
import Debug from './Debug';
import SceneAnimationAndEvent from './SceneAnimationAndEvents/SceneAnimationAndEvent';
import SceneMeshes from './Models/SceneMeshes';
import { Model } from './Models/Model';
import SceneRaycaster from './SceneAnimationAndEvents/SceneRaycaster';

export default function Scene() {

	return (
		<>
			{/* <Debug /> */}
			<MeshProvider>
				<OpacityProvider>
					<SceneRaycaster />
					<SceneMeshes />
					<SceneAnimationAndEvent />
					<Model />
				</OpacityProvider>
			</MeshProvider>
		</>
	)
}