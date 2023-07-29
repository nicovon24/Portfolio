import React from "react";
import { projects, titles } from "../../constants";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import SectionWrapper from "../../hoc/SectionWrapper";
import WorkCard from "./CardNew";

const Works = (props) => {
	const { language } = useSelector((s) => s);

	return (
		<div
			className="max-w-[90vw] text-white px-6 sm:py-16 py-10 mx-auto relative z-0"
			id="work"
		>
			<motion.div variants={textVariant()} className="mt-8 mb-4 text-left ">
				<p className={`${styles.sectionSubText} text-white`}>
					{titles?.works[language]?.subtitle}
				</p>
				<div className="flex items-center">
					<h2 className={`${styles.sectionHeadText} text-main-green`}>
						{titles?.works[language]?.title}
					</h2>
					<div className={styles.lineTitle}></div>
				</div>
			</motion.div>
			<div className="text-white flex flex-wrap gap-x-12 ">
				{projects?.map((project, index) => {
					return (
						<WorkCard
							project={project}
							key={index}
							index={index}
							language={language}
							handleOpenModal={props.handleOpenModal}
						/>
					);
				})}
			</div>
		</div>
	);
};

const EnhancedWorks = SectionWrapper(Works, "works");
export default EnhancedWorks;
