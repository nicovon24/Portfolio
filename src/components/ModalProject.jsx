import React, { useState } from "react";

const ModalProject = ({ project, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setIsOpen(false);
		document.body.style.overflow = "auto";
	};

	return (
		<div>
			{/* img button */}
			<img
				onClick={() => openModal()}
				className="relative z-10 top-0 left-0 w-full h-[220px] mb-3 rounded-xl
								transition-transform hover:scale-[1.03] cursor-pointer"
				src={project?.image[0]}
				alt={project?.name + " img"}
			/>

			{/* modal */}
			{isOpen && (
				<>
					<div className="fixed top-0 left-0 h-screen w-screen z-[1000000] bg-neutral-800 bg-opacity-90">
						<div
							className="bg-contact p-8 absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
						min-h-[282px] min-w-[350px] md:min-h-[350px] md:min-w-[465px] rounded-lg border border-blue-secondary"
						>
							<div>
								<img
									src={project?.image}
									alt={project?.name}
									className="max-w-[700px]"
								/>
							</div>
							{/* buttons */}
							<div className="flex justify-between md:text-lg text-center h-full pt-4 ">
								<div className="flex gap-x-4">
									<button className=" text-base w-[100px] font-semibold py-1 rounded-lg bg-main-green text-black hover:opacity-70">
										Visit
									</button>

									<button className=" text-base px-4 font-semibold py-1 rounded-lg border-2 border-main-green text-main-green hover:text-black hover:bg-main-green duration-300 hover:opacity-70">
										Repository
									</button>
								</div>

								{/* close */}
								<div>
									<button
										className="text-white flex px-3 py-2 hover:bg-white hover:font-semibold hover:text-black duration-200 rounded-lg"
										onClick={() => closeModal()}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ModalProject;
