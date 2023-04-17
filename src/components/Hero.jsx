// import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import {yo} from "../assets/index"
import { useSelector } from "react-redux";
import { titles } from "../constants";

const Hero = () => {
	const {language} = useSelector(s=>s)
	const {title, subtitle, check_cv} = titles.hero[language]

	/* language title, mix for Nicolás color */
	const titleSplit = title.split(" ")
	const titleIntro = titleSplit?.slice(0, titleSplit?.length-2)?.join(" ")
	const titleName = titleSplit[titleSplit.length-2]
	const titleWave = titleSplit[titleSplit.length-1]

	//*the structure varies in mobile, tablet and desktop
	return (
		<div className="text-white text-left pt-36 min-h-[87vh] overflow-hidden ">
			<section
				className={`grid grid-cols-1 xl:grid-cols-2 relative min-h-[50vh] mx-auto overflow-hidden pl-8`}
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
							{titleIntro} <span className="text-main-green">{titleName + " " + titleWave}</span>
						</h1>
						<p className={`${styles.heroSubText} mt-2 text-white-100`}>
							{subtitle}
						</p>
						<button className={`hidden md:block font-medium mt-8  px-6 py-3 rounded-lg ${styles.hoverChangeBorderAndColor} border-[1px]`}>
							{check_cv}
						</button>

						{/* follow me desktop */}
						<div className="hidden xl:block mt-24 tracking-wide">
							<p className="uppercase mb-3 font-medium inline w-54 border-b-2 border-secondary">
								{language==="spanish" ? "Sígueme" : "Follow me"} &nbsp;
								<i className="fa-solid fa-arrow-right inline w-54"></i>
							</p>
							<div className="mt-4">
								<i className={`fa-brands fa-linkedin-in text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}></i>
								<i className={`fa-brands fa-github text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}></i>
								<i className={`fa-brands fa-twitter text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}></i>
								<i className={`fa-regular fa-envelope text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}></i>
							</div>
						</div>
					</div>
				</div>


				{/* me picture */}
				<div className="md:flex relative left-8 mt-8">
					<div>
						<img src={yo} className="w-[300px] sm:w-[350px] sm:h-[400px] md:w-[400px] xl:w-[450px] lg:h-[450px] relative  border-main-green" alt="me picture"/>
					</div>

					{/* follow me mobile */}
					<div className="block xl:hidden mt-8 tracking-wide relative left-8">
							<p className="uppercase mb-3 font-medium inline w-54 border-b-2 border-secondary">
							{language==="spanish" ? "Sígueme" : "Follow me"} &nbsp;
								<i className="fa-solid fa-arrow-right inline w-54"></i>
							</p>
							<div className="mt-4">
								<i className={`fa-brands fa-linkedin-in text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}></i>
								<i className={`fa-brands fa-github text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}></i>
								<i className={`fa-brands fa-twitter text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}></i>
								<i className={`fa-regular fa-envelope text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}></i>
							</div>
							
							{/* show btn after social media in mobile */}
							<button className={`block md:hidden font-medium mt-8  px-6 py-3 rounded-lg ${styles.hoverChangeBorderAndColor} border-[1px]`}>
								{check_cv}
							</button>
						</div>
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
