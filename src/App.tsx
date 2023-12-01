import { Canvas } from '@react-three/fiber'
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';
import { target, cameraConfig } from './DataAndContext/Data';

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
`;

function App() {
	return (
		<>
			<CanvasContainer>
				<Canvas
					camera={cameraConfig}
					onCreated={({ gl }) => {
						gl.setClearColor('#68ad9c')
					}}
				>
					<OrbitControls
						panSpeed={0.05}
						rotateSpeed={0.3}
						target={target}

					/>
					<Scene />
				</Canvas>
			</CanvasContainer >
		</>
	)
}

export default App


