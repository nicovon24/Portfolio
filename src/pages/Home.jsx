import {
	Hero,
	Navbar,
	About,
	Tech,
	Experience,
	Works,
	Feedbacks,
	Contact,
} from "../components/index.js";

const Home = () => {
	return (
		<div className="mx-auto bg-main-blue">
			<Hero />
			<div className="mx-auto bg-main-blue relative z-[0.8]">
				<About />
				<Tech />
				<Experience />
				<Works />
				<Contact />
			</div>
		</div>
	);
};

export default Home;
