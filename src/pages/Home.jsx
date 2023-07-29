import ModalProject from "../components/ModalProject.jsx";
import {
	Hero,
	About,
	Tech,
	Experience,
	Contact,
} from "../components/index.js";
import Works from "../components/Projects/index.jsx"; // Import the EnhancedWorks component

import React, { useState } from "react";

const Home = () => {
	{/* open Modal function and state */}
	const [isOpen, setIsOpen] = useState(false);

	function handleOpenModal() {
    setIsOpen(true);
  };
	
	return (
		<div className="mx-auto bg-main-blue">
			<Hero />
			<div className="mx-auto bg-main-blue relative z-[0.8]">
				<About />
				<Tech />
				<Works handleOpenModal={handleOpenModal}/>
				<Experience />
				<Contact />
				{isOpen && <ModalProject project={{}} isOpen={isOpen} setIsOpen={setIsOpen}/>}
			</div>
		</div>
	);
};

export default Home;
