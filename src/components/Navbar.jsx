import React, { useState } from "react";
import { logo_white } from "../assets/index";
import { navLinks } from "../constants/index";
import { menu, close } from "../assets/index";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav>
			<div className="overflow-hidden flex justify-between items-center pt-6 pb-2 px-8">
				{/* logo and Nicolás full-stack. Both in desktop and phone */}
				<div className="flex items-center">
					<img src={logo_white} className="h-16 w-24" />

					{/* desktop, in the same line */}
					<div className="hidden sm:flex font-bold">
						<h3 className="text-white text-left">Nicolás </h3>
						<label className="text-white text-left relative z-100">
							&nbsp; | Full-stack developer
						</label>
					</div>

					{/*mobile, in different line */}
					<div className="block sm:hidden font-bold">
						<h3 className="text-white text-left">Nicolás </h3>
						<label className="text-white text-left relative z-100">
							| Full-stack developer
						</label>
					</div>
				</div>

				{/* desktop menu */}
				<ul className="hidden sm:flex items-center">
					<i className={`fa-solid fa-robot-astromech text-black bg-main-green text-3xl rounded-full`}></i>
					{navLinks?.map((l, index) => {
						return (
							<li key={l?.id}>
								<a
									href={`#${l?.id}`}
									to={l?.id}
									className={`
              text-md cursor-pointer px-4
              ${
															active === l?.title ? "text-main-green" : "text-white"
														} hover:text-white`}
									onClick={() => setActive(l?.title)}
								>
									<span className="text-main-green">0{index + 1}. </span>
									<span className="hover:text-main-green ">{l?.title}</span>
								</a>
							</li>
						);
					})}
				</ul>
				{/* mobile menu */}
				<div className="sm:hidden flex flex-1 justify-end items-center">
					{/* toggle button */}
					<img
						src={toggleMenu ? close : menu}
						className="flex sm:hidden w-8 mr-4 cursor-pointer relative z-10"
						onClick={() => setToggleMenu((prev) => !prev)}
					/>
					<div
						className={`${!toggleMenu ? "hidden" : "flex"} p-6 black-gradient absolute
          top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="">
							{navLinks?.map((l, index) => {
								return (
									<li key={l?.id}>
										<a
											href={`#${l?.id}`}
											to={l?.id}
											className={`
										text-slate-300 text-md cursor-pointer px-4
											${active === l?.title ? "text-main-green" : "text-white"} hover:text-white`}
											onClick={() => setActive(l?.title)}
										>
											<span className="text-main-green">0{index + 1}. </span>
											<span className="hover:text-main-green">{l?.title}</span>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
