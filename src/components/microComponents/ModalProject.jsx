import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProjectModal } from "../../redux/actions/actions";
import Carousel from "./Carousel";

const ModalProject = ({ isOpen, setIsOpen }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	const closeModal = () => {
		setIsOpen(false);
		dispatch(changeProjectModal({}));
		document.body.style.overflow = "auto";
	};

	//*setIsOpen false when click Esc key
	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();

				// 👇️ your logic here
				setIsOpen(false);

				document.body.style.overflow = "auto";
			}
		};

		document.addEventListener("keydown", keyDownHandler);

		// 👇️ clean up event listener
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, []);

	const { modal_project, language } = useSelector((s) => s);
	const project = modal_project;

	const { source_code_link, source_deploy } = project;

	const text = {
		buttons: {
			close: {spanish: "Cerrar", english: "Close"},
			site:  {spanish: "Sitio", english: "Site"},
			repo:  {spanish: "Repositorio", english: "Repository"}
		}
	}

	return (
		<div>
			{/* modal */}
			<>
				{/* dark background */}
				<div
					className="fixed top-0 left-0 h-screen w-screen z-[10000] bg-neutral-800 bg-opacity-90"
					onClick={() => {
						setIsOpen(false)
						document.body.style.overflow = "auto";
					}}
				></div>

				{/* content */}
				<div className="fixed  z-[100000] top-[55%] cursor-auto p-8 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
					<div
						className="bg-contact cursor-auto p-8 
						min-h-[282px] w-[350px] sm:min-w-[500px] md:min-w-[650px] md:min-h-[400px] rounded-lg border border-blue-secondary"
					>
						<div>
							<Carousel project={project}/>
						</div>
						<div className="text-white text-left pt-6">
							<h3 className="text-xl font-medium">{project[`name_${language}`]}</h3>

							<p className="pt-2 text-gray-300">
								{project[`description_${language}`]}
							</p>

							<div className="pt-6">
								<p>Tech stack:</p>

								<ul className="flex gap-x-1 flex-wrap pt-2">
									{project?.tags?.map((tag) => {
										return <img src={tag?.image} alt={tag?.name} className="w-7" />;
									})}
								</ul>
							</div>
						</div>
						{/* buttons */}
						<div className="flex flex-col gap-y-4 md:flex-row md:items-center justify-between md:text-lg text-center h-full pt-4 ">
							{/* visit & repository */}
							<div className="flex gap-x-4">
								<a
									href={source_deploy}
									target="_blank"
									className="text-base w-[100px] font-semibold py-1 rounded-lg bg-main-green text-black hover:opacity-70"
								>
									{text.buttons.site[language]}
								</a>

								<a
									href={source_code_link}
									target="_blank"
									className="text-base px-4 font-semibold py-1 rounded-lg border-2 border-main-green text-main-green hover:text-black hover:bg-main-green duration-300 hover:opacity-70"
								>
									{text.buttons.repo[language]}
								</a>
							</div>

							{/* close */}
							<div>
								<button
									className="flex px-3 py-2 bg-white font-semibold text-black duration-200 rounded-lg
									hover:bg-transparent hover:text-white !cursor-pointer"
									onClick={() => closeModal()}
								>
									{text.buttons.close[language]}
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		</div>
	);
};

export default ModalProject;
