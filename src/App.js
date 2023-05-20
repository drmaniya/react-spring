import React from "react";
// import "./App.css";
import "./Barba/Home.css";
import Home from "./Barba/index";
import About from "./Barba/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimateImage from "./Gsap/AnimateImage";
import Product from "./Barba/Product";
import Contact from "./Barba/Contact";
import Service from "./Barba/Service";


function App() {
	return (

		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
	 />
				<Route path="/contact" exact element={<Contact />} />
				<Route path="/product" exact element={<Product />} />
				<Route path="/about" exact element={<About />} />
				<Route path="/service" exact element={<Service />} />
				<Route path="/Image" exact element={<AnimateImage />} />
			</Routes>
		</Router>

	);
}

export default App;