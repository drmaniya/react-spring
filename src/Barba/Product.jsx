import React from "react";
import { TweenMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./product.css";


function Product() {
	gsap.registerPlugin(ScrollTrigger);
	let screen = useRef(null);
	let body = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 })

			const animation = gsap.to(".photo:not(:first-child)", {
				opacity: 1, scale: 1, duration: 1, stagger: 1
			})

			ScrollTrigger.create({
				trigger: ".gallery",
				start: "top top",
				end: "bottom bottom",
				pin: ".rightblock",
				animation: animation,
				scrub: true,
			})
		});
		return () => ctx.revert();
	})
	useEffect(() => {
		var tl = gsap.timeline();
		tl.to(screen, {
			duration: 1.2,
			width: "100%",
			ease: Power3.easeInOut,
		});
		tl.to(screen, {
			duration: 1,
			right: "100%",
			ease: Power3.easeInOut,
			delay: 0.3,
		});
		tl.set(screen, { right: "100%" });
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
				<div className="load-screen right" ref={(el) => (screen = el)}>
				</div>
			</div>
			<div ref={(el) => (body = el)} className="Headd">
				<div className="gallery product-smooth-scroll">
					<div className="left">
						<div className="details">
							BRAND PRODUCT
						</div>
						<div className="details">
							PRODUCT DETAILS
						</div>
						<div className="details">
							DESIGN AGENCY
						</div>
					</div>
					<div className="rightblock">
						<div className="photos">
							<div className="photo">
								<img
									src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
									alt="img-1" />
							</div>
							<div className="photo">
								<img
									src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
									alt="img-2" />
							</div>
							<div className="photo">
								<img
									src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
									alt="img-3" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Product;