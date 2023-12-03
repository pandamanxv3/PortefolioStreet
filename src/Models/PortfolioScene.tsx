import * as THREE from 'three';
import { Outlines, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useMeshState, useOpacityState } from '../DataAndContext/Context';
import { RefType } from '../DataAndContext/Data';

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
  }
  materials: {
    AtLAS: THREE.MeshStandardMaterial
  }
}

export function Model() {
  const { nodes, materials } = useGLTF('/Scene.glb') as GLTFResult;
  const { modelRefs } = useMeshState();
  const { opacities } = useOpacityState();
  return (
    <group dispose={null}>
      <group name="Scene">
        <mesh name="BuildingDragon" ref={modelRefs[RefType.BuildingDragon]} geometry={nodes.BuildingDragon.geometry} material={materials.AtLAS}
          position={[8.187, 4.421, -3.993]} rotation={[0, -0.137, 0]} scale={2.772} >
          <Outlines
            thickness={0.005}
            color={'black'}
            screenspace={false}
            opacity={opacities[RefType.BuildingDragon]}
            transparent={true}
            angle={Math.PI} />
        </mesh>
        <mesh name="BuildingCrossPong" ref={modelRefs[RefType.BuildingCrossPong]} geometry={nodes.BuildingCrossPong.geometry} material={materials.AtLAS}
          position={[2.119, 3.93, -4.428]} scale={[0.362, 0.307, 0.084]} >
          <Outlines
            thickness={0.085}
            color={'black'}
            screenspace={false}
            opacity={opacities[RefType.BuildingCrossPong]}
            transparent={true}
            angle={Math.PI} />
        </mesh>
        <mesh name="BuildingNightSky" ref={modelRefs[RefType.BuildingSky]} geometry={nodes.BuildingNightSky.geometry} material={materials.AtLAS}
          position={[-3.46, 4.111, -4.638]} rotation={[0, 0.033, 0]} scale={0.348} >
          <Outlines
            thickness={0.065}
            color={'black'}
            screenspace={false}
            opacity={opacities[RefType.BuildingSky]}
            transparent={true}
            angle={Math.PI} />
        </mesh>
        <mesh name="BuildingGithub" ref={modelRefs[RefType.BuildingGithub]} geometry={nodes.BuildingGithub.geometry} material={materials.AtLAS}
          position={[-8.307, 4.859, -3.883]} rotation={[0, 0.186, 0]} scale={[2.081, 3.872, 2.081]} >
          <Outlines
            thickness={0.008}
            color={'black'}
            screenspace={false}
            opacity={opacities[RefType.BuildingGithub]}
            transparent={true}
            angle={Math.PI} />
        </mesh>
        <mesh name="Road" ref={modelRefs[RefType.Road]} geometry={nodes.Road.geometry} material={materials.AtLAS} position={[-0.024, 0.19, 2.022]} rotation={[0, 1.571, 0]} scale={0.348} /> 
        <mesh name="StreetLight" ref={modelRefs[RefType.StreetLight]} geometry={nodes.StreetLight.geometry} material={materials.AtLAS} position={[-10.245, 3.407, -0.746]} rotation={[0, 0.31, 0]} scale={[0.154, 2.993, 0.154]} />
        <mesh name="StreetSign" ref={modelRefs[RefType.StreetSign]} geometry={nodes.StreetSign.geometry} material={materials.AtLAS} position={[5.433, 3.958, -1.263]} rotation={[0, -0.232, 0]} scale={[0.152, 3.642, 0.152]} />
        <mesh name="AdSign" ref={modelRefs[RefType.BuildingAds]} geometry={nodes.AdSign.geometry} material={materials.AtLAS} position={[-5.058, 0.498, -1.581]} rotation={[-0.006, 0.648, 0.004]} scale={[0.553, 0.149, 0.364]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Scene.glb')
