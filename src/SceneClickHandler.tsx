import { useEffect, useRef } from "react"
import { useMeshState } from "./Context";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function SceneClickHandler() {
	const { hovered, meshRefs, setIsClicked, clicked, setIsHovered } = useMeshState();
	const { camera } = useThree();


	const handleClick = (e: MouseEvent, currentHovered: number | null, currentClicked: number | null) => {
		console.log("clicked");
		if (hovered !== null) {
			if (clicked !== null) {
				console.log("NIQUETA<ER" + meshRefs[clicked].current!.position);
				setIsClicked(null);
				return;
			}
			console.log(meshRefs[hovered].current!.position);
			setIsClicked(hovered);
			gsap.to(meshRefs[hovered].current!.position,
				{
					duration: 1,
					y: 4,
				});

		}
		if (clicked !== null) {
			// camera.position.set(0, 0, 5);
			meshRefs[clicked].current?.position.set(0, 0, 0);
		}
	}

    useEffect(() => {
        const eventListener = (e: MouseEvent) => handleClick(e, hovered, clicked);
        document.addEventListener('click', eventListener);
        return () => {
            document.removeEventListener('click', eventListener);
        };
    }, [hovered, clicked]); 

	console.log("clicked: " + clicked);
	return (
		<>
		</>
	)
}