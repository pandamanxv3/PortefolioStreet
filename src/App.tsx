import { Canvas } from '@react-three/fiber'
import styled from 'styled-components';
import { Vector3 } from 'three';
import { OrbitControls } from '@react-three/drei';
import Test from './test';
import Scene from './Scene';


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

const cameraConfig = {
	position: new Vector3(5, 2, 5) // Utilisation de Vector3 pour définir la position
};

function App() {



	return (
		<>
			<CanvasContainer>
				<Canvas
					camera={cameraConfig}
					onCreated={({ gl }) => {
						gl.setClearColor('#000000')
					}}
				>
					<OrbitControls
						panSpeed={0.05}
						rotateSpeed={0.3}
						enableZoom={false}
					/>
					<Scene />
					
					{/* <Test /> */}
				</Canvas>
			</CanvasContainer >
		</>
	)
}

export default App


