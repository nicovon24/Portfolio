const InputText = ({ property, onHandleChange, value }) => {
	return (
		<div className="relative group">
			<input
				type="text"
				name={property}
				onChange={(e)=>onHandleChange(e, property)}
				id={property}
				value={value}
				required
				className="w-full h-12 px-4 text-sm peer bg-white outline-none border-[1px] rounded-md border-gray-500 shadow-sm 
        focus-within:ring-1 focus-within:border-black cursor-text"
			/>
			<label
				for={property}
				className="transform capitalize transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0  group-focus-within:text-secondary peer-valid:text-gray-500 text-secondary"
			>
				{property}
			</label>
		</div>
	);
};

const InputTextArea = ({property, onHandleChange, value}) => {
	return (
		<div className="relative group col-span-2 mt-4 ">
			<textarea
				id={property}
				name={property}
				onChange={(e)=>onHandleChange(e, property)}
				value={value}
				required
				className="w-full h-[100px] px-4 text-sm peer bg-white outline-none border-[1px] rounded-md border-gray-500 shadow-sm  focus-within:border-black flex items-start"
			/>
			<label
				for={property}
				className="transform pt-1  transition-all absolute top-0 left-0 h-full flex pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-2/6 peer-valid:h-1/2 group-focus-within:-translate-y-[65%] peer-valid:-translate-y-[45%]  group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:text-secondary peer-valid:text-gray-500 peer-valid:border-black text-secondary"
			>
				Message
			</label>
		</div>
	);
};

export { InputText, InputTextArea };
