import { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

export default function SceneResizer() {
    const { camera } = useThree();
    const target = new Vector3(1.8, 4.6, -3); // Le point que la caméra regarde
    const basePosition = new Vector3(8.294, 4.957, 5.06); // Position de base de la caméra
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        // Attachez l'écouteur d'événements
        window.addEventListener('resize', handleResize);

        // Nettoyez l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        camera.position.set(newPosition.x, newPosition.y + (reculFactor - 1), newPosition.z);

        // Orienter la caméra vers le point cible
        camera.lookAt(target);
    }, [windowWidth, camera]);

    return (
        <>
        </>
    );
}
