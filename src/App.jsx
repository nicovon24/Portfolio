import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import React from "react";
import { trailingCursor } from "cursor-effects";

function App() {
	const { language } = useSelector((s) => s);

	//*app title and icon, changing it
	window.addEventListener("blur", () => {
		document.title =
			language === "spanish" ? "Regresá al Portafolio" : "Come back to Portfolio";

		//*changing document icon
		const icon =
			document.querySelector("link[rel='icon']") || document.createElement("link");

		// Set the new icon path
		icon.type = "image/x-icon";
		icon.rel = "icon";
		icon.href = "/src/assets/otros/pray.ico";

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
		icon.href = "/src/assets/me/logo_celeste_recortado.ico";

		// Update the document's icon
		document.head.appendChild(icon);
	});

	//*cursor effect
	window.addEventListener("load", (event) => {
		new trailingCursor({
			particles: 15,
			rate: 0.2,
			baseImageSrc:
				"https://res.cloudinary.com/dmnkfkrtt/image/upload/v1682186541/cursor-celeste-jr_bmub6j.png",
			// "https://o.remove.bg/downloads/7e9a5784-8a12-412e-b038-36c3158c7122/luna-llena__9_-removebg-preview.png"
		});
	});


	return (
		<div className="App  bg-cover bg-no-repeat overflow-hidden">
			<Navbar />

			<Home />

			<div class="scrollbar" id="style-1">
				<div class="force-overflow"></div>
			</div>
		</div>
	);
}

export default App;
