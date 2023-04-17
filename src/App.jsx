import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import React from "react";
// import Cursor from 'react-animated-cursor';

function App() {

	return (
		<div className="App bg-main-bg bg-cover bg-no-repeat">

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
