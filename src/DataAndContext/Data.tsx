import { Vector3 } from "three";

export enum RefType {
    BuildingDragon,
    BuildingCrossPong,
    BuildingSky,
    BuildingGithub,
    BuildingAds,
    StreetLight,
    StreetSign,
    Road
}

export const cameraConfig = {
    position: new Vector3(8.294, 4.957, 5.06)
};

export const target = new Vector3(1.8, 4.6, -3);

export const UpPositionY = [
    [8.187, 14.421, -3.993],
    [2.119, 14.93, -4.428],
    [-3.46, 14.111, -4.638],
    [-8.307, 14.859, -3.883]
]

//34.8
export const RotationY = [
    0,
    0,
    0,
    0.8,
]

export const newPositionXZ = [
    { x: 0, z: 0 },
    { x: 0, z: 0 },
    { x: 0, z: 0 },
    { x: -3, z: 1 }
]


export type ModelInfo = {
    position: [number, number, number],
    rotation: [number, number, number],
    scale: [number, number, number]
};

export const modelInfos: ModelInfo[] = [
    { position: [8.187, 4.421, -3.993], rotation: [0, -0.137, 0], scale: [2.772, 2.772, 2.772] },
    { position: [2.119, 3.93, -4.428], rotation: [0, 0, 0], scale: [0.362, 0.307, 0.084] },
    { position: [-3.46, 4.111, -4.638], rotation: [0, 0.033, 0], scale: [0.348, 0.348, 0.348] },
    { position: [-8.307, 4.859, -3.883], rotation: [0, 0.186, 0], scale: [2.081, 3.872, 2.081] },
];