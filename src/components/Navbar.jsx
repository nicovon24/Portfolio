import React, { useEffect, useState } from "react";
import { logo_celeste, logo_white } from "../assets/index";
import { navLinks } from "../constants/index";
// import { menu, close } from "../assets/index";
// import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { spanish, english } from "../assets/index";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/actions/actions";
import { styles } from "../styles";
import { useRef } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggleMenu, setToggleMenu] = useState(false);
	const dispatch = useDispatch();
	const [scrollPosition, setScrollPosition] = useState(0);
	const [logo, setLogo] = useState("light-blue");

	const { language } = useSelector((s) => s);

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

	const refBtn = useRef();

	const handleChooseLanguage = () => {
		swal({
			cursor: "pointer",
			title: `${language === "english" ? "You choose:" : "Podes elegir:"}`,
			text: `${
				language === "english"
					? "You wish to change the language to Spanish?"
					: "¿Deseás cambiar el texto a inglés?"
			}`,
			icon: "warning",
			buttons: {
				option1: {
					text: "Cancel",
					value: false,
					className: "bg-red-500 hover:bg-red-600 swal-btn-cancel cursor-pointer",
				},
				option2: {
					text: "OK",
					value: true,
					className: "mr-2 bg-green-600 swal-btn-ok cursor-pointer",
				},
			},
		}).then((data) => {
			if (data !== false) {
				dispatch(changeLanguage());
			}
		});
	};

	const handleChooseMobile = (languageParam) => {
		if (language === "spanish" && languageParam === "english")
			dispatch(changeLanguage());
		if (language === "english" && languageParam === "spanish")
			dispatch(changeLanguage());
	};

	const handleAnimateHamburger = (changeToggle = true) => {
		//*animation
		if (refBtn.current) {
			const element = refBtn.current;
			refBtn.current?.classList?.toggle("toggle-btn");
		}
		if(changeToggle===true){
			setToggleMenu((prev) => !prev);
		}
	};

	return (
		<div>
			<nav>
				<div
					className={`fixed w-full overflow-hidden flex justify-between items-center py-6 px-8
					z-[10000000]  opacity-70 cursor-default ${
						scrollPosition > 200 && "bg-[#081325] shadow-sm shadow-main-green"
					}`}
				>
					{/* logo and Nicolás Front-end. Both in desktop and phone */}
					<div className="flex items-center font-secondary text-sm ">
						<img
							src={logo === "light-blue" ? logo_celeste : logo_white}
							className="w-20 cursor-pointer"
							onClick={() => setLogo(logo === "light-blue" ? "white" : "light-blue")}
						/>

						{/* desktop, in the same line */}
						<div className="hidden lg:flex font-bold">
							<h3 className="text-main-green text-left">Nicolás </h3>
							<label className="text-white text-left relative z-100">
								&nbsp; | Front-end developer
							</label>
						</div>

						{/*mobile, in different line */}
						<div className="block lg:hidden font-bold">
							<h3 className="text-white text-left">Nicolás </h3>
							<label className="text-white text-left relative z-100">
								| Front-end developer
							</label>
						</div>
					</div>

					{/* desktop menu */}
					<ul className="hidden lg:flex flex-wrap gap-y-2 items-center font-secondary">
						<i
							className={`fa-solid fa-robot-astromech text-black bg-main-green text-2xl rounded-full`}
						></i>
						{navLinks?.map((l, index) => {
							return (
								<li key={l?.id}>
									<Link
										to={`${l?.id}`}
										smooth duration={500}
										// to={l?.id}
										className={`
										link-nav text-sm px-4
									${active === l?.spanish ? "text-main-green" : "text-white"} hover:text-white`}
										onClick={() => setActive(l?.spanish)}
									>
										<span
											className={`num-nav text-main-green text-[13px] xl:text-[15px]  cursor-pointer`}
										>
											0{index + 1}.{" "}
										</span>
										<span
											className={`link-nav text-[14px] xl:text-[14px] relative left-[-5px] cursor-pointer`}
										>
											{l[language.toLowerCase()]}
										</span>
									</Link>
								</li>
							);
						})}

						<button
							className="btn2 py-4 relative border-1 font-secondary  tracking-wider leading-none overflow-hidden hover:text-main-pink  hover:border-main-pink rounded-md text-[12px] w-[130px] text-main-green border-main-green border-[1px]"
							type="button"
							onClick={handleChooseLanguage}
						>
							<span className="absolute inset-0 bg-[#1a345d]"></span>
							<span className="absolute inset-0 flex justify-center px-2 items-center font-bold">
								{language === "spanish" ? "Cambiar a " : "Switch to"}&nbsp;
								<img
									className="w-4 text-white"
									src={language === "spanish" ? english : spanish}
								/>
							</span>
						</button>
					</ul>
				</div>
			</nav>

			{/* MOBILE */}
			<div className="block lg:hidden text-right mr-2 fixed top-[24px] right-0 z-[100000000]">
				<button
					id="hamburger-menu"
					className="text-3xl lg:hidden cursor-pointer relative w-8 h-8 right-4"
					ref={refBtn}
					onClick={()=>handleAnimateHamburger(true)}
				>
					<div
						className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3
					after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"
					></div>
				</button>
			</div>
			<section
				id=""
				className={`fixed bg-hero w-full min-h-[102vh] top-0 flex flex-col justify-center left-0 z-[1000000] origin-top animate-open-menu ${
					toggleMenu ? "block" : "hidden"
				} lg:hidden`}
			>
				<div className="w-full">
					<div className="h-[50vh] relative top-[10vh] ">
						{navLinks?.map((l, index) => {
							return (
								<li key={l?.id} className="list-none">
									<Link
										to={`${l?.id}`}
										smooth duration={500}
										className={`
              			cursor-pointer px-4 transition duration-500 ease-in-out
										${active === l?.spanish ? "text-main-green" : "text-white"} hover:text-white`}
										onClick={() => {
											setActive(l?.spanish);
											setToggleMenu(false);
											handleAnimateHamburger(false)
										}}
									>
										{/* text */}
										<span className="relative left-[-5px] bottom-[30px] font-medium flex items-center mx-auto w-[40vw]">
											<span className="text-[10px] text-secondary mr-4 tracking-[2px] relative top-1">
												0{index + 1}.
											</span>
											<span
												className="text-[18px] hover:text-secondary cursor-pointer
											uppercase duration-300  tracking-[8px] hover:tracking-[2px] "
											>
												{l[language.toLowerCase()]}
											</span>
										</span>
									</Link>
								</li>
							);
						})}
						<div className="flex justify-center">
							<img
								className={`cursor-pointer w-[54px] h-[48px] ${
									language === "english" && "opacity-50"
								} mr-8`}
								src={spanish}
								onClick={() => handleChooseMobile("spanish")}
							/>
							<img
								className={`cursor-pointer w-[54px] h-[48px] ${
									language === "spanish" && "opacity-50"
								}`}
								src={english}
								onClick={() => handleChooseMobile("english")}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Navbar;
