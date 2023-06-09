import React, { useEffect } from "react";
import "./styles.css";
import gsap, { Expo, TweenMax, Power2, Power4 } from "gsap";


const LandingNew = () => {
	const allcontainer = gsap.utils.toArray(".container-item");
	const venueImageWrap = document.querySelector(".container-img-wrap");
	const venueImage = document.querySelector(".container-img");
	const tl = gsap.timeline();

	function initcontainer() {
		allcontainer.forEach((link) => {
			link.addEventListener("mouseenter", venueHover);
			link.addEventListener("mouseleave", venueHover);
			link.addEventListener("mousemove", moveVenueImage);
		});
	}

	function moveVenueImage(e) {
		console.log("call move venue", e);
		let xpos = e.clientX;
		let ypos = e.clientY;
		const tl = gsap.timeline();
		tl.to(venueImageWrap, {
			x: xpos,
			y: ypos,
		});
	}

	function venueHover(e) {
		console.log("Call venue hover", e);
		if (e.type === "mouseenter") {
			const targetImage = e.target.dataset.img;
			console.log("targetImage", targetImage);
			const tl = gsap.timeline();
			tl.set(venueImage, {
				backgroundImage: `url(${targetImage})`,
			}).to(venueImageWrap, {
				duration: 0.5,
				autoAlpha: 1,
			});
		} else if (e.type === "mouseleave") {
			const tl = gsap.timeline();
			tl.to(venueImageWrap, {
				duration: 0.5,
				autoAlpha: 0,
			});
		}
	}

	useEffect(() => {
		initcontainer();
		tl.from(".navbar > div", 1.6, {
			opacity: 0,
			y: 60,
			ease: Expo.easeInOut,
			delay: 0.6,
		});

		tl.from(
			".site-logo",
			1.6,
			{
				opacity: 0,
				y: 40,
				ease: Expo.easeInOut,
			},
			"-=1.6"
		);

		tl.staggerFrom(
			".site-menu > div",
			1,
			{
				opacity: 0,
				y: 60,
				ease: Power2.easeOut,
			},
			0.2
		);

		tl.staggerFrom(
			".header > div",
			1,
			{
				opacity: 0,
				y: 60,
				ease: Power2.easeOut,
				delay: -1.4,
			},
			0.2
		);
	})
	return (
		<div className="wrapper">
			<div className="site-logo">mouthwash</div>
			<div className="navbar">
				<div className="site-info">photos / films</div>
				<div className="site-menu">
					<div className="menu-item">projects</div>
					<div className="menu-item">about</div>
					<div className="menu-item">contact</div>
				</div>
			</div>
			<div className="header">
				<div className="header-left">
					elevated<br /><span>reality</span>
					<div className="link"><a href="#">view showreel</a></div>
				</div>
				<div className="header-right">/all projects</div>
			</div>
			<div className="container">
				<div className="container-items">
					<div className="container-img-wrap">
						<div className="container-img"></div>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img={require("../assets/image2/image-one.jpg")}>
							<h3>1</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img={require("../assets/image2/image-two.jpg")}>
							<h3>2</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img={require("../assets/image2/image-three.jpg")}>
							<h3>3</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img={require("../assets/image2/image-four.jpg")}>
							<h3>4</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img={require("../assets/image2/image-five.jpg")}>
							<h3>5</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img={require("../assets/image2/image-six.jpg")}>
							<h3>6</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img={require("../assets/image2/image-seven.jpg")}>
							<h3>7</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img={require("../assets/image2/image-eight.jpg")}>
							<h3>8</h3>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
export default LandingNew;