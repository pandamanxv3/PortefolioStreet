import styled, { css, keyframes } from "styled-components";
import { useMeshState } from "../DataAndContext/Context";

const TitleContainer = styled.div`
	pointer-events: none;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: left;
	width: auto;
	height: auto;
	bottom: 17%;
	left: 3%;
	z-index: 3;
	user-select: none;
	`;

interface PropsTitle {
	$clicked: number | null;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

const Title = styled.div<PropsTitle>`
  justify-content: center;
  font-family: 'Manchego', sans-serif;
  align-items: center;
  font-size: 5vw;
  font-weight: bold;
  color: #443227;
  ${props => props.$clicked && props.$clicked < 4 ? css`animation: ${fadeOut} 1s ease-out forwards;` : css`animation: ${fadeIn} 1s ease-in forwards;`}
`;

const SubTitle = styled.div<PropsTitle>`
 font-family: 'Manchego', sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
  font-weight: bold;
  color: #ebd46c;
  ${props => props.$clicked && props.$clicked < 4 ? css`animation: ${fadeOut} 1s ease-out forwards;` : css`animation: ${fadeIn} 1s ease-in forwards;`}
`;
const Highlight = styled.span`
  color: #ebd46c; // Replace with your desired color
`;

const Highlight2 = styled.span`
  color: #443227; // Replace with your desired color
`;

const MainTitle = () => {
	const { clicked, language } = useMeshState();
	return (
		<>
			<TitleContainer>
				<Title $clicked={clicked}>Adnan B<Highlight>o</Highlight>udjelal</Title>
				<SubTitle $clicked={clicked}> {language === 'eng' ? 
				<>A Wannabe Creative Devel<Highlight2>o</Highlight2>per</> : <>Aspirant Dével<Highlight2>o</Highlight2>ppeur Créatif</>}</SubTitle>
			</TitleContainer>
		</>
	)
};

export default MainTitle;