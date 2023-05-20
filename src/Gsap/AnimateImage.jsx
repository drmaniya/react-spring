/* eslint-disable no-const-assign */
import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import "./imageAnimation.css";

const AnimateImage = () => {
	let container = useRef(null);
	let image = useRef(null);
	let imageReveal = CSSRulePlugin.getRule(".img-container:after");


	let tl = gsap.timeline();

	useEffect(() => {
		tl.to(container, 0, { css: { visibility: "visible" } }).to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut }).from(image, 1.4, {
			scale: 1.6,
			ease: Power2.easeInOut,
			delay: -1.4,
		});
	});

	return (

		<section className="main">
			<div className="container" ref={el => (container = el)}>
				<>
					<div className="img-container">
						<img
							alt="text"
							ref={el => {
								image = el;
							}}
							src="https://raw.githubusercontent.com/wrongakram/GSAP-imageReveal/master/src/images/people.webp"
						/>
					</div>
				</>
			</div>
		</section>

	)
}

export default AnimateImage;