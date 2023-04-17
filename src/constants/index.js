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
				"Lorem ipsum dolor sit amet consectetur \n adipisicing elit maxime",
			check_cv: "¡Revisá mi CV!",
		},
		english: {
			title: "Hi, here Nico 👋",
			subtitle:
				"Lorem ipsum dolor sit amet consectetur \n adipisicing elit maxime",
			check_cv: "Check out my CV!",
		},
	},
	about: {
		spanish: {
			title: "Summary",
			subtitle: "01. About me",
			text: "Lorem ipsum dolor sit amet consectetur \n adipisicing elit maxime",
		},
		english: {
			title: "Introduction",
			subtitle: "01. About me",
			text: "Lorem ipsum dolor sit amet consectetur \n adipisicing elit maxime",
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

const technologies = [
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
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "mongo DB",
		icon: mongo,
	},
	{
		name: "railway",
		icon: railway,
	},
	{
		name: "postgres",
		icon: postgres,
	},
	{
		name: "MP Api",
		icon: mercadopago,
	},
	{
		name: "vercel",
		icon: vercel,
	},
];

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
	// {
	// 	name: "Car Rent",
	// 	description:
	// 		"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "mongodb",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "tailwind",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: carrent,
	// 	source_code_link: "https://github.com/",
	// },
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
