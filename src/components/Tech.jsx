import React from "react";
import { BallCanvas } from "./canvas/Ball";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies, titles } from "../constants/index";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { useSelector } from "react-redux";
import { Tilt } from "react-tilt";

const TechCard = ({ tech, spanish, english, index }) => {
	const {language} = useSelector(s=>s)

	return (
		<div
			className="flex flex-wrap gap-8 justify-center relative pt-8 "
			key={index}
		>
			<Tilt className="w-full mb-16">
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card max-w-[650px]"
					whileHover={{ tilt: 10 }}
      		transition={{ duration: 2 }}
				>
					<div
						options={{
							max: 45,
							scale: 1,
							speed: 450,
						}}
						className="bg-[#112240] rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center
        		"
					>
						
						<p className={`text-secondary text-2xl mb-8 tracking-wider sm:text-[24px] text-[20px] underline
						`}>
							<i className="fa-solid fa-arrow-right underline "></i>&nbsp;
							{language==="spanish" ? spanish : english} 
							</p>
						<div
							className="
        		flex flex-wrap gap-3 justify-center items-center"
						>
							{tech?.map((t, index) => {
								return (
									<div className="ball-icon" key={index}>
										<img src={t?.icon} alt={t?.name} className={`${t?.name==="git" ? "w-[4.4rem]" : "w-20"}`} />
										<p className={`ball-text text-secondary relative top-[3px] ${t?.name==="git" && "top-[4px]"}`}>{t?.name}</p>
									</div>
								);
							})}
						</div>
					</div>
				</motion.div>
			</Tilt>
		</div>
	);
};

const Tech = () => {
	const { language } = useSelector((s) => s);
	const { title, subtitle } = titles?.tech[language];

	const techFront = technologies["Front end"];
	const techBack = technologies["Back end and DB"];
	const { Tools } = technologies;

	return (
		<div id="tech ">
			<motion.div variants={textVariant()} className="mt-8 mb-4 text-left">
				<p className={`${styles.sectionSubText} text-white`}> {subtitle}</p>
				<h2 className={`${styles.sectionHeadText} text-main-green`}>{title}</h2>
			</motion.div>
			{/* para que queden centrados los ultimos, justify-center y right-12 */}
			<div className="grid md:grid-cols-2 gap-4 md:gap-16">
				<TechCard tech={techFront} spanish={"Front-end:"} english={"Front-end"} />

				<TechCard tech={techBack} spanish={"Back-end:"} english={"Back-end"} />

				<TechCard tech={Tools} spanish={"Lenguajes y tecnologías"} english={"Languages and tools:"} />
			</div>
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
