import {
	backend,
	creator,
	mobile,
	web,
	github,
	css,
	git,
	html,
	javascript,
	mongo,
	nodejs,
	reactjs,
	redux,
	tailwind,
	postgres,
	star_wars,
	railway,
	vercel,
	mercadopago,
	express,
	sequelize,
	trello,
	complex,
	rick,
	videospedia,
	todo_list,
	henry,
	complex_logo,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		english: "About",
		spanish: "Sobre mi",
	},
	// {
	// 	id: "tech",
	// 	english: "Tech",
	// 	spanish: "Tech",
	// },
	{
		id: "experience",
		english: "Experience",
		spanish: "Experiencia",
	},
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
				"Soy un desarrollador Full Stack, en JavaScript, con un entusiasmo por crear aplicaciones web atractivas y fáciles de usar. Y me apasiona lo que hago 💙.",
			check_cv: "¡Revisá mi CV!",
		},
		english: {
			title: "Hi, here Nico 👋",
			subtitle:
				"I am a Javascript full-stack developer with a passion for creating engaging and user-friendly web applications. And I love what I do 💙.",
			check_cv: "Check out my CV!",
		},
	},
	about: {
		spanish: {
			title: "Introducción",
			subtitle: "01. Sobre mí",
			text:
				"¡Hola a todos! Radicado en Córdoba - Argentina, soy un desarrollador full-stack y estudiante de analista de sistemas. Hablo tres idiomas y me apasiona mejorar mis habilidades de codificación y de desarrollo de aplicaciones y sitios web con las tecnologías PERN. Además, me encanta trabajar por mi cuenta para mejorar mis habilidades blandas y duras creando proyectos individuales y de equipo",
		},
		english: {
			title: "Introduction",
			subtitle: "01. About me",
			text:
				"Hi there! I'm a trilingual full-stack developer and systems analyst student based in Cordoba, Argentina. I'm passionate about improving my coding and application development skills, and I build websites using the PERN stack. I also enjoy working independently to improve my soft and hard skills by creating individual and team projects.",
		},
	},
	tech: {
		spanish: {
			title: "Tecnologías",
			// subtitle: "02. Conocimientos",
		},
		english: {
			title: "Technologies",
			// subtitle: "02. Tech stack",
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
		spanish: "Desarrollador Back-end",
		english: "Backend Developer",
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
	"Front end": [
		{
			name: "HTML 5",
			icon: html,
		},
		{
			name: "CSS 3",
			icon: css,
		},
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
	],
	"Back end and DB": [
		{
			name: "Node JS",
			icon: nodejs,
		},
		{
			name: "express",
			icon: express,
		},
		{
			name: "postgreSQL",
			icon: postgres,
		},
		{
			name: "sequelize",
			icon: sequelize,
		},
		{
			name: "mongo DB",
			icon: mongo,
		},
	],
	Tools: [
		{
			name: "JavaScript",
			icon: javascript,
		},
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

const experiences = [
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
		iconBg: "#a7d7e7",
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

	/* PI */
	{
		title: {
			spanish: "Desarollador Full-stack",
			english: "Full-stack Developer",
		},
		company_name: {
			spanish: "Soy Henry",
			english: "Soy Henry",
		},
		icon: henry,
		iconBg: "#ffff01",
		date: "Jan. 2023 - Feb. 2023",
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

const testimonials = [
	// {
	// 	testimonial:
	// 		"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
	// 	name: "Sara Lee",
	// 	designation: "CFO",
	// 	company: "Acme Co",
	// 	image: "https://randomuser.me/api/portraits/women/4.jpg",
	// },
	// {
	// 	testimonial:
	// 		"I've never met a web developer who truly cares about their clients' success like Rick does.",
	// 	name: "Chris Brown",
	// 	designation: "COO",
	// 	company: "DEF Corp",
	// 	image: "https://randomuser.me/api/portraits/men/5.jpg",
	// },
	// {
	// 	testimonial:
	// 		"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
	// 	name: "Lisa Wang",
	// 	designation: "CTO",
	// 	company: "456 Enterprises",
	// 	image: "https://randomuser.me/api/portraits/women/6.jpg",
	// },
];

const projects = [
	{
		name_english: "Complex Gym - PF Henry",
		name_spanish: "Gimnasio Complex - PF Henry",
		description_english:
			"Full-stack SPA fully responsive for a real client, we had to work with a team of 8 people.",
		description_spanish:
			"Full-stack SPA responsive para un cliente real, trabajamos en un equipo de ocho personas.",
		tags: [
			{ name: "react", color: "text-[#2f80ed]" },
			{ name: "node", color: "text-green-500" },
			{ name: "tailwind", color: "text-yellow-500" },
			{ name: "auth0", color: "text-gray-400" },
		],
		image: complex,
		source_code_link: "https://github.com/complexgym/PF-Complex-Gym-JS",
		source_deploy: "https://pf-complex-gym-henry.vercel.app/",
	},
	{
		name_english: "Rick and Morty Site",
		name_spanish: "App de Rick and Morty",
		description_english:
			"SPA winner of a contest in a cohort of more than 400 people in Henry's bootcamp.",
		description_spanish:
			"SPA ganadora de un concurso en una cohorte de más de 400 personas en Henry.",
		tags: [
			{ name: "react", color: "text-[#2f80ed]" },
			{ name: "node", color: "text-green-500" },
			{ name: "css modules", color: "text-red-500" },
		],
		image: rick,
		source_code_link: "https://github.com/nicovon24/Rick-and-Morty-App",
		// source_deploy: "https://videospedia-nico-von.vercel.app/",
	},
	{
		name_english: "Videospedia - PI Henry",
		name_spanish: "Videospedia - PI Henry",
		description_english:
			"Full-stack project made for Soy Henry bootcamp, with the topic of videogames.",
		description_spanish:
			"Proyecto full-stack hecho para el bootcamp de Soy Henry, con el tema de videojuegos.",
		tags: [
			{ name: "react", color: "text-[#2f80ed]" },
			{ name: "node", color: "text-green-500" },
			{ name: "css modules", color: "text-red-500" },
		],
		image: videospedia,
		source_code_link: "https://github.com/nicovon24/PI-Videogames-SoyHenry.git",
		// source_deploy: "https://videospedia-nico-von.vercel.app/",
	},
	{
		name_english: "Todo-list",
		name_spanish: "Lista de tareas",
		description_english:
			"First project made with Mongo DB and Mongoose technology.",
		description_spanish: "Primer proyecto hecho con Mongo DB y Mongoose.",
		tags: [
			{ name: "react", color: "text-[#2f80ed]" },
			{ name: "mongo", color: "text-white" },
			{ name: "tailwind", color: "text-yellow-500" },
		],
		image: todo_list,
		source_code_link: "https://github.com/nicovon24/Todo-List-Mongo",
		// source_deploy: "https://pf-complex-gym-henry.vercel.app/",
	},
	// {
	// 	name: "Job IT",
	// 	description:
	// 		"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "restapi",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "scss",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: jobit,
	// 	source_code_link: "https://github.com/",
	// },
	// {
	// 	name: "Trip Guide",
	// 	description:
	// 		"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
	// 	tags: [
	// 		{
	// 			name: "nextjs",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "supabase",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: tripguide,
	// 	source_code_link: "https://github.com/",
	// },
];

export { services, technologies, experiences, testimonials, projects, titles };
