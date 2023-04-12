import React from "react"
import {styles} from "../styles"
import ComputersCanvas from "./canvas/Computers"

const Hero = () => {
  return (
    <section className='relative max-h-screen md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto pt-16'>
      <div className='flex'>
        <div className='flex flex-col'>
          <div className='violet w-5 h-5 bg-[#915eff] rounded-full'></div>
          <div className='w-1 h-72 bg-[#915eff] violet-gradient text-center relative left-2'></div>
        </div>

        <div className='pl-6'>
          <h1 className={styles.heroHeadText}> 
            Hi, I'm &nbsp; 
            <span className='text-[#915eff]'>Nicolás</span> 
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-10`}>
            I develop API servers, user 
            <br className='sm:block hidden'/>
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

//

export default Hero