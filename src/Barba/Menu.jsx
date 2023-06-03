import React, { useEffect } from "react";
import gsap from "gsap";
import { Power2 } from "gsap/gsap-core";
import "./Clip.css";
import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Menu() {

	const ref = useRef(null);



	useEffect(() => {
		var menuBar = gsap.timeline();
		const element = ref.current;
		console.log("ele", element);

		menuBar.to('.bar-1', 0.5, {
			attr: { d: "M8,2 L2,8" },
			x: 1,
			ease: Power2.easeInOut
		}, 'start')

		menuBar.to('.bar-2', 0.5, {
			autoAlpha: 0
		}, 'start')

		menuBar.to('.bar-3', 0.5, {
			attr: { d: "M8,8 L2,2" },
			x: 1,
			ease: Power2.easeInOut
		}, 'start')

		menuBar.reverse();

		var tl = gsap.timeline({ paused: true });
		tl.to('.fullpage-menu', {
			duration: 0,
			display: "block",
			ease: 'Expo.easeInOut',
		});

		tl.fromTo('.menu-bg>span', {
			duration: 1,
			x: "100%",
			stagger: 0.1,
			ease: 'Expo.easeInOut'
		},
			{
				x: "0%",
				stagger: 0.1,
			});

		tl.fromTo('.main-menu>li>a', {
			duration: 1.5,
			y: "100%",
			stagger: 0.2,
			ease: 'Expo.easeInOut'
		},
			{
				y: "0%",
				stagger: 0.2,
				delay: "-=0.5"
			});

		// tl.fromTo('.social-links>li', {
		// 	duration: 1,
		// 	y: "-100%",
		// 	opacity: 0,
		// 	stagger: 0.1,
		// 	ease: 'Expo.easeInOut'
		// }, {
		// 	y: "0%",
		// 	stagger: 0,
		// 	delay: "-=0.5"
		// });

		tl.reverse();

		element.addEventListener('click', function (e) {
			e.preventDefault();
			console.log("prevent defailt click");
			menuBar.reversed(!menuBar.reversed());
			tl.reversed(!tl.reversed());
		});
	}, [])

	return (
		<>
			<header>
				<Box className="header-row">
					<Box className="brand-logo">
						<Box component="a" href="/">
							AGENCY
						</Box>
					</Box>
					<Button sx={{ background: "#000", "&:hover": { background: "#000" } }} ref={ref} className="menu-toggle" id="menuToggle">
						<svg viewBox="0 0 12 10" className="hamburger" height="40px" width="40px">
							<path d="M10,2 L2,2" className="bar-1"></path>
							<path d="M2,5 L10,5" className="bar-2"></path>
							<path d="M10,8 L2,8" className="bar-3"></path>

						</svg>
					</Button>
				</Box>
			</header>
			<section className="fullpage-menu">
				<Box className="fullpage-menu-inner">
					<Box className="menu-bg">
						<span></span>
						<span></span>
						<span></span>
					</Box>

					<nav>
						<Box component="ul" className="main-menu">
							<Box component="li"><Box sx={{ fontWeight: 700 }} component="a" href="/" >Home</Box></Box>
							<Box component="li"><Box sx={{ fontWeight: 700 }} component="a" href="/about" >About</Box></Box>
							<Box component="li"><Box sx={{ fontWeight: 700 }} component="a" href="/service" >Service</Box></Box>
							<Box component="li"><Box sx={{ fontWeight: 700 }} component="a" href="/product" >Product</Box></Box>
							<Box component="li"><Box sx={{ fontWeight: 700 }} component="a" href="/contact" >Contact</Box></Box>
							<Box component="li"><Box sx={{ fontWeight: 700 }} component="a" href="/blog" >Blogs</Box></Box>
						</Box>
					</nav>

					{/* <Box className="header-nav-footer">
						<ul className="social-links">
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Instagram</a></li>
							<li><a href="#">Twitter</a></li>
							<li>&copy;2021</li>
						</ul>
					</Box> */}

				</Box>
			</section>
		</>

	)
}