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
    <Tilt className="xs:w-[240px] 2xl:w-[260px] w-full mb-16">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-[#112240] rounded-[20px] py-5 px-12 min-h-[280px]
        flex justify-evenly items-center flex-col">
          
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
  const {title, subtitle} = titles?.about[language]

	return (
		<div className="2xl:px-0" id="about">
			<div className="mx-auto">
        <motion.div variants={textVariant()} className="mt-8 text-left">
          <p className={`${styles.sectionSubText} text-white`}>{subtitle}</p>
          <h2 className={`${styles.sectionHeadText} text-main-green hover:text-main-pink`}>{title}</h2>
        </motion.div>

        <motion.p variant={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left
        ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
          praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
          Veritatis obcaecati tenetur iure eius earum ut molestias architecto
          voluptate aliquam nihil, eveniet aliquid culpa officia aut
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center xl:place-items-start gap-4">
        {services?.map((service, index)=>{
          return <ServiceCard key={index} service={service} index={index}/>
        })}
      </div>
		</div>
	);
};

// export default About
export default SectionWrapper(About, "about");
