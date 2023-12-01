import { createContext, useContext, useRef, useState, Dispatch, SetStateAction, RefObject, ReactNode } from 'react';
import { Mesh } from 'three';

type MeshContextType = {
	hovered: number | null;
	setIsHovered: Dispatch<SetStateAction<number | null>>;
	clicked: number | null;
	setClicked: Dispatch<SetStateAction<number | null>>;
	meshRefs: RefObject<Mesh>[];
	previousHovered: number | null;
	setPreviousHovered: Dispatch<SetStateAction<number | null>>;
};

export const MeshContext = createContext<MeshContextType | undefined>(undefined);

type MeshProviderProps = {
	children: ReactNode;
};

export const MeshProvider = ({ children }: MeshProviderProps) => {
	const [clicked, setClicked] = useState<number | null>(null);
	const [hovered, setIsHovered] = useState<number | null>(null);
	const [previousHovered, setPreviousHovered] = useState<number | null>(null);
	const ref1 = useRef<Mesh>(null);
	const ref2 = useRef<Mesh>(null);
	const ref3 = useRef<Mesh>(null);
	const ref4 = useRef<Mesh>(null);

	const sceneRef: RefObject<Mesh>[] = [ref1, ref2, ref3, ref4];

	return (
		<MeshContext.Provider value={{
			hovered, setIsHovered,
			clicked, setClicked, meshRefs: sceneRef,
			previousHovered, setPreviousHovered,
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

	const setOpacities = [setOpacity1, setOpacity2, setOpacity3, setOpacity4];
	const opacities = [opacity1, opacity2, opacity3, opacity4];

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

