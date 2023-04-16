import React from 'react'
import {BallCanvas} from "./canvas/Ball"
import SectionWrapper from "../hoc/SectionWrapper"
import {technologies, titles} from "../constants/index"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useSelector } from 'react-redux';

const Tech = () => {
  const {language} = useSelector(s=>s)
  const {title, subtitle} = titles?.tech[language]
  return (
    <div id="tech">
      <motion.div variants={textVariant()} className="mt-8 mb-4 text-left">
          <p className={`${styles.sectionSubText} text-white`}> {subtitle}</p>
          <h2 className={`${styles.sectionHeadText} text-main-green`}>{title}</h2>
      </motion.div>
      {/* para que queden centrados los ultimos, justify-center y right-12 */}
      <div className='flex flex-wrap gap-x-10 gap-y-10 justify-center relative right-12'>
        {technologies?.map(tech=>{
          return <div key={tech?.name} className='w-28 h-28'>
            <div className='ball-icon'>
              <BallCanvas icon={tech?.icon}/>
              <p className='ball-text text-white relative bottom-4'>{tech?.name}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech")