import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { Tilt } from "react-tilt";

const WorkCard = ({ project, index, language }) => {
	const {source_code_link, source_deploy} = project

	return (
		<div
			className="flex flex-wrap gap-8 justify-center pt-8 
			w-[90vw] md:w-[400px] lg:w-[450px] xl:w-[480px] 2xl:w-[410px] 3xl:w-[440px]"
			key={index}
		>
			<Tilt className="w-[75vw] mb-16"
			options={{
				max: 15,
				scale: 1,
				speed: 200,
			}}>
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient"
					whileHover={{ tilt: 10 }}
					transition={{ duration: 2 }}
				>
					<div
						options={{
							max: 10,
							scale: 1,
							speed: 200,
						}}
						className="bg-[#112240] rounded-[20px] p-6 flex flex-col justify-center
        		"
					>
						<div key={index}>
							<div className="relative ">
								<img
									className="relative z-10 top-0 left-0 w-full h-[220px] mb-3 rounded-xl"
									src={project?.image[0]} 
									alt={project?.name + " img"}
								/>
							</div>
							<div className="text-left">
								<p
									className={
										"text-white hover:text-main-pink hover:opacity-90 duration-1000 font-black text-xl pb-2 "
									}
								>
									{project["name_" + language]}
								</p>
								<p className="text-gray-400 tracking-wider text-justify pb-2">
									{project["description_" + language]}
								</p>
								{project?.tags?.map((tag, index)=>{
									return <span className={`${tag?.color ? tag?.color : "text-gray-500"} + " pr-2`} key={index}>{"#" + tag?.name + " "}</span>
								})}
								
							</div>
							<div className="text-right pt-2 text-2xl ">
								{source_code_link && <a href={source_code_link} target="_blank">
									<i className={`fa-brands fa-github cursor-pointer p-1 rounded-full mr-2 ${styles?.hoverChangeBorderAndColor}`}></i>
								</a>}
								{source_deploy &&  <a href={source_deploy} target="_blank">
									<i className={`fa-solid fa-globe cursor-pointer p-1 rounded-full ${styles?.hoverChangeBorderAndColor}`}></i>
								</a>}
							</div>
						</div>
					</div>
				</motion.div>
			</Tilt>
		</div>
	);
};

export default WorkCard