/* eslint-disable no-const-assign */
import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import "./imageAnimation.css";
import HeroImg from "../image/6.jpg";

const AnimateImage = () => {
	let container = useRef(null);
	let imageReveal = CSSRulePlugin.getRule(".img-container:after");

	// gsap timeline
	let tl = gsap.timeline();

	useEffect(() => {
		tl.to(container, 0, { css: { visibility: "visible" } }).to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
	});

	return (
		<div className="container-img" ref={el => (container = el)}>
			<div className="img-container">
				<img
					src={HeroImg} alt="home-img" style={{ height: "100%", width: "100%" }} />
			</div>
		</div>
	)
}

export default AnimateImage;