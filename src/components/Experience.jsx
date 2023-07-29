import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, titles } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useSelector } from "react-redux";

const ExperienceCard = ({ experience, index }) => {
	const { language } = useSelector((s) => s);
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#112240",
				color: "#fff",
        marginRight: "8px",
        border: "2px solid #64ffda",
        borderRadius: "10px",
			}}
      className="lg:w-[950px] xl:w-[1150px]" /* adjusting container experience size */
			contentArrowStyle={{ borderRight: "7px solid  #64ffda" }}
			date={experience.date}
      dateClassName={`date-experience-${index+1}`}
			iconStyle={{ background: experience.iconBg }} 
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[70%] h-[70%] object-contain"
					/>
				</div>
			}
		>
			<div className="w-[100%] text-left">
				<div className="">
					<h3 className="text-white text-[24px] font-bold">{experience.title[language]}</h3>
					<p
						className="text-main-green text-[16px] font-semibold"
						style={{ margin: 0 }}
					>
						{experience.company_name[language]}
					</p>
				</div>

				<ul className="mt-5 list-disc ml-5 space-y-2">
					{experience.points[language].map((point, index) => (
						<li
							key={`experience-point-${index}`}
							className="text-white-100 text-[14px] pl-1 tracking-wider"
						>
							{point}
						</li>
					))}
				</ul>
			</div>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
  const {language} = useSelector(s=>s)
  const {title, subtitle} = titles?.experiences?.[language]
	return (
		<div className="w-[85vw] md:w-[90vw] mt-20 mx-auto flex flex-col items-start relative z-10">
			<motion.div variants={textVariant()} >
				<p className={`${styles.sectionSubText} text-white text-left`}>
					{subtitle}
				</p>
				<div className="flex items-center">
					<h2 className={`${styles.sectionHeadText} text-left`}>
						{title}
					</h2>
					<div className={styles.lineTitle}></div>
				</div>
				
			</motion.div>

			<div className="mt-10 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={`experience-${index}`} index={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default SectionWrapper(Experience, "experience");
