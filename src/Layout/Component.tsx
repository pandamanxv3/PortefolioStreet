import styled, { keyframes, css } from "styled-components";
import { useMeshState } from '../DataAndContext/Context';
import ReactMarkdown from 'react-markdown';
import { portFolioInfoEng, portFolioInfoFr } from "../DataAndContext/Data";

interface Props {
	$show: boolean;
}
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-50%) translateX(100%); visibility: hidden; }
  100% { opacity: 1; transform: translateY(-50%) translateX(0); visibility: visible; }
`;

const ProjectWindow = styled.div<Props>`
display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 15%;
  top: 50%;
  transform: translateY(-50%);
  width: 30%;
  height: auto;
  background-color: #d8c5b4;
  padding: 20px;
  box-shadow: -5px 0px 10px rgba(0,0,0,0.2);
  visibility: hidden; 
  opacity: 0; 
  outline: 3px dashed #cab65c;
  outline-offset: -5px;
  outline-width: 10px;
  z-index: 4;
  animation: ${props => props.$show ? css`${fadeIn} 0.5s ease 0.6s forwards` : 'none'};
  @media (max-width: 900px) {
	width: 50%;
	right: 5%;
  }
`;

const Title = styled.h2`
  font-family: 'InknutAntiqua';
  color: #c06757; 
  font-size: 1.5em;
  
  inline-size: 60%;
  text-align: center;
  font-weight: bold;
  line-height: 1.5;
  @media (max-width: 900px) {
	font-size: 1.2em;
	inline-size: 80%;


  }

`;

const BodyText = styled.div`

  color: #443227; 
  font-size: 1em;
  line-height: 1.5; 
  font-family: 'Chocolates';
  text-align: justify;
  padding: 10px;
  @media (max-width: 900px) {
	font-size: 0.8em;
	line-height: 1.2;
	margin-bottom: 10px;

  }
`;

const LinkButton = styled.a`
  display: inline-block;
  font-family: 'InknutAntiqua';
  font-size: 0.8em;
  padding: 10px 20px;
  background-color: #68ad9c; // Couleur de fond du bouton
  color: #443227; // Couleur du texte du bouton
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px; // Coins arrondis
  margin-top: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c06757; // Changement de couleur au survol
	color: #d8c5b4;
  }
`;


const Component = () => {
	const { clicked, language } = useMeshState();

	const showWindow = clicked !== null && clicked < 4;
	return (
		<ProjectWindow $show={showWindow}>
			{showWindow && (
				<>
					<Title>
						{language === "fr" ? portFolioInfoFr[clicked].title : portFolioInfoEng[clicked].title}
					</Title>
					<BodyText>
						<ReactMarkdown>
							{language === "fr" ? portFolioInfoFr[clicked].description : portFolioInfoEng[clicked].description}
						</ReactMarkdown>
					</BodyText>
					<LinkButton href={language === "fr" ? portFolioInfoFr[clicked].link : portFolioInfoEng[clicked].link} target="_blank">
						View Project
					</LinkButton>
				</>
			)}
		</ProjectWindow>
	)
}

export default Component;
