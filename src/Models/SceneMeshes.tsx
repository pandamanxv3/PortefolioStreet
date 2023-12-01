import { Box, Outlines, Plane } from '@react-three/drei';
import { MeshProvider, useMeshState, useOpacityState } from '../DataAndContext/Context';

export default function SceneMeshes() {
	const { meshRefs } = useMeshState();
	const {  opacities } = useOpacityState();
	return (

		<>
			<MeshProvider>
				<pointLight position={[10, 10, 10]} />
				{/* <Box args={[1, 1, 1]} position={[-2, 0, 0]} ref={meshRefs[0]}>
					<meshStandardMaterial color="#d17c9d" />
					<Outlines
						thickness={0.035}
						color={'red'}
						screenspace={false}
						opacity={opacities[0]}
						transparent={true}
						angle={Math.PI} />
				</Box>

				<Box args={[1, 1, 1]} position={[0, 0, 0]} ref={meshRefs[1]}>
					<meshStandardMaterial color="#72d49e" />
					<Outlines
						thickness={0.035}
						color={'red'}
						screenspace={false}
						opacity={opacities[1]}
						transparent={true}
						angle={Math.PI} />
				</Box>

				<Box args={[1, 1, 1]} position={[2, 0, 0]} ref={meshRefs[2]}>
					<meshStandardMaterial color="#c77373" />
					<Outlines
						thickness={0.035}
						color={'red'}
						screenspace={false}
						opacity={opacities[2]}
						transparent={true}
						angle={Math.PI} />
				</Box>
				<Plane args={[8, 8]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} ref={meshRefs[3]}>
					<meshStandardMaterial color="#ffffff" />
				</Plane> */}
			</MeshProvider>
		</>
	)
}