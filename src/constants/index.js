import {
	css,
	git,
	html,
	javascript,
	reactjs,
	redux,
	tailwind,
	ts,
	next,
	star_wars,
	railway,
	vercel,
	trello,
	no_country,
	henry,
	complex_logo,
	freelance,
	complex_1,
	aldia_1,
	liqui_1,
	cloudlab_1,
	cloudlab_2,
	cloudlab_4,
	cloudlab_3,
	aldia_2,
	aldia_3,
	aldia_4,
	aldia_5,
	liqui_2,
	liqui_3,
	complex_3,
	complex_2,
	complex_4,
	complex_5,
	complex_6,
	complex_7,
	complex_8,
	nodeSvg,
	nextSvg,
	tailwindSvg,
	reduxSvg,
	reactSvg,
	tsSvg,
	jsSvg,
	cssSvg,
	htmlSvg,
	mongoSvg,
	csharpSvg,
	linuxSvg,
	gitSvg,
	sequelizeSvg,
	sqlSvg,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		english: "About",
		spanish: "Sobre mi",
	},
	{
		id: "tech",
		english: "Tech",
		spanish: "Tech",
	},

	// {
	// 	id: "experience",
	// 	english: "Experience",
	// 	spanish: "Experiencia",
	// },
	{
		id: "work",
		english: "Work",
		spanish: "Trabajos",
	},
	{
		id: "contact",
		english: "Contact",
		spanish: "Contacto",
	},
];
const titles = {
	hero: {
		spanish: {
			title: "¡Hola! Soy Nico 👋",
			subtitle:
				"Soy un apasionado desarrollador Front-end con habilidades en JavaScript, siempre motivado para aprender y crecer tanto personal como profesionalmente. Y amo lo que hago. 💙",
			check_cv: "¡Revisá mi CV!",
		},
		english: {
			title: "Hi, here Nico 👋",
			subtitle:
				"I am a passionate Front-end developer with skills in JavaScript, always motivated to learn and grow both personally and professionally. And I love what I do. 💙",

			check_cv: "Check out my CV!",
		},
	},
	about: {
		spanish: {
			title: "Introducción",
			subtitle: "01. Sobre mí",
			text:
				"¡Hola a todos! Radicado en Córdoba - Argentina, soy un desarrollador full-stack y estudiante de analista de sistemas. Hablo tres idiomas y me apasiona mejorar mis habilidades de codificación y de desarrollo de aplicaciones y sitios web con las tecnologías PERN y MERN. Además, me encanta trabajar por mi cuenta para mejorar mis habilidades blandas y duras creando proyectos individuales y de equipo",
		},
		english: {
			title: "Introduction",
			subtitle: "01. About me",
			text:
				"Hello there! I'm a trilingual full-stack developer and systems analyst student based in Cordoba, Argentina. I'm passionate about improving my coding and application development skills, and I build websites using the PERN and MERN stack. I also enjoy working independently to improve my soft and hard skills by creating individual and team projects.",
		},
	},
	tech: {
		spanish: {
			title: "Tecnologías",
			subtitle: "02. Conocimientos",
		},
		english: {
			title: "Technologies",
			subtitle: "02. Tech stack",
		},
	},
	experiences: {
		spanish: {
			title: "Experiencia",
			subtitle: "02. Prácticas y experiencia",
		},
		english: {
			title: "Experiences",
			subtitle: "02. Practical experience",
		},
	},
	works: {
		spanish: {
			title: "Proyectos",
			subtitle: "03. Trabajos",
		},
		english: {
			title: "Projects",
			subtitle: "03. Works",
		},
	},
	contact: {
		spanish: {
			title: "Contacto",
			subtitle: "04. Comunicate conmigo",
			formTitle: "Contactame",
			formSubtitle:
				"Puedes dejarme un mensaje si necesitas ayuda para crear un sitio web para ti o para tu empresa.",
		},
		english: {
			title: "Contact",
			subtitle: "04. Contact me",
			formTitle: "Message me",
			formSubtitle:
				"You can send me a message if you need any help in making a website for you or your company.",
		},
	},
};

const services = [
	{
		spanish: "Desarrollador Front-end",
		english: "Frontend developer",
		icon: "fa-solid fa-computer p-3",
		// icon: mobile,
	},
	{
		spanish: "Experiencia en Back-end",
		english: "Backend experience",
		icon: "fa-solid fa-database px-4 py-3",
		// icon: backend,
	},
	{
		spanish: "Amante del deporte",
		english: "Sports enthusiast",
		icon: "fa-regular fa-futbol px-4 py-3",
		// icon: creator,
	},
	{
		spanish: "Fan de Star Wars",
		english: "Star Wars fan",
		icon: star_wars,
		// icon: web,
	},
];

const technologies = {
	Languages: [
		{
			name: "HTML 5",
			icon: html,
		},
		{
			name: "CSS 3",
			icon: css,
		},
		{
			name: "JavaScript",
			icon: javascript,
		},
		{
			name: "Typescript",
			icon: ts,
		},
	],
	Libraries: [
		{
			name: "React JS",
			icon: reactjs,
		},
		{
			name: "Redux",
			icon: redux,
		},
		{
			name: "Tailwind CSS",
			icon: tailwind,
		},
		{
			name: "Next.js",
			icon: next,
		},
	],
	// "Back end and DB": [
	// 	{
	// 		name: "Node JS",
	// 		icon: nodejs,
	// 	},
	// 	{
	// 		name: "express",
	// 		icon: express,
	// 	},
	// 	{
	// 		name: "postgreSQL",
	// 		icon: postgres,
	// 	},
	// 	{
	// 		name: "sequelize",
	// 		icon: sequelize,
	// 	},
	// 	{
	// 		name: "mongo DB",
	// 		icon: mongo,
	// 	},
	// ],
	Tools: [
		{
			name: "railway",
			icon: railway,
		},

		{
			name: "vercel",
			icon: vercel,
		},
		{
			name: "trello",
			icon: trello,
		},
		{
			name: "git",
			icon: git,
		},
	],
};

const techSvg = {
	frontend: [
		{
			name: "HTML 5",
			icon: htmlSvg,
			nivel_spanish: "Avanzado",
			nivel_english: "Advanced",
		},
		{
			name: "CSS 3",
			icon: cssSvg,
			nivel_spanish: "Avanzado",
			nivel_english: "Advanced",
		},
		{
			name: "Javascript",
			icon: jsSvg,
			nivel_spanish: "Avanzado",
			nivel_english: "Advanced",
		},
		{
			name: "Typescript",
			icon: tsSvg,
			nivel_spanish: "Intermedio",
			nivel_english: "Intermediate",
		},
		{
			name: "React",
			icon: reactSvg,
			nivel_spanish: "Avanzado",
			nivel_english: "Advanced",
		},
		{
			name: "Redux",
			icon: reduxSvg,
			nivel_spanish: "Avanzado",
			nivel_english: "Advanced",
		},
		{
			name: "Tailwind",
			icon: tailwindSvg,
			nivel_spanish: "Avanzado",
			nivel_english: "Advanced",
		},
		{
			name: "Next.js",
			icon: nextSvg,
			nivel_spanish: "Intermedio",
			nivel_english: "Intermediate",
		},
	],
	backend: [
		{
			name: "Node.js",
			icon: nodeSvg,
			nivel_spanish: "Intermedio",
			nivel_english: "Intermediate",
		},
		{
			name: "Sequelize",
			icon: sequelizeSvg,
			nivel_spanish: "Intermedio",
			nivel_english: "Intermediate",
		},
		{
			name: "SQL",
			icon: sqlSvg,
			nivel_spanish: "Intermedio",
			nivel_english: "Intermediate",
		},
		{
			name: "Mongo DB",
			icon: mongoSvg,
			nivel_spanish: "Intermedio",
			nivel_english: "Intermediate",
		},
		{
			name: "Linux",
			icon: linuxSvg,
			nivel_spanish: "Básico",
			nivel_english: "Basic",
		},
		{
			name: "Git",
			icon: gitSvg,
			nivel_spanish: "Avanzado",
			nivel_english: "Advanced",
		},
		{
			name: "C Sharp",
			icon: csharpSvg,
			nivel_spanish: "Intermedio",
			nivel_english: "Intermediate",
		},
	],
};

const experiences = [
	/* ALDIA */
	{
		title: {
			spanish: "Front-end Developer",
			english: "Front-end Developer",
		},
		company_name: {
			spanish: "Freelance en Gen Consultores",
			english: "Freelance in Gen Consultores",
		},
		icon: freelance,
		iconBg: "#0087e0",
		date: "Apr. 2023 - Jul. 2023",
		points: {
			spanish: [
				"Estilado y diseño de gran parte de la aplicación",
				"Renderizado de componentes en diferentes secciones",
				"Mantenimiento y optimización de la app",
				"Asegurar alta calidad y rendimiento",
				"Trabajo en equipo y propuestas de mejora",
			],
			english: [
				"Styles and design of a great part of the application",
				"Rendering of the components in different sections",
				"Maintaining  and optimization of the site",
				"Ensuring high quality and performance",
				"Teamwork and proposing improvement opportunities",
			],
		},
	},
	/* No Country */
	{
		title: {
			spanish: "Full-stack Developer",
			english: "Full-stack Developer",
		},
		company_name: {
			spanish: "No Country",
			english: "No Country",
		},
		icon: no_country,
		iconBg: "#080940",
		date: "Apr. 2023 - Jul. 2023",
		points: {
			spanish: [
				"Liderar el armado de la base de datos y del servidor (back-end)",
				"Desarrollar las rutas y controladores de empleados",
				"Asistir en el frontend y el armado de componentes",
				"Proponer ideas para la mejora del back y el front-end",
			],
			english: [
				"Leadershipness for the design of the database and the back-end of the application",
				"Development of some routes and controllers",
				"Assisting on the frontend and components development",
				"Propose ideas for the improvement on the backend and frontend",
			],
		},
	},
	/* COMPLEX */
	{
		title: {
			spanish: "Desarrollador Front-end",
			english: "Front-end Developer",
		},
		company_name: {
			spanish: "Gimnasio Complex",
			english: "Complex Gym",
		},
		icon: complex_logo,
		iconBg: "rgba(238, 237, 242)",
		date: "Feb. 2023 - Mar. 2023",
		points: {
			spanish: [
				"Desarrollo de una SPA responsive utilizando principalmente React JS",
				"Trabajar con otros desarrolladores para crear un producto que sobrepase los requerimientos del usuario",
				"Diseñar y elaborar un panel de administrador para uso exclusivo de profesores y dueños",
				"Participar en reuniones utilizando metodologías ágiles para facilitar la mejora continua en el producto.",
			],
			english: [
				"Develop a responsive SPA primarily using React JS apart from other technologies",
				"Collaborate with other developers to create a product that exceeds user requirements",
				"Design and build an exclusive administrator panel for trainers and owners' use",
				"Participate in meetings using agile methodologies to facilitate continuous improvement in the product.",
			],
		},
	},

	/* Teaching Assistant */
	{
		title: {
			spanish: "Asistente de enseñanza / Tutor",
			english: "Teaching Assistant / Tutor",
		},
		company_name: {
			spanish: "Soy Henry",
			english: "Soy Henry",
		},
		icon: henry,
		iconBg: "#ffff01",
		date: "Jan. 2023 - Apr. 2023",
		points: {
			spanish: [
				"Coordinar el grupo de estudiantes con el objetivo de lograr su adaptación al programa",
				"Orientar a los estudiantes en los primeros pasos de la cursada y resolver sus inquietudes",
				"Asistir y acompañar en la resolución de ejercicios y promover la colaboración grupal (Pair Programming)",
				"Proponer ideas para la mejora de los procesos del Bootcamp",
				"Promover la cohesión grupal y generar comunidad",
			],
			english: [
				"Coordinate a group of new joining students throughout the whole bootcamp experience",
				"Guide students in the first steps of the course and clarify their doubts",
				"Provide assistance in solving exercises and encourage group teamwork (Pair Programming)",
				"Suggest ideas to improve the Bootcamp processes",
				"Promote collaboration and build community within the students",
			],
		},
	},
	{
		title: {
			spanish: "Estudiante de Desarrollador Full-stack",
			english: "Full-stack Developer Student",
		},
		company_name: {
			spanish: "Soy Henry",
			english: "Soy Henry",
		},
		icon: henry,
		iconBg: "#ffff01",
		date: "Dic. 2022 - Apr. 2023",
		points: {
			spanish: [
				"Armado de la base de datos utilizando diagramas de relación y PostgreSQL",
				"Conexión del back-end y la base de datos con la api Rawg referente a videojuegos",
				"Diseño y elaboración del UX y UI",
				"Presentación formal del proyecto ante los profesores de Henry",
			],
			english: [
				"Building of the database using entity relationship diagrams and PostgreSQL",
				"Connecting of the back-end and database with the Rawg API for video games",
				"Designing and developing of the UX and UI",
				"Formal presentation of the project to Henry",
			],
		},
	},
];

const projects = [
	{
		name_english: "Cloudlab - No Country",
		name_spanish: "Cloudlab - No Country",
		description_english:
			"Platform for clinical laboratories that seek to help in the management of the results of the different studies and patients.",
		description_spanish:
			"Plataforma para laboratorios clínicos que busquen agilizar la gestión de los resultados de los diferentes estudios y pacientes.",
		tags: [
			{ name: "react", image: next },
			{ name: "typescript", image: ts },
			{ name: "tailwind", image: tailwind },
			// { name: "next.js", color: "text-gray-300" },
			// { name: "node", color: "text-green-500" },
			// { name: "tailwind", color: "text-yellow-500" },
			// { name: "typescript", color: "text-blue-500" },
			// { name: "team work", color: "text-white" },
		],
		image: [cloudlab_1, cloudlab_2, cloudlab_3, cloudlab_4],
		source_code_link: "https://github.com/No-Country/s9-16-m-node-react",
		source_deploy: "https://cloudlab-s9-16.vercel.app/",
	},
	{
		name_english: "Aldia APP - Gen Consultores",
		name_spanish: "Aldia APP - Gen Consultores",
		description_english:
			"Application for small businesses and individuals to improve the flexible management of their finances, income and expenses.",
		description_spanish:
			"Aplicación para pequeñas empresas e individuos para mejorar la gestión flexible de sus finanzas, ingresos y egresos.",
		tags: [
			{ name: "react", image: next },
			{ name: "typescript", image: ts },
			{ name: "tailwind", image: tailwind },
			// { name: "next.js", color: "text-gray-300" },
			// { name: "node", color: "text-green-500" },
			// { name: "tailwind", color: "text-yellow-500" },
			// { name: "typescript", color: "text-blue-500" },
			// { name: "team work", color: "text-white" },
		],
		image: [aldia_1, aldia_2, aldia_3, aldia_4, aldia_5],
		source_code_link: "https://github.com/Juanlopez01/aldia-app",
		source_deploy: "https://aldia.lat/",
	},
	{
		name_english: "Liqui - No Country",
		name_spanish: "Liqui - No Country",
		description_english:
			"Academic SPA where an organization can improve the management of salaries and settlements of its employees.",
		description_spanish:
			"SPA académico donde una organización puede mejorar la gestión de los sueldos y liquidaciones de sus empleados.",
		tags: [
			{ name: "react", image: reactjs },
			{ name: "tailwind", image: tailwind },
		],
		image: [liqui_1, liqui_2, liqui_3],
		source_code_link: "https://github.com/No-Country/C11-10M-Node-js-react",
		source_deploy: "https://c11-10-m-node-js-react.vercel.app/",
	},
	{
		name_english: "Complex Gym - PF Henry",
		name_spanish: "Gimnasio Complex - PF Henry",
		description_english:
			"Website for an Argentine gym to manage its activities. It is currently not active.",
		description_spanish:
			"Sitio web para un gimnasio argentino para gestión de sus actividades. Actualmente no está activa.",
		tags: [
			{ name: "react", image: reactjs },
			{ name: "tailwind", image: tailwind },
		],
		image: [
			complex_1,
			complex_6,
			complex_7,
			// complex_4,
			complex_5,
			complex_2,
			complex_8,
			// complex_3,
		],
		source_code_link: "https://github.com/complexgym/PF-Complex-Gym-JS",
		source_deploy: "https://pf-complex-gym-henry.vercel.app/",
	},
];

//*cv
const links = {
	cv: {
		spanish:
			"https://drive.google.com/file/d/1NZeNZnvtEmJ2F9WGm8Duy6gAjJOrlM-Z/view?usp=drive_link",
		english:
			"https://drive.google.com/file/d/1NCbxnLinNSC08hUBNUEvYf4Lja4Pf5wh/view?usp=drive_link",
	},
};

export {
	services,
	technologies,
	techSvg,
	experiences,
	projects,
	titles,
	links,
};
