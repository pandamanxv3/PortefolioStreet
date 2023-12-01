import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube015: THREE.Mesh
    Cube015_1: THREE.Mesh
    Cube015_2: THREE.Mesh
    Cube015_3: THREE.Mesh
    Cube015_4: THREE.Mesh
    Cube015_5: THREE.Mesh
    Cube034: THREE.Mesh
    Cube034_1: THREE.Mesh
    Cube034_2: THREE.Mesh
    Cube034_3: THREE.Mesh
    Cube034_4: THREE.Mesh
    Cube034_5: THREE.Mesh
    Cube046: THREE.Mesh
    Cube046_1: THREE.Mesh
    Cube046_2: THREE.Mesh
    Cube046_3: THREE.Mesh
    Cube046_4: THREE.Mesh
    Cube046_5: THREE.Mesh
    Cube046_6: THREE.Mesh
    Cube046_7: THREE.Mesh
    Cube046_8: THREE.Mesh
    Cube046_9: THREE.Mesh
    Cube005: THREE.Mesh
    Cube005_1: THREE.Mesh
    Cube005_2: THREE.Mesh
    Cube005_3: THREE.Mesh
    Cube005_4: THREE.Mesh
    Cube005_5: THREE.Mesh
    Cube005_6: THREE.Mesh
    Cube005_7: THREE.Mesh
    Cube005_8: THREE.Mesh
    Plane005: THREE.Mesh
    Plane005_1: THREE.Mesh
    Plane005_2: THREE.Mesh
    Cube004: THREE.Mesh
    Cube004_1: THREE.Mesh
    Cube004_2: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder001_1: THREE.Mesh
    Cylinder001_2: THREE.Mesh
    Cylinder001_3: THREE.Mesh
    Cube040: THREE.Mesh
    Cube040_1: THREE.Mesh
    Cube040_2: THREE.Mesh
    Cube040_3: THREE.Mesh
    Cube040_4: THREE.Mesh
    Cube040_5: THREE.Mesh
    Cube040_6: THREE.Mesh
    Cube040_7: THREE.Mesh
    Cube040_8: THREE.Mesh
    Cube040_9: THREE.Mesh
    Cube040_10: THREE.Mesh
    Cube040_11: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Dragon_OneMesh_Sphere.005']: THREE.MeshStandardMaterial
    Material__25: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/portfolioScene-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Ad_Sign" position={[-5.058, 0.498, -1.581]} rotation={[-0.006, 0.648, 0.004]} scale={[0.553, 0.149, 0.364]}>
          <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube015_1" geometry={nodes.Cube015_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube015_2" geometry={nodes.Cube015_2.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube015_3" geometry={nodes.Cube015_3.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube015_4" geometry={nodes.Cube015_4.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube015_5" geometry={nodes.Cube015_5.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="Building_1_Shades" position={[-3.46, 4.111, -4.638]} rotation={[0, 0.033, 0]} scale={0.348}>
          <mesh name="Cube034" geometry={nodes.Cube034.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube034_1" geometry={nodes.Cube034_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube034_2" geometry={nodes.Cube034_2.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube034_3" geometry={nodes.Cube034_3.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube034_4" geometry={nodes.Cube034_4.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube034_5" geometry={nodes.Cube034_5.geometry} material={materials['Material.005']} />
        </group>
        <group name="Building_3" position={[8.187, 4.421, -3.993]} rotation={[0, -0.137, 0]} scale={2.772}>
          <mesh name="Cube046" geometry={nodes.Cube046.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube046_1" geometry={nodes.Cube046_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube046_2" geometry={nodes.Cube046_2.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube046_3" geometry={nodes.Cube046_3.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube046_4" geometry={nodes.Cube046_4.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube046_5" geometry={nodes.Cube046_5.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube046_6" geometry={nodes.Cube046_6.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube046_7" geometry={nodes.Cube046_7.geometry} material={materials['Dragon_OneMesh_Sphere.005']} />
          <mesh name="Cube046_8" geometry={nodes.Cube046_8.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube046_9" geometry={nodes.Cube046_9.geometry} material={materials['Material.005']} />
        </group>
        <group name="Building_4" position={[-8.307, 4.859, -3.883]} rotation={[0, 0.186, 0]} scale={[2.081, 3.872, 2.081]}>
          <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube005_2" geometry={nodes.Cube005_2.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube005_3" geometry={nodes.Cube005_3.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube005_4" geometry={nodes.Cube005_4.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube005_5" geometry={nodes.Cube005_5.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube005_6" geometry={nodes.Cube005_6.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube005_7" geometry={nodes.Cube005_7.geometry} material={materials['Material.005']} />
          <mesh name="Cube005_8" geometry={nodes.Cube005_8.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="Road" position={[-0.024, 0.19, 2.022]} rotation={[0, 1.571, 0]} scale={0.348}>
          <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Plane005_1" geometry={nodes.Plane005_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Plane005_2" geometry={nodes.Plane005_2.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="Street_Light" position={[-10.245, 3.407, -0.746]} rotation={[0, 0.31, 0]} scale={[0.154, 2.993, 0.154]}>
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube004_2" geometry={nodes.Cube004_2.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="Street_Sign" position={[5.433, 3.958, -1.263]} rotation={[0, -0.232, 0]} scale={[0.152, 3.642, 0.152]}>
          <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder001_2" geometry={nodes.Cylinder001_2.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cylinder001_3" geometry={nodes.Cylinder001_3.geometry} material={materials.PaletteMaterial001} />
        </group>
        <group name="Building_2" position={[2.119, 3.93, -4.428]} scale={[0.362, 0.307, 0.084]}>
          <mesh name="Cube040" geometry={nodes.Cube040.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube040_1" geometry={nodes.Cube040_1.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube040_2" geometry={nodes.Cube040_2.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube040_3" geometry={nodes.Cube040_3.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube040_4" geometry={nodes.Cube040_4.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube040_5" geometry={nodes.Cube040_5.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube040_6" geometry={nodes.Cube040_6.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube040_7" geometry={nodes.Cube040_7.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube040_8" geometry={nodes.Cube040_8.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube040_9" geometry={nodes.Cube040_9.geometry} material={materials.PaletteMaterial001} />
          <mesh name="Cube040_10" geometry={nodes.Cube040_10.geometry} material={materials.Material__25} />
          <mesh name="Cube040_11" geometry={nodes.Cube040_11.geometry} material={materials['Material.001']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/portfolioScene-transformed.glb')