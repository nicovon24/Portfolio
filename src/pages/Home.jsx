import ModalProject from "../components/ModalProject.jsx";
import { Hero, About, Tech, Experience, Contact } from "../components/index.js";
import Works from "../components/Projects/index.jsx"; // Import the EnhancedWorks component
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
	{
		/* open Modal function and state */
	}
	const [isOpen, setIsOpen] = useState(false);

	function handleOpenModal() {
		setIsOpen(true);
	}

	return (
		<div className="mx-auto bg-main-blue">
			<Hero />
			<div className="mx-auto bg-main-blue relative z-[0.8]">
				<About />
				<Tech />
				<Experience />
				<Works handleOpenModal={handleOpenModal} />
				<Contact />

				{/* animation with framer motion for close and open modal */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							key="modal"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<ModalProject isOpen={isOpen} setIsOpen={setIsOpen} />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Home;
