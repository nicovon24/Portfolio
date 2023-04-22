import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import React from "react";

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

	window.addEventListener("load", (event) => {
		new cursoreffects.trailingCursor({
			particles: 25,
			rate: 0.4,
			baseImageSrc: [
				"https://o.remove.bg/downloads/44b40fff-a230-4c5d-a81c-8924ea64165a/luna-llena__7_-removebg-preview.png",
				// "https://o.remove.bg/downloads/7e9a5784-8a12-412e-b038-36c3158c7122/luna-llena__9_-removebg-preview.png"
			],
		});
	});

	return (
		<div className="App bg-main-bg bg-cover bg-no-repeat overflow-hidden">
			{/* <CustomCursor/> */}

			<Navbar />

			<Home />

			<div class="scrollbar" id="style-1">
				<div class="force-overflow"></div>
			</div>
		</div>
	);
}

export default App;
