import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {yo} from "../assets/index"

const Hero = () => {
	return (
		<div className="text-white text-left pt-16 overflow-hidden ">
			<section
				className={`grid grid-cols-1 xl:grid-cols-2 relative min-h-[50vh] mx-auto overflow-hidden`}
			>
				{/* intro text and cv */}
				<div
					className={`inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
					// className={`inset-0 top-[60px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
				>
					<div className="flex flex-col justify-center items-center mt-5">
						<div className="w-5 h-5 rounded-full bg-main-green" />
						<div className="w-1 sm:h-80 h-40 main-green-gradient" />
					</div>

					<div>
						<h1 className={`${styles.heroHeadText} text-white`}>
							Hi, I'm <span className="text-main-green">Nicolás</span>
						</h1>
						<p className={`${styles.heroSubText} mt-2 text-white-100`}>
							Lorem ipsum dolor sit amet consectetur      <br className="sm:block hidden" />
							adipisicing elit maxime 
						</p>
						<button className={`mt-8 text-main-green border-2 border-main-green px-6 py-3 rounded-lg`}>
							Check out my CV!
						</button>
					</div>
				</div>


				{/* me picture */}
				<div className="flex justify-center mt-8">
					<img src={yo} className="w-[300px] sm:w-[400px]" alt="me picture"/>
				</div>
				{/* computer and move to about button */}
				{/* NO BORRAR POR LAS DUDAS*/}
				{/* <div
					className={`flex absolute inset-0 top-[60px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
				>
					<ComputersCanvas />
				</div> */}

				{/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
					<a href="#about">
						<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: "loop",
								}}
								className="w-3 h-3 rounded-full bg-secondary mb-1"
							/>
						</div>
					</a>
				</div> */}
			</section>
		</div>
	);
};

export default Hero;
