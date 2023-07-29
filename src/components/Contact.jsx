import React from "react";
import { styles } from "../styles";
import FormContact from "./FormContact";
import SectionWrapper from "../hoc/SectionWrapper";
import { useSelector } from "react-redux";
import { titles } from "../constants";

const Contact = () => {
	const {language} = useSelector(s=>s)
	const {title, subtitle} = titles?.contact[language]

	return (
		<div className="text-white text-left py-12 mx-auto w-full relative z-10">
			<div className="max-w-[90vw] pl-4 mx-auto">
				{/* titles */}
				<p className={`${styles.sectionSubText} text-white`}>{subtitle}</p>
				<div className="flex items-center">
					<h2 className={`${styles?.sectionHeadText}`}>{title}</h2>
					<div className={styles.lineTitle}></div>
				</div>

				<div className="grid xl:grid-cols-[1.75fr,1fr] gap-8 xl:gap-16 pt-8">
					{/* phone, mail, location */}
					
					<FormContact className="" />

					<div className="flex flex-col gap-4">
						<p className="font-medium uppercase underline text-secondary">Other info</p>
						<div>
							<div className="flex items-center">
								<i
									className={`fa-solid fa-phone mt- p-2 text-[12px] md:p-3 md:text-[14px] mr-4 border-2 rounded-full`}
								></i>
								<p>+54 9 351 2007 668</p>
							</div>

							<div className="flex items-center">
								<i
									className={`fa-solid fa-envelope mt-3 p-2 text-[12px] md:p-3 md:text-[14px] mr-4 border-2 rounded-full`}
								></i>
								<p>nicovon24@gmail.com</p>
							</div>

							<div className="flex items-center">
								<i
									className={`fa-solid fa-location-dot mt-3 p-2 text-[12px] md:p-3 md:text-[14px] mr-4 border-2 rounded-full`}
								></i>
								<p>&nbsp;Córdoba Capital, Argentina</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
