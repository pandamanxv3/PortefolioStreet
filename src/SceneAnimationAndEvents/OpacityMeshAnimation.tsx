import { useEffect } from 'react';
import gsap from "gsap";
import { useMeshState, useOpacityState } from '../DataAndContext/Context';

const OpacityMeshAnimation = () => {
	const { hovered, previousHovered, clicked } = useMeshState();
	const { setOpacities, opacities } = useOpacityState();

	useEffect(() => {
		const updateOpacity = (index: number, targetOpacity: number) => {
			const opacityObject = { opacity: opacities[index] };
			gsap.to(opacityObject, {
				opacity: targetOpacity,
				duration: targetOpacity === 1 ? 1 : 1,
				ease: "power2.out",
				onUpdate: () => {
					setOpacities[index](opacityObject.opacity);
				}
			});
		};
		if (clicked !== null) {
			updateOpacity(clicked, 0);
			return;
		}
		if (hovered !== null) {
			updateOpacity(hovered, 1);
		}

		if (previousHovered !== null && previousHovered !== hovered) {
			updateOpacity(previousHovered, 0);
		}
	}, [hovered, previousHovered, clicked]);

	return (
		<>
		</>
	);
};

export default OpacityMeshAnimation;