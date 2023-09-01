import React from "react";
import SectionWrapper from "../../../hoc/SectionWrapper";
import { techSvg, titles } from "../../../constants/index";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import { fadeIn, textVariant } from "../../../utils/motion";
import { useSelector } from "react-redux";

const TechCard = ({ tech, spanish, english, index }) => {
	const { language } = useSelector((s) => s);

	return (
		<div
			className={`section gap-8 justify-between relative pt-8`}
			key={index}
			id="tech"
		>
			{/* <Tilt
				className="w-full mb-16"
				options={{
					max: 20,
					scale: 1,
					speed: 200,
				}}
			> */}
			{/* card background */}
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="md:min-w-[500px] xl:min-w-[650px] 2xl:min-w-[700px] 3xl:min-w-[800px] green-pink-gradient p-[1px] rounded-[20px] shadow-card "
			>
				<div
					className="w-full bg-[#112240] rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center
        		"
				>
					<p
						className={`text-secondary text-2xl mb-8 tracking-wider sm:text-[24px] text-[20px] underline
						`}
					>
						{/* for example front-end: */}
						<i className="fa-solid fa-arrow-right underline "></i>&nbsp;
						{language === "spanish" ? spanish : english}:
					</p>
					<div className="w-full">
						<div
							className="
        			flex flex-wrap sm:grid sm:grid-cols-2 gap-8 xl:pl-4"
						>
							{//tech map
							tech?.map((t, index) => {
								return (
									<div className="flex gap-3" key={index}>
										<img src={t?.icon} alt={t?.name} className="w-4 md:w-6 xl:w-8" />
										
										{/* name and level tech */}
										<div className="">
											<p className="text-white font-bold flex justify-left">{t?.name}</p>
											<p className="text-gray-400 flex justify-left">{t[`nivel_${language}`]}</p>
										</div>
										{/* <p className={`ball-text text-secondary relative top-[3px] ${t?.name==="git" && "top-[4px]"}`}>{t?.name}</p> */}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</motion.div>
			{/* </Tilt> */}
		</div>
	);
};

const TechSvg = () => {
	const { language } = useSelector((s) => s);
	const { title, subtitle } = titles?.tech[language];

	const techFrontend = techSvg["frontend"];
	const techBackend = techSvg["backend"];

	return (
		<div id="tech" className={`mt-32 w-[85vw] md:w-[90vw] mx-auto`}>
			<div variants={textVariant()} className={` mb-4 text-left `}>
				<p className={`${styles.sectionSubText} text-white`}> {subtitle}</p>
				<div className="flex">
					<h2 className={`${styles.sectionHeadText} text-main-green`}>{title}</h2>
				</div>
			</div>
			{/* para que queden centrados los ultimos, justify-center y right-12 */}
			<div className="flex flex-wrap justify-between">
				<TechCard tech={techFrontend} spanish={"Frontend"} english={"Frontend"} />

				<TechCard tech={techBackend} spanish={"Backend"} english={"Backend"} />

				{/* <TechCard tech={techLanguages} spanish={"Lenguajes"} english={"Languages"} />

				<TechCard tech={techLibraries} spanish={"Librerías"} english={"Libraries"} /> 

				<TechCard tech={Tools} spanish={"Tecnologías"} english={"Tools"} /> */}
			</div>
		</div>
	);
};

export default SectionWrapper(TechSvg, "tech");
