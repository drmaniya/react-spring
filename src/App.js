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
import LandingPage from "./LandingPage1/LandingPage";
import LandingNew from "./LandingPage2/LandingNew";
import PageLanding from "./LandingPage3/PageLanding";
import LandingPage4 from "./LandingPage4";


function App() {
	return (
		<>
			{/* <Menu /> */}

			<Router>
				<Routes>
					{/* <Route path="/" exact element={<Home />} />

					<Route path="/product" element={<Product />} />
					<Route path="/about" element={<About />} />
				
					<Route path="/Image" element={<AnimateImage />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} /> */}
					{/* <Route path="/" exact element={<LandingPage />} /> */}
					{/* <Route path="/" exact element={<LandingNew />} /> */}
					<Route path="/" exact element={<PageLanding />} />
					{/* <Route path="home/" exact element={<Home />} /> */}
					{/* <Route path="/service" element={<Service />} /> */}
					{/* <Route path="/" exact element={<LandingPage4 />} /> */}
				</Routes>
			</Router>
		</>

	);
}

export default App;