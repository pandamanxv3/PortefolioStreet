import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Outlines, OrbitControls, Environment, } from '@react-three/drei'
import { useControls } from 'leva'
import gsap from 'gsap'

export default function Test() {
	const { outlines } = useControls({ outlines: true })
	return (
		<>
			<ambientLight intensity={Math.PI} />
			<spotLight angle={0.2} intensity={100} castShadow position={[5, 10, 5]} />
			<Knot outlines={outlines} />
			<OrbitControls />
			<Environment preset="city" background blur={1} />
			<mesh position={[0, -1.5, 0]} scale={10} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
				<planeGeometry />
				<shadowMaterial />
			</mesh>
		</>
	)
}


type KnotProps = {
	outlines: boolean;
	// Ajoute ici d'autres props si nécessaire
}

function Knot({ outlines, ...props }: KnotProps) {
	const ref = useRef<THREE.Mesh>(null!)
	const { color, thickness } = useControls({ color: '#ff9770', thickness: { value: 0.035, step: 0.01, min: 0, max: 0.1 } })
	const [hovered, hover] = useState(false)
	const [opacity, setOpacity] = useState(0)
	useFrame((state, delta) => {
		ref.current.rotation.x = ref.current.rotation.y += delta
		ref.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime) / 2
	})

	useEffect(() => {
		const opacityObject = { opacity: opacity };
		gsap.to(opacityObject, {
		  opacity: hovered ? 1 : 0,
		  duration: 1,
		  ease: "power2.out",
		  onUpdate: () => setOpacity(opacityObject.opacity)
		});
	  }, [hovered]);

	return (
		<mesh castShadow receiveShadow onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...props} ref={ref}>
			<torusKnotGeometry args={[0.5, 0.15, 128, 128]} />
			<meshStandardMaterial />
			{outlines && <Outlines
				thickness={thickness}
				color={hovered ? 'aquamarine' : color}
				screenspace={false} // Valeur par défaut
				opacity={opacity}         // Valeur par défaut
				transparent={true} // Valeur par défaut
				angle={Math.PI}     // Valeur par défaut
			/>}
		</mesh>
	)
}


