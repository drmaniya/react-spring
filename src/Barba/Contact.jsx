import React from "react";
import { TweenMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./contact.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

const Contact = () => {
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

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.registerPlugin(ScrollTrigger);
			const btnEle = document.querySelector("#menuToggle");
			const locoScroll = new LocomotiveScroll({
				el: document.querySelector(".smooth-scroll"),
				smooth: true,
				lerp: 0.08,
			});

			locoScroll.on("scroll", ScrollTrigger.update);

			ScrollTrigger.scrollerProxy(".smooth-scroll", {
				scrollTop(value) {
					return arguments.length
						? locoScroll.scrollTo(value, 0, 0)
						: locoScroll.scroll.instance.scroll.y;
				},
				getBoundingClientRect() {
					return {
						top: 0,
						left: 0,
						width: window.innerWidth,
						height: window.innerHeight,
					};
				},
				pinType: document.querySelector(".smooth-scroll").style.transform
					? "transform"
					: "fixed",
			});

			const vh = (coef) => window.innerHeight * (coef / 100);
			console.log("vh", vh(100));
			const heroScroller = gsap.timeline({
				paused: true,
				scrollTrigger: {
					trigger: ".hero-header.h-1",
					scroller: ".smooth-scroll",
					pin: ".pin-wrapper",
					start: "top 10%",
					scrub: true,
					end: `${vh(100)}`,
				},
			});

			heroScroller
				.to(
					[".hero-header.h-1", ".hero-header.h-3"],
					{
						scale: 2,
						y: vh(100),
						xPercent: -100,
					},
					"heroScroll"
				)
				.to(
					".hero-header.h-2",
					{
						scale: 2,
						y: vh(100),
						xPercent: 100,
					},
					"heroScroll"
				)
				.to(
					"#heroImage",
					{
						scaleY: 2.5,

					},
					"heroScroll"
				)
				.to(
					"#heroImage .image",
					{
						scaleX: 2.5,
						xPercent: 50,
					},
					"heroScroll"
				);

			ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
			btnEle.addEventListener("click", () => {
				console.log("menu loco");
				locoScroll.update()
			});
			ScrollTrigger.refresh();
		})
		return () => ctx.revert();
	})
	return (
		<>
			<div className="load-container">
				<div className="load-screen left" >
				</div>
			</div>

			<div ref={(el) => (body = el)} className="Headd">
				<div className="smooth-scroll">
					<div className="hero-scroller">
						<div className="section">
							<div className="section-wrapper">
								<div className="content">
									<h1 className="hero-header h-1">CONNECT</h1>
									<h1 className="hero-header h-2">FOR MORE</h1>
									<h1 className="hero-header h-3">DETAILS</h1>
								</div>
								<div className="pin-wrapper">
									<div className="image-wrapper" id="heroImage">
										<img
											className="image"
											alt="txt"
											src="https://burst.shopifycdn.com/photos/contact-us-image.jpg?width=1200&format=pjpg&exif=1&iptc=1"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section copy">
						<div className="section-wrapper">
							<div className="content">
								<p>
									It is a long established fact that a reader will be distracted by
									the readable content of a page when looking at its layout. The
									point of using Lorem Ipsum is that it has a more-or-less normal
									distribution of letters, as opposed to using 'Content here,
									content here', making it look like readable English.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}

export default Contact;