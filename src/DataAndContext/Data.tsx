import { Vector3 } from "three";

export enum RefType {
	BuildingDragon,
	BuildingCrossPong,
	BuildingSky,
	BuildingGithub,
	BuildingAds,
	StreetLight,
	StreetSign,
	Road
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
	}

]

export const portFolioInfoFr = [
	{
		title: "DragonScroll3JS :\n Animation 3D avec Three.js",
		description: "DragonScroll3JS est un projet web conçu pour exploiter les capacités de Three.js dans la création d'animations 3D. Le projet est centré autour d'une statue de dragon, utilisée comme élément principal pour expérimenter avec des animations sophistiquées, des perspectives de caméra variées et des mises en scène élaborées. Ce travail m'a permis de renforcer mes compétences en Three.js et TypeScript, mettant l'accent sur la création d'expériences interactives 3D sur le web.\n\n## Points Techniques Clés :\n\n- **Three.js** : Utilisé pour la modélisation et les animations 3D.\n- **TypeScript** : Choisi pour sa fiabilité et sa sécurité.\n- **GSAP** : Employé pour animer modèles et séquences diverses.\n- **Navigation basée sur le défilement** : Conçue pour une transition en douceur entre les différentes scènes.",
		link: "https://dragonscroll-3js.vercel.app/"
	},
	{
		title: "CrossPong :\n Un pong 3D revisité",
		description: "CrossPong revitalise le jeu classique de Pong avec quatre terrains distincts, chacun doté d'éléments de jeu uniques. Ce projet m'a présenté des défis majeurs, notamment en intégration d'objets 3D complexes et en création d'animations sophistiquées dans un environnement web, me poussant à utiliser des techniques interactives et visuelles avancées.\n\n## Points Techniques Clés:\n\n- **React TypeScript** : Utilisé pour développer une application structurée et évolutive.\n- **Three Fiber** : Employé pour le rendu d'éléments 3D et leur intégration avec React.\n- **GSAP** : Employé pour animer modèles et séquences diverses.\n- **P2.js** : Utilisé pour des simulations physiques réalistes.\n- **XState** : Pour la gestion des différents états de jeu.\n- **Styled Components** : Choisie pour simplifier le style.",
		link: "https://cross-pong.vercel.app/"
	},
	{
		title: "Pixelated NightSky:\n Entre Tradition et Modernité",
		description: "Pixelated NightSky est projet minimaliste  qui associe l'art pixel rétro à la technologie 3D moderne avec react-three-fiber. Il met en scène des étoiles pixelisées animées dans un ciel 3D rotatif, pour un hommage nostalgique au style des anciens jeux.\n\n## Points Techniques Principaux:\n\n- **react-three-fiber** : Pour la création de l'environnement 3D.\n- **@react-three/drei** : Pour le chargement des textures et l'amélioration des animations.\n- **gsap** : Pour des animations fluides.",
		link: "https://pixelated-night-sky.vercel.app/"
	},
	{
		title: "Portfolio GitHub :\n Diversité de Projets Web et Système",
		description: "Découvrez mon répertoire GitHub, qui regroupe une variété de projets que j'ai développés. Vous y trouverez des informations détaillées et les codes sources des projets présentés, ainsi que quelque projets réalisés à l'École 42, tels que :\n\n- **Minishell** : Exploration de la programmation système et des interfaces en ligne de commande en C.\n- **Webserv** : Construction d'un serveur HTTP performant en C++98.\n- **Cub3d** : Transformation de cartes 2D en vues 3D avec du raycasting en C.\n- **Pushswap** : Défi en efficacité algorithmique et optimisation, abordé en C.",
		link: "https://github.com/pandamanxv3"
	}
]

export const cameraConfig = {
	position: new Vector3(8.294, 4.957, 5.06)
};

export const target = new Vector3(1.8, 4.6, -3);

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
];