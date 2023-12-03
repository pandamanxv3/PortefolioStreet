import FloatingMeshAnimation from "./FloatingMeshAnimation";
import OpacityMeshAnimation from "./OpacityMeshAnimation";
import SceneClickHandler from "./SceneClickHandler";

const SceneAnimationAndEvent = () => {
    return (
        <>
            <OpacityMeshAnimation />
            <FloatingMeshAnimation />
            <SceneClickHandler />
        </>
    )
};

export default SceneAnimationAndEvent;