import React from "react";
import { NavLink } from "react-router-dom";
import { TweenMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import gsap from "gsap";


function Service() {
	let screen = useRef(null);
	let body = useRef(null);
	useEffect(() => {
		var tl = gsap.timeline();

		tl.to(screen, {
			duration: 1.2,
			height: "100%",
			ease: Power3.easeInOut,
		});
		tl.to(screen, {
			duration: 1,
			bottom: "100%",
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
				<div className="load-screen bottom" ref={(el) => (screen = el)}>
				</div>
			</div>
			<div data-barba="container" className="Service">
				<div ref={(el) => (body = el)} className="Headd">
					<div >Welcome to Product!!!</div>
					<NavLink to="/contact" className="button">Contact</NavLink>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Service;