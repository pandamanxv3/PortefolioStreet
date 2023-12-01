import { useEffect, useRef } from "react"
import { useMeshState } from "../DataAndContext/Context";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function SceneClickHandler() {
	const { hovered, clicked, meshRefs, setClicked } = useMeshState();
	const { camera } = useThree();

	const handleClick = (e: MouseEvent) => {

		if (hovered !== null) {
			if (clicked !== null) {
				setClicked(null);
				return;
			}
			setClicked(hovered);
			gsap.killTweensOf(meshRefs[hovered!].current!.position);
			gsap.to(meshRefs[hovered!].current!.position,
				{
					duration: 1,
					y: 4,
				});
		}
		else {

			setClicked(null);
			
			gsap.to(meshRefs[hovered!].current!.position,
				{
					duration: 0.1,
					y: 0,
				});
		}
	}

	useEffect(() => {
	}, [clicked]);

	useEffect(() => {
		const eventListener = (e: MouseEvent) => handleClick(e);
		document.addEventListener('click', eventListener);
		return () => {
			document.removeEventListener('click', eventListener);
		};
	}, [hovered, clicked]);

	return (
		<>
		</>
	)
}