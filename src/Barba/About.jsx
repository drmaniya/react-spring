import React from "react";
import { TweenMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./about.css";



function About() {
	gsap.registerPlugin(ScrollTrigger);
	let screen = useRef(null);
	let body = useRef(null);
	useEffect(() => {
		let ctx = gsap.context(() => {
			var tl = gsap.timeline();

			let sections = gsap.utils.toArray(".panel");
			console.log("section", sections);
			tl.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none", // <-- IMPORTANT!
				scrollTrigger: {
					trigger: ".wrapper",
					pin: true,
					pinSpacer: true,
					scrub: 0.1,
					//snap: directionalSnap(1 / (sections.length - 1)),
					end: "+=3000"
				}
			});
		});
		return () => ctx.revert(); // <-- CLEANUP!
	}, []);
	useEffect(() => {
		var tl = gsap.timeline();
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
			{/* <div className="About"> */}
			<div ref={(el) => (body = el)} className="Headd">
				<div className="wrapper">


					<div className="panel">
						<img src="http://static.showit.co/800/XuvRR5ZKQ52a4R_B89WixA/59514/macbookpreview-8.jpg" alt="img-11" />
					</div>

					<section className="panel black">
						<img src="http://static.showit.co/800/R35-FqP9QASNbupmBSK7Iw/59514/macbookpreview-7.jpg" alt="img-12" />
					</section>

					<section className="panel ">
						<div>
							<img src="http://static.showit.co/800/KrKfX6KHTeu7iOs6wxOQMA/59514/macbookpreview-5.jpg" alt="img-13" />
						</div>
					</section>
					<section className="panel black">
						<div>
							<img src="http://static.showit.co/800/peoh1XDRTVat5KqUv7P6GQ/59514/macbookpreview-3.jpg" alt="img-14" />
						</div>
					</section>
					<section className="panel">
						<div>
							<img src="http://static.showit.co/800/YyTYQlGLROOIJ5MqHIpKXQ/59514/macbookpreview-2.jpg" alt="img-15" />
						</div>
					</section>

				</div>
				{/* </div> */}
			</div>
		</React.Fragment>
	);
}

export default About;