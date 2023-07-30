import React from "react";

const Carousel = ({ project }) => {
	const length = project?.image?.length;
	const arrNums = [];
	for (let i = 1; i <= length; i++) {
		arrNums.push(i);
	}

	return (
		<>
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
			<div class="flex justify-center w-full py-2 gap-2">
				{arrNums?.map((num) => (
					<a href={`#item${num}`} class="btn btn-xs">
						{num}
					</a>
				))}
			</div>
		</>
	);
};

export default Carousel;
