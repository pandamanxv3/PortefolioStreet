import { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useMeshState } from '../DataAndContext/Context';

export default function SceneResizer() {
    const { camera } = useThree();
    const {clicked } =  useMeshState();
    const target = new Vector3(1.8, 4.6, -3); 
    const basePosition = new Vector3(8.294, 4.957, 5.06); 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
            var reculFactor = 2.4;
        }
        else if (windowWidth < 900) {
            var reculFactor = 2.1;
        }
        else  if (windowWidth < 1200) {
            var reculFactor = 1.5;
        }
        else {
            var reculFactor = 1;
        }


        const newPosition = basePosition.clone().sub(target).multiplyScalar(reculFactor).add(target);
		if (!clicked)
        	camera.position.set(newPosition.x, newPosition.y + (reculFactor - 1), newPosition.z);
		else
			camera.position.set(newPosition.x, 34.8 + (reculFactor - 1)  , newPosition.z);
		if (!clicked)
        	camera.lookAt(target);
		else
			camera.lookAt(new Vector3(1.8, 34.8, -3));
    }, [windowWidth, camera]);

    return (
        <>
        </>
    );
}
