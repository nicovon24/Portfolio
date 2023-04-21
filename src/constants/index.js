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
			title: "Summary",
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
			subtitle: "02. Conocimientos",
		},
		english: {
			title: "Technologies",
			subtitle: "02. Tech stack",
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
	// {
	// 	title: "React.js Developer",
	// 	company_name: "Starbucks",
	// 	icon: complex,
	// 	iconBg: "#383E56",
	// 	date: "March 2020 - April 2021",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// }
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
		name_english: "Complex Gym",
		name_spanish: "Gimnasio Complex",
		description_english: "Full-stack SPA fully responsive for a real client",
		description_spanish: "Full-stack SPA responsive para un cliente real",
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
		description_english: "Full-stack SPA fully responsive for a real client",
		description_spanish: "Full-stack SPA responsive para un cliente real",
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
		name_english: "Videospedia",
		name_spanish: "Videospedia",
		description_english: "Full-stack SPA fully responsive for a real client",
		description_spanish: "Full-stack SPA responsive para un cliente real",
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
		description_english: "Full-stack SPA fully responsive for a real client",
		description_spanish: "Full-stack SPA responsive para un cliente real",
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
