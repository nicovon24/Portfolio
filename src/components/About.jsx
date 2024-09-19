import React from "react";
import { Tilt } from "react-tilt"; // for cards animations
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, titles } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";
import { useSelector } from "react-redux";

const ServiceCard = ({ service, index }) => {
  const { language } = useSelector((s) => s);
  const { icon } = service;
  const title = service[language];

  let icon_final = (
    <i
      className={`${icon} text-black bg-main-green hover:bg-main-pink opacity-90 duration-500 text-3xl rounded-full`}
    ></i>
  );

  if (title === "IoT developer" || title === "Desarrollador IoT") {
    icon_final = (
      <svg
        className="w-16 h-16 p-1 rounded-full bg-main-green hover:bg-main-pink object-contain"
        width="60px"
        height="60px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.46447 15.5355C6.51185 13.5829 6.51185 10.4171 8.46447 8.46447M5.63592 18.364C2.1212 14.8493 2.1212 9.15077 5.63592 5.63605M15.5355 15.5355C17.4881 13.5829 17.4881 10.4171 15.5355 8.46447M18.364 18.364C21.8788 14.8493 21.8788 9.15077 18.364 5.63605M13 12.0001C13 12.5523 12.5523 13.0001 12 13.0001C11.4477 13.0001 11 12.5523 11 12.0001C11 11.4478 11.4477 11.0001 12 11.0001C12.5523 11.0001 13 11.4478 13 12.0001Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <Tilt
      className="w-full xs:w-full md:w-[300px] 2xl:w-[300px]"
      options={{
        max: 25,
        scale: 1,
        speed: 200,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-[#112240] rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          {title.includes("Star Wars") ? (
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 p-1 rounded-full bg-main-green hover:bg-main-pink object-contain"
            />
          ) : (
            icon_final
          )}
          <h3 className="text-secondary text-[20px] font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const {language} = useSelector(s=>s)
  const {title, subtitle, text} = titles?.about[language]

	return (
		<div className="section 2xl:px-0 w-[85vw] md:w-[90vw] mx-auto" id="about">
			<div className="mx-aut0 leading-relaxed">
        <motion.div variants={textVariant()} className="mt-8 text-left">
          <p className={`${styles.sectionSubText} text-white`}>{subtitle}</p>
          <div className="flex items-center">
            <h2 className={`${styles.sectionHeadText} text-main-green hover:text-main-pink`}>{title}</h2>
            <div className={styles.lineTitle}></div>
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
