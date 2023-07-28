import {
	Hero,
	About,
	Tech,
	Experience,
	Works,
	Contact,
} from "../components/index.js";

import React from "react";

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
