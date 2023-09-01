import React, { useState } from "react";

const Carousel = ({ project }) => {
	const [active, setActive] = useState(1)
	const length = project?.image?.length;
	const arrNums = [];
	for (let i = 1; i <= length; i++) {
		arrNums.push(i);
	}

	return (
		<>
			{/* current image */}
			<div class="carousel w-full">
				{arrNums?.map((num) => (
					<div id={`item${num}`} class="carousel-item w-full">
						<img
							src={project?.image[num-1]}
							class="w-full"
						/>
					</div>
				))}
			</div>

			{/* pagination */}
			<div class="flex justify-center w-full py-2 gap-2">
				{arrNums?.map((num) => (
					<a href={`#item${num}`} class={`w-3 h-3 rounded-full
					${active!==num ?"bg-white" : "bg-main-green"}`}
					onClick={()=>setActive(num)}>
						
					</a>
				))}
			</div>
		</>
	);
};

export default Carousel;
