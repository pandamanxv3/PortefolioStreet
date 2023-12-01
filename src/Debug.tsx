import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';


const Debug = () => {
    const {vector3Cam} = useControls({
		vector3Cam: {
			x: 0,
			y: 2,
			z: 1.5,
		}
	})
	const { camera } = useThree();
	// useFrame(() => {
    //     console.log("position: ", camera.position)
	// 	camera.lookAt(vector3Cam.x, vector3Cam.y, vector3Cam.z);
	// }
	// );
    return (
        <></>
    )
}

export default Debug