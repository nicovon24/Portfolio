import React, { useState } from "react";

const ModalProject = ({ project, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
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
						<div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[282px] w-[350px] md:h-[382px] md:w-[465px] p-4 bg-white rounded-lg border border-blue-secondary">
							<div className="pt-8 md:text-lg text-center h-full grid grid-cols-1 grid-rows-3 gap-y-6 items-center justify-items-center">
								{children}
								<h1 className="text-black" onClick={() => closeModal()}>
									Close
								</h1>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ModalProject;
