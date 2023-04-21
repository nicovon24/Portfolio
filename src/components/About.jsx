import React from "react";
import { Tilt } from "react-tilt"; //for cards animations
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, titles } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from "../hoc/index"
import { useSelector } from "react-redux";

const ServiceCard = ({service, index}) => {
  const {language} = useSelector(s=>s)
  const {icon} = service
  const title = service[language]

  return(
    <Tilt className="w-full xs:w-full md:w-[300px] 2xl:w-[300px]"
    options={{
      max: 25,
      scale: 1,
      speed: 200,
    }}>
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-[#112240] rounded-[20px] py-5 px-12 min-h-[280px]
        flex flex-col justify-evenly items-center">
          
          {title.includes("Star Wars") ? <img src={icon} alt={title} className="w-16 h-16 p-1 rounded-full bg-main-green hover:bg-main-pink object-contain"/> 
          : <i className={`${icon} text-black bg-main-green hover:bg-main-pink opacity-90 duration-500 text-3xl rounded-full`}></i>}
          <h3 className="text-secondary text-[20px] font-bold ry">{title}</h3>
        </div>
      </motion.div>
    </Tilt>    
  )
}

const About = () => {
  const {language} = useSelector(s=>s)
  const {title, subtitle, text} = titles?.about[language]

	return (
		<div className="2xl:px-0 max-w-[90vw] mx-auto" id="about">
			<div className="mx-aut0 leading-relaxed">
        <motion.div variants={textVariant()} className="mt-8 text-left">
          <p className={`${styles.sectionSubText} text-white`}>{subtitle}</p>
          <div className="flex">
            <h2 className={`${styles.sectionHeadText} text-main-green hover:text-main-pink`}>{title}</h2>
          </div>
        </motion.div>

        <motion.p variant={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left
        ">
          {text}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-between gap-12 w-full">
        {services?.map((service, index)=>{
          return <ServiceCard key={index} service={service} index={index}/>
        })}
      </div>
		</div>
	);
};

// export default About
export default SectionWrapper(About, "about");
