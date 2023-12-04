import styled from "styled-components";
import MainTitle from "./MainTitle";
import Component from "./Component";
import LanguageSelector from "./LanguageSelector";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0px;
  padding: 0;
  z-index: 2;
`;

const Layout = () => {
	return (
		<>
			<Container>
				<LanguageSelector />
				<MainTitle />
				<Component />
			</Container>
		</>
	)
}

export default Layout