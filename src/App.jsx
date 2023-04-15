import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import { useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from "./components/About"
// import Works from "./components/Works"
// import Contact from "./components/Contact"

function App() {
	return (
		<div className="App">
			<Navbar />

			<Home />

			{/* <Routes>
				<Route exact path="/about" element={<About/>}/>
				<Route exact path="/work" element={<Works/>}/>
				<Route exact path="/contact" element={<Contact/>}/>
			</Routes> */}
			{/* <p className='read-the-docs'>3D Developer Portfolio</p> */}
		</div>
	);
}

export default App;
