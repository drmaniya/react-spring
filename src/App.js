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
import Menu from "./Barba/Menu";
import Blog from "./Barba/Blog";


function App() {
	return (
		<>
			<Menu />

			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />

					<Route path="/contact " element={<Contact />} />
					<Route path="/product" element={<Product />} />
					<Route path="/about" element={<About />} />
					<Route path="/service" element={<Service />} />
					<Route path="/Image" element={<AnimateImage />} />
					<Route path="/blog" element={<Blog />} />
				</Routes>
			</Router>
		</>

	);
}

export default App;