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