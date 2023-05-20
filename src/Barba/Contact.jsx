import React from "react";
import { NavLink } from "react-router-dom";
import { TweenMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function Contact() {
	let screen = useRef(null);
	let body = useRef(null);
	useEffect(() => {
		var tl = gsap.timeline();
		tl.to(screen, {
			duration: 1.2,
			width: "100%",
			left: "0%",
			ease: Power3.easeInOut,
		});
		tl.to(screen, {
			duration: 1,
			left: "100%",
			ease: Power3.easeInOut,
			delay: 0.3,
		});
		tl.set(screen, { left: "-100%" });
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
					pointerEvents: 'none'
				}
			});
		}
	});
	return (
		<React.Fragment>
			<div className="load-container">
				<div className="load-screen left" ref={(el) => (screen = el)}>
				</div>
			</div>
			<div data-barba="container" className="Contact">
				<div ref={(el) => (body = el)} className="Headd">
					<div >Welcome to Contact!!!</div>
					<NavLink to="/" className="button">Home</NavLink>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Contact;