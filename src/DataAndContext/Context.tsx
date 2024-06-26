import { createContext, useRef, useState, Dispatch, SetStateAction, RefObject, ReactNode, useContext } from 'react';
import { Group, Mesh, SkinnedMesh } from 'three';

type MeshContextType = {
	hovered: number | null;
	setIsHovered: Dispatch<SetStateAction<number | null>>;
	clicked: number | null;
	setClicked: Dispatch<SetStateAction<number | null>>;
	previousHovered: number | null;
	setPreviousHovered: Dispatch<SetStateAction<number | null>>;
	isAnimationFinished: boolean;
	setIsAnimationFinished: Dispatch<SetStateAction<boolean>>;
	language: "eng" | "fr";
	setLanguage: Dispatch<SetStateAction<"eng" | "fr">>;
	windowWidth: number;
	setWindowWidth: Dispatch<SetStateAction<number>>;
	modelRefs: RefObject<Mesh | Group>[];
};

export const MeshContext = createContext<MeshContextType | undefined>(undefined);

type MeshProviderProps = {
	children: ReactNode;
};

export const MeshProvider = ({ children }: MeshProviderProps) => {
	const [clicked, setClicked] = useState<number | null>(null);
	const [hovered, setIsHovered] = useState<number | null>(null);
	const [previousHovered, setPreviousHovered] = useState<number | null>(null);
	const [isAnimationFinished, setIsAnimationFinished] = useState<boolean>(true);
	const [language, setLanguage] = useState<"eng" | "fr">("fr");
	const refBuildingDragon = useRef<Mesh>(null);
	const refBuildingGithub = useRef<Mesh>(null);
	const refBuildingCrossPong = useRef<Mesh>(null);
	const refBuildingSky = useRef<Mesh>(null);
	const refBuildingAds = useRef<Mesh>(null);
	const refStreetLight = useRef<Mesh>(null);
	const refStreetSign = useRef<Mesh>(null);
	const iloRef: RefObject<SkinnedMesh> = useRef<THREE.SkinnedMesh>(null);
	const aminaRef: RefObject<SkinnedMesh> = useRef<THREE.SkinnedMesh>(null);
	const yunjinRef: RefObject<SkinnedMesh> = useRef<THREE.SkinnedMesh>(null);
	const benchRef = useRef<Mesh>(null);
	const benchGrpRef = useRef<Group>(null);
	const cubeRef = useRef<Mesh>(null);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const refRoad = useRef<Mesh>(null);

	const modelRefs: RefObject<Mesh | Group>[] = [
		refBuildingDragon, refBuildingCrossPong, refBuildingSky, refBuildingGithub, benchRef,
		refBuildingAds, refStreetLight, refStreetSign, refRoad, iloRef, aminaRef, yunjinRef, benchGrpRef, cubeRef
	];

	return (
		<MeshContext.Provider value={{
			modelRefs,
			hovered, setIsHovered,
			clicked, setClicked,
			isAnimationFinished, setIsAnimationFinished,
			previousHovered, setPreviousHovered,
			language, setLanguage,
			windowWidth, setWindowWidth
		}}>
			{children}
		</MeshContext.Provider>
	);
};




export function useMeshState() {
	const context = useContext(MeshContext);
	if (!context) {
		throw new Error('useMeshState must be used within a MeshProvider');
	}
	return context;
}

type OpacityContextType = {
	opacities: number[];
	setOpacities: Dispatch<SetStateAction<number>>[];
};

export const OpacityContext = createContext<OpacityContextType | undefined>(undefined);

type OpacityProviderProps = {
	children: ReactNode;
};

export const OpacityProvider = ({ children }: OpacityProviderProps) => {
	const [opacity1, setOpacity1] = useState(0);
	const [opacity2, setOpacity2] = useState(0);
	const [opacity3, setOpacity3] = useState(0);
	const [opacity4, setOpacity4] = useState(0);
	const [opacity5, setOpacity5] = useState(0);

	const setOpacities = [setOpacity1, setOpacity2, setOpacity3, setOpacity4, setOpacity5];
	const opacities = [opacity1, opacity2, opacity3, opacity4, opacity5];

	return (
		<OpacityContext.Provider value={{
			opacities, setOpacities
		}}>
			{children}
		</OpacityContext.Provider>
	);
};

export function useOpacityState() {
	const context = useContext(OpacityContext);
	if (!context) {
		throw new Error('useOpacityState must be used within a OpacityProvider');
	}
	return context;
}

