import React, { useState } from "react";
import { styles } from "../styles";
import { pdfenglish, pdfspanish, yo } from "../assets/index";
import { useSelector } from "react-redux";
import { links, titles } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { TypeAnimation } from "react-type-animation";
import { Document, Page } from "react-pdf";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";
import DocuPdf from "./DocuPdf";

const Hero = () => {
	const [numPages, setNumPages] = useState();
	const [pageNumber, setPageNumber] = useState(1);

	const { language } = useSelector((s) => s);
	const { title, subtitle, check_cv } = titles.hero[language];

	/* language title, mix for Nicolás color */
	const titleSplit = title.split(" ");
	const titleIntro = titleSplit?.slice(0, titleSplit?.length - 2)?.join(" ");
	const titleName = titleSplit[titleSplit.length - 2];
	const titleWave = titleSplit[titleSplit.length - 1];

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	//*the structure varies in mobile, tablet and desktop
	return (
		<div className="bg-hero md:bg-main-blue">
			<div
				className="w-[85vw] md:w-[90vw] text-white pt-[130px] xl:pt-[170px] 
		"
			>
				<div className="min-h-[100vh] sm:min-h-[130vh] xl:min-h-[100vh] 2xl:min-h-[85vh]">
					<section
						className={`grid grid-cols-1 text-left xl:grid-cols-2 relative min-h-[50vh] mx-auto `}
					>
						{/* intro text, gradient and cv */}
						<div
							className={`inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
							// className={`inset-0 top-[60px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
						>
							<div className="flex flex-col justify-center items-center mt-5">
								<div className="w-5 h-5 rounded-full bg-main-green" />
								<div className="w-1 h-[10rem] sm:h-[23rem] main-green-gradient" />
							</div>

							<div>
								<h1 className="mb-2 font-medium text-3xl sm:text-4xl text-gray-100 md:text-5xl">
									{titleIntro}{" "}
									<span className="relative">
										<span
											className={`h-20 pt-2 whitespace-nowrap text-brand-accent ${styles?.heroHeadText} `}
										>
											<span className="text-main-green hover:text-main-pink hover:opacity-90 duration-1000"></span>

											{/* animation */}
											<TypeAnimation
												sequence={[
													titleName, // Types 'One'
													3000, // Waits 1s
													"Von", // Deletes 'One' and types 'Two'
													2000, // Waits 2s
													titleWave,
													2000,
												]}
												wrapper="span"
												cursor={true}
												repeat={Infinity}
												style={{
													display: "inline-block",
													color: "#64ffda",
												}}
											/>
										</span>
										<div>
											<div className={"font-black "}></div>
										</div>
										{/* <span className="{`cursor absolute -bottom-0 left-0 xl:left-10 -top-2 inline-block bg-hero border-l-8 border-main-green w-full animate-type will-change`}"></span> */}
									</span>
								</h1>
								<p className={`${styles.heroSubText} mt-2 text-white-100`}>
									{subtitle}
								</p>

								<PDFViewer check_cv={check_cv}/>

								{/* follow me desktop */}
								<div className="hidden xl:block mt-24 tracking-wide">
									<p className="uppercase mb-3 font-medium inline w-54 border-b-2 border-secondary">
										{language === "spanish" ? "Sígueme" : "Follow me"} &nbsp;
										<i className="fa-solid fa-arrow-right inline w-54"></i>
									</p>

									{/* desktop */}
									<div className="md:block">
										<div className="mt-4">
											{/* linkedin */}
											<i
												className={`fa-brands fa-linkedin-in text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}
												onClick={() =>
													window.open("https://www.linkedin.com/in/nicolas-von-muhlinen/")
												}
											></i>

											{/* github */}
											<i
												className={`fa-brands fa-github text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}
												onClick={() => window.open("https://github.com/nicovon24")}
											></i>

											{/* tw */}
											{/* <i
												className={`fa-brands fa-twitter text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}
												onClick={() => window.open("https://twitter.com/nicovon2")}
											></i> */}
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* me picture */}
						<div className="md:flex relative left-8 flex flex-col 2xl:items-center">
							<div>
								<img
									src={yo}
									className="w-[250px] sm:w-[350px] sm:h-[400px] md:w-[350px] md:h-[350px] lg:h-[400px] 2xl:w-[550px] 2xl:h-[550px] relative z-[100] border-main-green"
									alt="me picture"
								/>
							</div>

							{/* MOBILE follow me */}
							<div className="block xl:hidden mt-8 tracking-wide relative left-8">
								<p className="uppercase mb-3 font-medium inline w-54 border-b-2 border-secondary">
									{language === "spanish" ? "Sígueme" : "Follow me"} &nbsp;
									<i className="fa-solid fa-arrow-right inline w-54"></i>
								</p>
								<div className="mt-4">
									{/* linkedin */}
									{/* linkedin */}
									<i
										className={`fa-brands fa-linkedin-in text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}
										onClick={() =>
											window.open("https://www.linkedin.com/in/nicolas-von-muhlinen/")
										}
									></i>

									{/* github */}
									<i
										className={`fa-brands fa-github text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}
										onClick={() => window.open("https://github.com/nicovon24")}
									></i>

									{/* tw */}
									{/* <i
										className={`fa-brands fa-twitter text-[20px] rounded-full p-2 mr-[12px] cursor-pointer ${styles.hoverChangeBorderAndColor} hover:scale-110 border-[1px]`}
										onClick={() => window.open("https://twitter.com/nicovon2")}
									></i> */}
								</div>

								{/* show btn after social media in mobile */}

								<button
									className="btn2 relative border-1 text-main-green border-main-green font-secondary tracking-wider leading-none  text-[13px] w-[180px] 
								block md:hidden overflow-hidden  font-medium mt-8 py-6 rounded-lg border-[1px] cursor-pointer hover:text-main-pink hover:border-main-pink
								z-[100]"
									type="button"
									onClick={() => window.open(links.cv[language])}
								>
									<span className="absolute inset-0 bg-[#1a345d]"></span>
									<span className="absolute inset-0 flex justify-center px-2 items-center font-bold cursor-pointer ">
										{check_cv}
									</span>
								</button>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

const PDFViewer = ({check_cv}) => {
	const { language } = useSelector((s) => s);

	// Replace the path to the PDF file with the correct one
	const pdfFile = language === "english" ? pdfenglish : pdfspanish;

	return pdfFile ? (
		<button className="btn2 relative border-1 text-main-green border-main-green font-secondary tracking-wider leading-none  text-[13px] w-[180px]  hidden md:block overflow-hidden font-medium mt-8 py-6 rounded-lg border-[1px] cursor-pointer hover:text-main-pink  hover:border-main-pink"
		type="button">
			<a download={`Nicolás Von ${language}`} href={pdfFile}>
				<span className="absolute inset-0 bg-[#1a345d]"></span>
				<span className="absolute inset-0 flex justify-center px-2 items-center font-bold cursor-pointer ">
					{check_cv}
				</span>
			</a>
		</button>
	) : null;
};

export default SectionWrapper(Hero, "Hero");
