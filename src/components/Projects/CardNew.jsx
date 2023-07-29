import React, { useRef } from "react";
import { styles } from "../../styles";
import ModalProject from "../ModalProject";

const WorkCard = ({ project, index, language }) => {
	const { source_code_link, source_deploy } = project;

	return (
		<div className="md:w-[60vw] lg:w-[40vw] 3xl:w-[25vw] gap-8 pt-16" key={index}>
			<div className="p-[1px] rounded-[20px] shadow-card green-pink-gradient-not-hover">
				<div className="bg-main-blue rounded-[20px] p-6 flex flex-col flex-wrap justify-center">
					<div key={index} className="flex flex-wrap gap-x-8">
						{/* image and modal */}
						<div>
							<img
								className="relative z-10 top-0 left-0 w-full h-[220px] mb-3 rounded-xl
								transition-transform hover:scale-[1.03] cursor-pointer"
								src={project?.image[0]}
								alt={project?.name + " img"}
							/>
							{/* <ModalProject project={project} /> */}
						</div>

						<div className="w-full">
							{/* project name, icons deploy and git */}
							<div className="w-full flex items-center justify-between pb-4">
								<p
									className={
										"text-white hover:text-main-pink hover:opacity-90 duration-1000 font-black text-xl pb-2 "
									}
								>
									{project["name_" + language]}
								</p>

								{/* deploy and git icons */}
								<div className="text-right pt-2 text-2xl flex items-center">
									{source_code_link && (
										<a href={source_code_link} target="_blank">
											<i
												className={`fa-brands fa-github cursor-pointer p-1 rounded-full mr-2 ${styles?.hoverChangeBorderAndColor}`}
											></i>
										</a>
									)}
									{source_deploy && (
										<a href={source_deploy} target="_blank">
											<svg
												stroke="currentColor"
												fill="none"
												stroke-width="0"
												viewBox="0 0 15 15"
												class="text-main-green hover:text-main-pink duration-300 text-[24px] cursor-pointer  hover:opacity-80 "
												height="1em"
												width="1em"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z"
													fill="currentColor"
												></path>
											</svg>
											{/* <i
												className={`fa-solid fa-globe cursor-pointer p-1 rounded-full ${styles?.hoverChangeBorderAndColor}`}
											></i> */}
										</a>
									)}
								</div>
							</div>
							{/* description */}
							<div>
								<p className="text-gray-400 tracking-wider text-justify pb-2 flex flex-wrap">
									{project["description_" + language]}
								</p>
							</div>
						</div>
						<div className="w-full flex flex-wrap justify-between pt-4">
							<p className="font-medium">Tech stack:</p>
							<div className="flex gap-x-1 flex-wrap">
								{project?.tags?.map((tag, index) => {
									return (
										<img
											className={`w-[35px] ${
												tag?.name === "typescript" && "!w-[30px] h-[32px]"
											}
										 	`}
											key={index}
											src={tag?.image}
											alt={tag?.name}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
