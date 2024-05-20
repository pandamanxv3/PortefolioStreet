import { Vector3 } from "three";

export enum RefType {
	BuildingDragon,
	BuildingCrossPong,
	BuildingSky,
	BuildingGithub,
	benchGrp,
	BuildingAds,
	StreetLight,
	StreetSign,
	Road,
	Bench,
	ilo,
	amina,
	yunjin,
	cube
}


export const portFolioInfoEng = [
	{
		title: "DragonScroll3JS:\n 3D Animation with Three.js",
		description: "DragonScroll3JS is a web development project focused on leveraging Three.js for 3D animations. It's centered around a dragon statue, serving as a playground for experimenting with camera angles, scene composition, and animations. The project allowed me to deepen my understanding and skills in Three.js and TypeScript, specifically in creating interactive 3D scenes on the web.\n\n## Technical Highlights:\n\n- **Three.js**: Used for 3D modeling and animations.\n- **TypeScript**: For robust scripting alongside Three.js.\n- **GSAP**: Integrated for enhancing animation transitions.\n- **Scroll-Based Navigation**: Implemented to smoothly transition between scenes.",
		link: "https://dragonscroll-3js.vercel.app/"
	},
	{
		title: "CrossPong:\n Classic Pong Reimagined",
		description: "CrossPong is a modern take on the classic Pong game, featuring four distinct maps with unique gameplay elements. This project was an exercise in integrating complex 3D objects and animations into a web-based environment, challenging me to integrate advanced interactive and visual techniques within modern web development frameworks.\n\n## Technical Highlights\n\n- **React TypeScript**: Utilized for a structured, scalable application.\n- **Three Fiber**: Implemented for rendering dynamic 3D elements.\n- **GSAP**: Applied for smooth and responsive animations.\n- **P2.js**: Employed for realistic physics simulations.\n- **XState**: Managed complex game states.\n- **Styled Components**: Used for a consistent and responsive UI.\n\n",
		link: "https://cross-pong.vercel.app/"
	},
	{
		title: "Pixelated NightSky:\n A Blend of Old and New",
		description: "Pixelated NightSky is a minimal project that unites retro pixel art with contemporary 3D canvas technology using react-three-fiber. It features animated pixel stars set in a rotating 3D sky, offering a nostalgic nod to old-school aesthetics with a modern twist.\n\n## Technical Highlights:\n\n- **react-three-fiber**: For creating the 3D environment.\n- **@react-three/drei**: Used for texture loading and enhancing pixel star animations.\n- **gsap**: Manages smooth animations.",
		link: "https://pixelated-night-sky.vercel.app/"
	},
	{
		title: "GitHub Portfolio:\n Diverse Web and System Projects",
		description: "Explore my GitHub repository to discover a range of projects I've developed. On my GitHub, you'll find detailed information and code for the projects I've showcased, along with several significant works I completed at École 42. These include:\n\n- **Minishell**: Delving into system programming and command-line interfaces using C.\n- **Webserv**: Crafting an efficient HTTP server from scratch in C++98.\n- **Cub3d**: Transforming 2D maps into immersive 3D views through C-based raycasting.\n- **Pushswap**: A challenge in algorithmic efficiency and optimization, tackled with C programming.",
		link: "https://github.com/pandamanxv3"
	},
	{
		"title": "Nomadic Voices, Animal Footprints:\n Parallel Narratives and 3D Immersion",
		"description": "This project, which earned me <span class='highlight'>the Special Prize for 'Digital Writing' at the 2024 Inalco Multilingual Short Story Contest</span>, parallels three distinct scenes that can be switched at any time. This reinforces the idea of parallels in the experience and adds interactivity.\nI aimed to push the staging to the maximum with react-three-fiber, creating a complete immersive experience. This project combines voiceovers, 3D animations, 3D models, and storytelling to offer a rich and engaging exploration.\n\n## Key Technical Points:\n\n- **react-three-fiber**: Used to develop a structured and scalable application.\n- **Three Fiber**: Used for rendering 3D elements and integrating them with React.\n- **Zustand**: Used for state management in the application.\n- **Mixamo**: Used for animating 3D models.\n- **Blender**: Used for creating and modifying 3D models.\n- **Ableton**: Used for voice mixing.\n- **GSAP**: Used to animate models and various sequences.\n- **Styled Components**: Chosen to simplify styling.",
		"link": "https://voix-nomades.vercel.app/"
	}
]

export const portFolioInfoFr = [
	{
		title: "DragonScroll3JS :\n Animation 3D avec Three.js",
		description: " DragonScroll3JS est un projet web conçu pour exploiter les capacités de Three.js dans la création d'animations 3D. Le projet est centré autour d'une statue de dragon, utilisée comme élément principal pour expérimenter avec des animations variées, des perspectives de caméra et des mises en scène créatives. Ce travail m'a permis de renforcer mes compétences en Three.js et TypeScript, tout en me concentrant sur la création d'expériences interactives.\n\n## Points Techniques Clés :\n\n- **Three.js** : Utilisé pour la modélisation et les animations 3D.\n- **TypeScript** : Choisi pour sa fiabilité et sa sécurité.\n- **GSAP** : Employé pour animer modèles et séquences diverses.\n- **Navigation basée sur le défilement** : Conçue pour une transition en douceur entre les différentes scènes.",
		link: "https://dragonscroll-3js.vercel.app/"
	},
	{
		title: "CrossPong :\n Un pong 3D revisité",
		description: "CrossPong est une version revisitée du jeu classique Pong avec quatre terrains différents, chacun ayant ses propres éléments de jeu. Ce projet m'a vraiment challengée, surtout pour intégrer des objets 3D complexes et créer des animations avancées pour le web. Ça m'a permis d'explorer des techniques interactives et visuelles plus poussées.\n\n## Points Techniques Clés:\n\n- **React TypeScript** : Utilisé pour développer une application structurée et évolutive.\n- **Three Fiber** : Employé pour le rendu d'éléments 3D et leur intégration avec React.\n- **GSAP** : Employé pour animer modèles et séquences diverses.\n- **P2.js** : Utilisé pour des simulations physiques réalistes.\n- **XState** : Pour la gestion des différents états de jeu.\n- **Styled Components** : Choisie pour simplifier le style.",
		link: "https://cross-pong.vercel.app/"
	},
	{
		title: "Pixelated NightSky:\n Entre Tradition et Modernité",
		description: "Pixelated NightSky est un projet minimaliste qui combine l'art pixel rétro avec la technologie 3D moderne de react-three-fiber. On y trouve des étoiles pixelisées animées dans un ciel 3D rotatif, rappelant le style des anciens jeux.\n\n## Points Techniques Principaux:\n\n- **react-three-fiber** : Pour la création de l'environnement 3D.\n- **@react-three/drei** : Pour le chargement des textures et l'amélioration des animations.\n- **gsap** : Pour des animations fluides.",
		link: "https://pixelated-night-sky.vercel.app/"
	},
	{
		title: "Portfolio GitHub :\n Diversité de Projets Web et Système",
		description: "Découvrez mon répertoire GitHub, qui regroupe une variété de projets que j'ai développés. Vous y trouverez des informations détaillées et les codes sources des projets présentés, ainsi que quelque projets réalisés à l'École 42, tels que :\n\n- **Minishell** : Exploration de la programmation système et des interfaces en ligne de commande en C.\n- **Webserv** : Construction d'un serveur HTTP performant en C++98.\n- **Cub3d** : Transformation de cartes 2D en vues 3D avec du raycasting en C.\n- **Pushswap** : Défi en efficacité algorithmique et optimisation, abordé en C.",
		link: "https://github.com/pandamanxv3"
	},
	{
		title: "Voix Nomades, Empreintes Animales:\n Récits Parallèles et Immersion 3D",
		description: "Ce projet, qui m'a valu <span class='highlight'>le Prix Spécial « écriture numérique » 2024 du Concours Inalco de la nouvelle plurilingue</span>, met en parallèle trois scènes distinctes que l'on peut explorer à tout moment. Cette possibilité de passer d'une scène à l'autre renforce l'idée de parallélisme et de connexion entre les récits.\nJ'ai voulu pousser au maximum la mise en scène avec react-three-fiber, en créant une expérience immersive complète. Ce projet mêle des voix off, des animations et des modèles 3D à une narration, offrant une exploration immersive et captivante.\n\n## Points Techniques Principaux:\n\n- **react-three-fiber** : Utilisé pour développer une application structurée et évolutive.\n- **Three Fiber** : Employé pour le rendu d'éléments 3D et leur intégration avec React.\n- **Zustand** : Utilisé pour la gestion des états de l'application.\n- **Mixamo** : Employé pour l'animation des modèles 3D.\n- **Blender** : Utilisé pour la création et la modification des modèles 3D.\n- **Ableton** : Utilisé pour le mixage des voix.\n- **GSAP** : Employé pour animer modèles et séquences diverses.\n- **Styled Components** : Choisie pour simplifier le style.",
		link: "https://voix-nomades.vercel.app/"
	}


]

export const cameraConfig = {
	position: new Vector3(11.294, 3.057, 5.06)
};

export const initialCameraPosition = {
	position: new Vector3(11.294, 73.257, 5.56)
}
export const target = new Vector3(0.8, 3.6, -4);

export const UpPositionY = [
	[8.187, 14.421, -3.993],
	[2.119, 14.93, -4.428],
	[-3.46, 14.111, -4.638],
	[-8.307, 14.859, -3.883]
]

//34.8
export const RotationY = [
	0,
	0,
	0,
	0.8,
]

export const newPositionXZ = [
	{ x: 0, z: 0 },
	{ x: 0, z: 0 },
	{ x: 0, z: 0 },
	{ x: -3, z: 1 }
]


export type ModelInfo = {
	position: [number, number, number],
	rotation: [number, number, number],
	scale: [number, number, number]
};

export const modelInfos: ModelInfo[] = [
	{ position: [8.187, 4.421, -3.993], rotation: [0, -0.137, 0], scale: [2.772, 2.772, 2.772] },
	{ position: [2.119, 3.93, -4.428], rotation: [0, 0, 0], scale: [0.362, 0.307, 0.084] },
	{ position: [-3.46, 4.111, -4.638], rotation: [0, 0.033, 0], scale: [0.348, 0.348, 0.348] },
	{ position: [-8.307, 4.859, -3.883], rotation: [0, 0.186, 0], scale: [2.081, 3.872, 2.081] },
	{ position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
];