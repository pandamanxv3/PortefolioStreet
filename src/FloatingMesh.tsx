import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from "gsap";
import { useThree } from '@react-three/fiber';
import { Group } from 'three';

type Props = {
	children: ReactNode,
	isHovered: boolean
}

const activateFloating = (object3D: THREE.Object3D) => {
	gsap.to(object3D.position, {
		y: 0.2,
		duration: 1,
		ease: "power1.inOut"
	});


	gsap.to(object3D.position, {
		z: "+=0.2",
		y: "+=0.2",	
		x: "+=0.2",
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut",
		duration: 2
	});
	gsap.to(object3D.scale, {
		z: "+=0.02",
		y: "+=0.02",	
		x: "+=0.02",
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut",
		duration: 2
	});
};

const deactivateFloating = (object3D: THREE.Object3D) => {
	gsap.to(object3D.position, {
		y: 0,
		z: 0,
		x: 0,
		duration: 0.2,
		ease: "power1.inOut",
		onComplete: () => {
			gsap.killTweensOf(object3D.position);
		},
	});

	gsap.to(object3D.scale, {
		x: 1,
		y: 1,
		z: 1,
		duration: 0.2,
		ease: "power1.inOut",
		onComplete: () => {
			gsap.killTweensOf(object3D.scale);
		},
	});
};


const FloatingMesh = ({ children, isHovered }: Props) => {
  const meshRef = useRef<Group>(null);
  const { scene } = useThree();

  useEffect(() => {
    const object3D = meshRef.current || scene;
    if (isHovered) {
      activateFloating(object3D);
    } else {
      deactivateFloating(object3D);
    }
  }, [isHovered, scene]);

  return (
    <group ref={meshRef}>
      {children}
    </group>
  );
};


export default FloatingMesh;
