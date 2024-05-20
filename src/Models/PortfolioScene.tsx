import * as THREE from 'three';
import { Outlines, useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useMeshState, useOpacityState } from '../DataAndContext/Context';
import { RefType } from '../DataAndContext/Data';
import { useEffect, useRef, RefObject } from 'react';

type GLTFResult = GLTF & {
	nodes: {
		AdSign: THREE.Mesh
		BuildingNightSky: THREE.Mesh
		BuildingDragon: THREE.Mesh
		BuildingGithub: THREE.Mesh
		Road: THREE.Mesh
		StreetLight: THREE.Mesh
		StreetSign: THREE.Mesh
		BuildingCrossPong: THREE.Mesh
		Bench: THREE.Mesh
		YunjinMesh: THREE.SkinnedMesh
		AminaMesh: THREE.SkinnedMesh
		iloMesh: THREE.SkinnedMesh
		mixamorigHips: THREE.Bone
		mixamorigHips_1: THREE.Bone
		mixamorigHips_2: THREE.Bone
	}
	materials: {
		AtLAS: THREE.MeshStandardMaterial
	}
	animations: GLTFAction[]
}

type ActionName = 'PhoneAnimation' | 'SittingAnimation' | 'BalancingAnimation'
interface GLTFAction extends THREE.AnimationClip {
	name: ActionName
}

export function Model() {
	const group = useRef<THREE.Group>(null);
	const { nodes, materials, animations } = useGLTF('/Scene.glb') as GLTFResult;
	const { modelRefs } = useMeshState();
	const { opacities } = useOpacityState();
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		actions.BalancingAnimation!.play();
		actions.PhoneAnimation!.play();
		actions.SittingAnimation!.play();
	}, []);

	return (
		<group dispose={null} ref={group}>
			<group name="Scene">
				<group name="BenchScene" ref={modelRefs[RefType.benchGrp] as RefObject<THREE.Group>} rotation={[0, 0, 0]} position={[0, 0, 0]} scale={[1, 1, 1]}>
					<mesh name="Cube" visible={false}  geometry={new THREE.BoxGeometry(4, 2, 1.5)} ref={modelRefs[RefType.cube] as RefObject<THREE.Mesh>} material={new THREE.MeshBasicMaterial({ color: 0x00ff00 })} position={[5, 1.6, 5.1]}  />
					<mesh name="Bench" ref={modelRefs[RefType.Bench] as RefObject<THREE.Mesh>} geometry={nodes.Bench.geometry} material={materials.AtLAS} position={[4.835, 0.513, 5.128]} rotation={[-Math.PI, 0.119, -Math.PI]} scale={1.154}>
						<Outlines
							thickness={0.035}
							color={0x466a6e}
							transparent={true}
							opacity={0.4 * opacities[RefType.benchGrp]}
							// opacity={0.3 }
							screenspace={false}
							polygonOffset={true}
							polygonOffsetFactor={-5}
							angle={Math.PI * 1.1} />
					</mesh>
					<group>
						<group name="YunJinAnimation" position={[2.966, 0.438, 4.822]} rotation={[Math.PI / 2, 0, -2.873]} scale={0.562}>
							<primitive object={nodes.mixamorigHips} />
						</group>

						<skinnedMesh
							name="YunJinMesh"
							ref={modelRefs[RefType.yunjin] as RefObject<THREE.SkinnedMesh>}
							geometry={nodes.YunjinMesh.geometry}
							material={materials.AtLAS}
							skeleton={nodes.YunjinMesh.skeleton}
							position={[2.966, 0.438, 4.822]}
							rotation={[Math.PI / 2, 0, -2.873]}
							scale={0.562} >
							<Outlines
								thickness={0.075}
								color={0x466a6e}
								screenspace={false}
								opacity={0.8 * opacities[RefType.benchGrp]}
								transparent={true}
								angle={Math.PI} />
						</skinnedMesh>
					</group>
					<group>
						<group name="AminaAnimation" position={[3.978, 0.968, 5.747]} rotation={[Math.PI / 2, 0, -2.964]} scale={0.61}>
							<primitive object={nodes.mixamorigHips_1} />
						</group>
						<skinnedMesh
							name="AminaMesh"
							ref={modelRefs[RefType.amina] as RefObject<THREE.SkinnedMesh>}
							geometry={nodes.AminaMesh.geometry}
							material={materials.AtLAS}
							skeleton={nodes.AminaMesh.skeleton}
							position={[3.978, 0.968, 5.747]}
							rotation={[Math.PI / 2, 0, -2.964]}
							scale={0.61}  >
							<Outlines

								thickness={0.07}
								color={0x466a6e}
								screenspace={false}
								opacity={0.5 * opacities[RefType.benchGrp]}
								polygonOffset={true}
								polygonOffsetFactor={19}
								transparent={true}
								angle={Math.PI * 0.3} />
						</skinnedMesh>
					</group>


					<group>
						<group name="IloAnimation" position={[5.184, 0.172, 5.225]} rotation={[Math.PI / 2, 0, -2.988]} scale={0.564}>
							<primitive object={nodes.mixamorigHips_2} />
						</group>
						<skinnedMesh
							name="iloMesh"
							ref={modelRefs[RefType.ilo] as RefObject<THREE.SkinnedMesh>}
							geometry={nodes.iloMesh.geometry}
							material={materials.AtLAS}
							skeleton={nodes.iloMesh.skeleton}
							position={[5.184, 0.172, 5.225]}
							rotation={[Math.PI / 2, 0, -2.988]}
							scale={0.564} >
							<Outlines
								thickness={0.075}
								color={0x466a6e}
								screenspace={false}
								opacity={0.3 * opacities[RefType.benchGrp]}
								transparent={true}
								angle={Math.PI} />
						</skinnedMesh>
					</group>
				</group>

				<mesh name="BuildingDragon" ref={modelRefs[RefType.BuildingDragon] as RefObject<THREE.Mesh>} geometry={nodes.BuildingDragon.geometry} material={materials.AtLAS}
					position={[8.187, 4.421, -3.993]} rotation={[0, -0.137, 0]} scale={2.772} >
					<Outlines
						thickness={0.007}
						color={'black'}
						screenspace={false}
						opacity={opacities[RefType.BuildingDragon]}
						transparent={true}
						angle={Math.PI} />
				</mesh>
				<mesh name="BuildingCrossPong" ref={modelRefs[RefType.BuildingCrossPong] as RefObject<THREE.Mesh>} geometry={nodes.BuildingCrossPong.geometry} material={materials.AtLAS}
					position={[2.119, 3.93, -4.428]} scale={[0.362, 0.307, 0.084]} >
					<Outlines
						thickness={0.095}
						color={'black'}
						screenspace={false}
						opacity={opacities[RefType.BuildingCrossPong]}
						transparent={true}
						angle={Math.PI} />
				</mesh>
				<mesh name="BuildingNightSky" ref={modelRefs[RefType.BuildingSky] as RefObject<THREE.Mesh>} geometry={nodes.BuildingNightSky.geometry} material={materials.AtLAS}
					position={[-3.46, 4.111, -4.638]} rotation={[0, 0.033, 0]} scale={0.348} >
					<Outlines
						thickness={0.075}
						color={'black'}
						screenspace={false}
						opacity={opacities[RefType.BuildingSky]}
						transparent={true}
						angle={Math.PI} />
				</mesh>
				<mesh name="BuildingGithub" ref={modelRefs[RefType.BuildingGithub] as RefObject<THREE.Mesh>} geometry={nodes.BuildingGithub.geometry} material={materials.AtLAS}
					position={[-8.307, 4.859, -3.883]} rotation={[0, 0.186, 0]} scale={[2.081, 3.872, 2.081]} >
					<Outlines
						thickness={0.01}
						color={'black'}
						screenspace={false}
						opacity={opacities[RefType.BuildingGithub]}
						transparent={true}
						angle={Math.PI} />
				</mesh>
				<mesh name="Road" ref={modelRefs[RefType.Road] as RefObject<THREE.Mesh>} geometry={nodes.Road.geometry} material={materials.AtLAS} position={[-0.024, 0.19, 2.022]} rotation={[0, 1.571, 0]} scale={0.348} />
				<mesh name="StreetLight" ref={modelRefs[RefType.StreetLight] as RefObject<THREE.Mesh>} geometry={nodes.StreetLight.geometry} material={materials.AtLAS} position={[-10.245, 3.407, -0.746]} rotation={[0, 0.31, 0]} scale={[0.154, 2.993, 0.154]} />
				<mesh name="StreetSign" ref={modelRefs[RefType.StreetSign] as RefObject<THREE.Mesh>} geometry={nodes.StreetSign.geometry} material={materials.AtLAS} position={[5.433, 3.958, -1.263]} rotation={[0, -0.232, 0]} scale={[0.152, 3.642, 0.152]} />
				<mesh name="AdSign" ref={modelRefs[RefType.BuildingAds] as RefObject<THREE.Mesh>} geometry={nodes.AdSign.geometry} material={materials.AtLAS} position={[-5.058, 0.498, -1.581]} rotation={[-0.006, 0.648, 0.004]} scale={[0.553, 0.149, 0.364]} />

			</group>
		</group >
	)
}

useGLTF.preload('/Scene.glb')
