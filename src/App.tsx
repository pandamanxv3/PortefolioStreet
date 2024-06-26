import { Canvas } from '@react-three/fiber'
import styled from 'styled-components';
import Scene from './Scene';
import { initialCameraPosition } from './DataAndContext/Data';
import Layout from './Layout/Layout';
import { MeshProvider } from './DataAndContext/Context';

export const CanvasContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
	overflow-x: hidden;
	overflow-y: hidden;
	margin: 0px;
	padding: 0;
	z-index: 1;
	background-color: #000000;
	user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  background-color: #568a7c;
`;

function App() {
	return (
		<>
			<MeshProvider>
				<Layout />
				<CanvasContainer>
					<Canvas camera={initialCameraPosition}>
						<Scene />
					</Canvas>
				</CanvasContainer >
			</MeshProvider>
		</>
	)
}

export default App


