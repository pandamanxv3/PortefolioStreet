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
  position: fixed;
  right: 15%;
  top: 50%;
  transform: translateY(-50%);
  width: 30%;
  height: auto;
  background-color: #e5e5b9;
  padding: 20px;
  box-shadow: -5px 0px 10px rgba(0,0,0,0.2);
  visibility: hidden; // Départ invisible
  opacity: 0; // Départ transparent
  z-index: 4;
  border-radius: 10px;
  animation: ${props => props.$show ? css`${fadeIn} 0.5s ease 0.6s forwards` : 'none'};
`;

const Title = styled.h2`
  color: #333333; // Une couleur sombre pour le contraste
  font-size: 1.5em; // Taille du titre
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
`;

const BodyText = styled.p`
  color: #bb3b3b; // Couleur plus douce pour le corps du texte
  font-size: 1em;
  line-height: 1.5; // Espacement des lignes pour une meilleure lisibilité
  text-align: justify;
  margin-bottom: 20px;
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #68ad9c; // Couleur de fond du bouton
  color: white; // Couleur du texte du bouton
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px; // Coins arrondis
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; // Changement de couleur au survol
  }
`;


const Component = () => {
	const { clicked, language } = useMeshState();

	const showWindow = clicked !== null && clicked < 4;
	console.log("showWindow:" + showWindow);
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
