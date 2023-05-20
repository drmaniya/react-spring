import React from "react";
import { NavLink } from "react-router-dom";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

function About() {
	let screen = useRef(null);
	let body = useRef(null);
	useEffect(() => {
		var tl = new TimelineMax();
		tl.to(screen, {
			duration: 1.2,
			height: "100%",
			ease: Power3.easeInOut,
		});
		tl.to(screen, {
			duration: 1,
			top: "100%",
			ease: Power3.easeInOut,
			delay: 0.3,
		});
		TweenMax.to(body, .3, {
			css: {
				opacity: "1",
				pointerEvents: "auto",
				ease: Power4.easeInOut
			}
		}).delay(2);
		return () => {
			TweenMax.to(body, 1, {
				css: {
					opacity: "0",
					pointerEvents: "auto",
				}
			});
		}
	});
	return (
		<React.Fragment>
			<div className="load-container">
				<div className="load-screen top" ref={(el) => (screen = el)}></div>
			</div>
			<div data-barba="container" className="About">
				<div ref={(el) => (body = el)} className="Headd">
					<div>welcome to  About!!!</div>
					<NavLink to="/product" className="button">Product</NavLink>
				</div>
			</div>
		</React.Fragment>
	);
}

export default About;