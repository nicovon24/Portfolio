import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import React from "react";
// import Cursor from 'react-animated-cursor';

function App() {
	const {language} = useSelector(s=>s)

	//*app title and icon, changing it
	window.addEventListener("blur", () => {
		document.title = language==="spanish" ? "Regresá al Portafolio" : "Come back to Portfolio"; 

		//*changing document icon
		const icon =
			document.querySelector("link[rel='icon']") || document.createElement("link");

		// Set the new icon path
		icon.type = "image/x-icon";
		icon.rel = "icon";
		icon.href = "/src/assets/pray.ico";

		// Update the document's icon
		document.head.appendChild(icon);
	});

	window.addEventListener("focus", () => {
		document.title = "Nicolás Von Muhlinen";

		//*changing document icon
		const icon =
			document.querySelector("link[rel='icon']") || document.createElement("link");

		// Set the new icon path
		icon.type = "image/x-icon";
		icon.rel = "icon";
		icon.href = "/src/assets/logo_celeste_recortado.ico";

		// Update the document's icon
		document.head.appendChild(icon);
	});

	return (
		<div className="App bg-main-bg bg-cover bg-no-repeat overflow-hidden">
			{/* <AnimatedCursor /> */}

			<Navbar />

			<Home />

			<div class="scrollbar" id="style-1">
				<div class="force-overflow"></div>
			</div>
		</div>
	);
}

export default App;
