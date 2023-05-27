import React, { useEffect } from "react";
import gsap from "gsap";
import { Power2 } from "gsap/gsap-core";
import "./Clip.css";
import { useRef } from "react";


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
				<div className="header-row">
					<div className="brand-logo">
						<a href="/">
							Brand
						</a>
					</div>
					<button ref={ref} className="menu-toggle" id="menuToggle">
						<svg viewBox="0 0 12 10" className="hamburger" height="40px" width="40px">
							<path d="M10,2 L2,2" className="bar-1"></path>
							<path d="M2,5 L10,5" className="bar-2"></path>
							<path d="M10,8 L2,8" className="bar-3"></path>

						</svg>
					</button>
				</div>
			</header>
			<section className="fullpage-menu">
				<div className="fullpage-menu-inner">
					<div className="menu-bg">
						<span></span>
						<span></span>
						<span></span>
					</div>

					<nav>
						<ul className="main-menu">
							<li><a href="/" >Home</a></li>
							<li><a href="/about" >About</a></li>
							<li><a href="/service" >Service</a></li>
							<li><a href="/product" >Product</a></li>
							<li><a href="/contact" >Contact</a></li>
						</ul>
					</nav>

					{/* <div className="header-nav-footer">
						<ul className="social-links">
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Instagram</a></li>
							<li><a href="#">Twitter</a></li>
							<li>&copy;2021</li>
						</ul>
					</div> */}

				</div>
			</section>
		</>

	)
}