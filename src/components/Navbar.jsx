import React, { useEffect, useState } from "react";
import { logo_celeste, logo_white } from "../assets/index";
import { navLinks } from "../constants/index";
// import { menu, close } from "../assets/index";
// import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { spanish, english } from "../assets/index";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/actions/actions";
import {styles} from "../styles"

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggleMenu, setToggleMenu] = useState(false);
	const dispatch = useDispatch()
	const [scrollPosition, setScrollPosition] = useState(0);
	const [logo, setLogo] = useState("light-blue")

	const {language} = useSelector(s=>s)

	const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

	const handleChooseLanguage = () => {
		swal({
			title: `${
				language === "english" ? "You choose:" : "Podes elegir:"
			}`,
			text: `${
				language === "english" ? "You wish to change the language to Spanish?" : "¿Deseás cambiar el texto a inglés?" 
			}`,
			icon: "warning",
			buttons: {
				option1: {
					text: "Cancel",
					value: false,
					className: "bg-red-500 hover:bg-red-600 swal-btn-cancel",
				},
				option2: {
					text: "OK",
					value: false,
					className: "mr-2 bg-green-600 swal-btn-ok",
				},
			},
		}).then(() => {
			dispatch(changeLanguage())
		});
	};

	return (
		<nav>
			<div className={`fixed w-full overflow-hidden flex justify-between items-center py-6 px-8
			z-[10000000] ${scrollPosition>200 && "bg-[#081325] shadow-sm shadow-main-green"}`}>
				{/* logo and Nicolás full-stack. Both in desktop and phone */}
				<div className="flex items-center font-secondary text-sm">
					<img src={logo==="light-blue" ? logo_celeste : logo_white} className="w-20 cursor-pointer"
					onClick={()=>setLogo(logo==="light-blue" ? "white" : "light-blue")}/>

					{/* desktop, in the same line */}
					<div className="hidden sm:flex font-bold">
						<h3 className="text-main-green text-left">Nicolás </h3>
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
				<ul className="hidden md:flex flex-wrap gap-y-2 items-center font-secondary">
					<i
						className={`fa-solid fa-robot-astromech text-black bg-main-green text-2xl rounded-full`}
					></i>
					{navLinks?.map((l, index) => {
						return (
							<li key={l?.id}>
								<a
									href={`#${l?.id}`}
									to={l?.id}
									className={`
              text-sm cursor-pointer px-4
              ${
															active === l?.spanish ? "text-main-green" : "text-white"
														} hover:text-white`}
									onClick={() => setActive(l?.spanish)}
								>
									<span className="text-main-green text-[13px] xl:text-[15px]">0{index + 1}. </span>
									<span className="hover:text-main-green text-[14px] xl:text-[14px] relative left-[-5px]">
										{l[language.toLowerCase()]}
									</span>
								</a>
							</li>
						);
					})}

					<div className="flex flex-col items-center">
						<button
							className={`ml-4 px-4 py-2 rounded-[4px] min-w-[40px] text-xs cursor-pointer border-[1px] 
							flex items-center ${styles?.hoverChangeBorderAndColor}`}
							onClick={handleChooseLanguage}
						>
							<span>{language === "spanish" ? "Cambiar a " : "Switch to"}&nbsp;</span>
							<img src={language === "spanish" ? english : spanish} className="w-4" />
						</button>
					</div>
				</ul>
				{/* HACER DE VUELTA MOBILE MENU */}
				{/* mobile menu */}
				{/* <div className="sm:hidden flex flex-1 justify-end items-center"> */}
				{/* toggle button */}
				{/* <img
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
				</div> */}
			</div>
		</nav>
	);
};

export default Navbar;
