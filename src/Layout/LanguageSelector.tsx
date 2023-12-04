import styled from "styled-components";
import { useMeshState } from "../DataAndContext/Context";

const LanguageSelectorContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 3;
  width: auto;
  height: auto;
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin: 0 2px;
  font-weight: bold;
  font-size: clamp(18px, 1.2vw, 1.2vw);

  &:focus {
    outline: none;
  }
`;

const LanguageSeparator = styled.span`
  margin: 0 5px;
`;

const LanguageSelector = () => {
	const { language, setLanguage } = useMeshState();

	return (
		<>
			<LanguageSelectorContainer>
				<LanguageButton onClick={() => setLanguage('eng')} disabled={language === 'eng'}>
					eng
				</LanguageButton>
				<LanguageSeparator>|</LanguageSeparator>
				<LanguageButton onClick={() => setLanguage('fr')} disabled={language === 'fr'}>
					fr
				</LanguageButton>
			</LanguageSelectorContainer>
		</>
	)
}

export default LanguageSelector