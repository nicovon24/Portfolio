import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { experiences, titles } from "../../constants";
import { svgSchool, svgWork } from "./Icons";
import { useSelector } from "react-redux";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { Tilt } from "react-tilt";

const Experience = () => {
	const { language } = useSelector((s) => s);

	let workIconStyles = {
		background: "#06d6a0",
	};
	let schoolIconStyles = {
		background: "#f9c74f",
	};
	const { title, subtitle, text } = titles?.experiences[language];

	return (
		<div>
			<Tilt
				className="section 2xl:px-0 w-[85vw] md:w-[90vw] mx-auto"
				options={{
					max: 25,
					scale: 1,
					speed: 200,
				}}
			>
				<motion.div variants={textVariant()} className="mt-8 text-left">
					<p className={`${styles.sectionSubText} text-white`}>{subtitle}</p>
					<div className="flex items-center">
						<h2
							className={`${styles.sectionHeadText} text-main-green hover:text-main-pink`}
						>
							{title}
						</h2>
						<div className={styles.lineTitle}></div>
					</div>
				</motion.div>
			</Tilt>
			<VerticalTimeline>
				{experiences?.map((item) => {
					let isWorkIcon = item.icon_type == "work";
					return (
						<VerticalTimelineElement
							key={item.key}
							date={item.date}
							dateClassName="date"
							iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
							icon={isWorkIcon ? svgWork : svgSchool}
						>
							<div className="flex flex-col justify-start ">
								<img
									src={`${item.icon}`}
									className="w-10"
									style={{ background: item.iconBg }}
								/>
								<div>
									<h3 className="vertical-timeline-element-title font-bold">
										{item.title[language]}
									</h3>
									<ul className="list-disc pl-5">
										{item.points[language].map((point, index) => (
											<li
												key={index}
												className="text-sm text-gray-700 leading-relaxed mb-2"
											>
												{point}
											</li>
										))}
									</ul>
								</div>
								{/* <span>{item.date}</span> */}
							</div>
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
};

export default Experience;
