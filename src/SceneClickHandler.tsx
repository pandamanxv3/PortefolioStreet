import { useEffect, useRef } from "react"
import { useMeshState } from "./Context";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

export default function SceneClickHandler() {
	const { hovered, clicked, meshRefs,  setClicked } = useMeshState();
	const { camera } = useThree();


	const handleClick = (e: MouseEvent) => {
		console.log("hovered: ", hovered, "clicked: ", clicked);
		
		if (hovered !== null) {
			console.log("je suis dans (hovered !== null)");
			if (clicked !== null) {
				console.log("je suis dans (clicked !== null)");
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
			console.log("je suis dans (hovered === null)");

			setClicked(null);
			gsap.to(meshRefs[hovered!].current!.position,
				{
					duration: 0.1,
					y: 0,
				});
		}
	}

	useEffect(() => {
		console.log(hovered);
	}, [hovered]);

	useEffect(() => {
		console.log("zzzzzzzzzz" + clicked);
	}, [clicked]);

	useEffect(() => {
		const eventListener = (e: MouseEvent) => handleClick(e);
		document.addEventListener('click', eventListener);
		return () => {
			document.removeEventListener('click', eventListener);
		};
	}, [hovered, clicked]);
	console.log("couccsssou")

	return (
		<>
		</>
	)
}