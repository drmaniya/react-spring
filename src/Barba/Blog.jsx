import React from "react";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";
import Img5 from "../assets/5.jpg";
import Img6 from "../assets/6.jpg";
import Img8 from "../assets/8.jpg";
import Img9 from "../assets/9.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import "./blog.css";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Blog() {

	// const stage = select('.stage');
	const slides = document.querySelectorAll(".slide");

	console.log("slides", slides);


	function initIntro() {

		// animate the intro elements into place

		let tl = gsap.timeline({ delay: 1.2 });

		tl.from('.intro-line', {
			// x: 100,
			y: 600,
			ease: 'power4',
			duration: 3
		})
			.from('.intro__title', {
				y: -10,
				opacity: 0,
				ease: 'power4',
				duration: 3
			}, 0.7)
			.from('.intro__txt', {
				x: -100,
				opacity: 0,
				ease: 'power4',
				duration: 3
			}, 0.7)
			.from('.intro__img--1', {
				// x: -50,
				y: 50,
				opacity: 0,
				ease: 'power2',
				duration: 10
			}, 1)
			.from('.intro__img--2', {
				// x: 50,
				y: -50,
				opacity: 0,
				ease: 'power2',
				duration: 10
			}, 1);

		// set up scrollTrigger animation for the when the intro scrolls out

		let stl = gsap.timeline({
			scrollTrigger: {
				trigger: '.intro',
				scrub: 1,
				start: "top bottom", // position of trigger meets the scroller position
				end: "bottom top"
			}
		});

		stl.to('.intro__title', {
			y: -10,
			ease: 'power4.in',
			duration: 3,

		})
			.to('.intro__txt', {
				y: 100,
				ease: 'power4.in',
				duration: 3,
			}, 0);
	}



	function initSlides() {
		slides.forEach((slide, i) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: slide,
					start: "40% 50%", // position of trigger meets the scroller position
				}
			});

			tl.from(slide.querySelectorAll('.col-content-title'), {
				ease: "power4",
				y: "+=5vh",
				duration: 2.5,
			})
				.from(slide.querySelectorAll('.line__inner'), {
					y: 200,
					duration: 2,
					ease: "power4",
					stagger: 0.1
				}, 0)
				.from(slide.querySelectorAll('.col-content-txt'), {
					x: 100,
					y: 50,
					opacity: 0,
					duration: 2,
					ease: "power4"
				}, 0.4)
				.from(slide.querySelectorAll('.slide-link'), {
					x: -100,
					y: 100,
					opacity: 0,
					duration: 2,
					ease: "power4"
				}, 0.3)
				.from(slide.querySelectorAll('.slide__scroll-link'), {
					y: 200,
					duration: 3,
					ease: "power4"
				}, 0.4)
				.to(slide.querySelectorAll('.slide__scroll-line'), {
					scaleY: 0.6,
					transformOrigin: "bottom left",
					duration: 2.5,
					ease: "elastic(1,0.5)"
				}, 1.4)
		});
	}
	function initParallax() {
		slides.forEach((slide, i) => {
			let imageWrappers = slide.querySelectorAll('.col-img-wrap');

			gsap.fromTo(imageWrappers, {
				y: "-30vh"
			}, {
				y: "30vh",
				scrollTrigger: {
					trigger: slide,
					scrub: true,
					start: "top bottom", // position of trigger meets the scroller position
					snap: {
						snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
						duration: 1,
						ease: 'power4.inOut'
					}
				},
				ease: 'none'
			})
		});
	}
	// function scrollTop() {
	// 	gsap.to(window, {
	// 		duration: 2,
	// 		scrollTo: {
	// 			y: "#slide-0"
	// 		},
	// 		ease: "power2.inOut"
	// 	});
	// 	gsap.to('.footer__link-top-line', {
	// 		scaleY: 1,
	// 		transformOrigin: "bottom center",
	// 		duration: 0.6,
	// 		ease: "power4"
	// 	});
	// }

	// function initKeys() {
	// 	document.addEventListener('keydown', (e) => {
	// 		e.preventDefault();
	// 		if (e.keyCode == 40) { //down arrow to next slide
	// 			if (slideID <= slides.length) {
	// 				slideID++;
	// 				gsap.to(window, {
	// 					duration: 2,
	// 					scrollTo: {
	// 						y: "#slide-" + slideID
	// 					},
	// 					ease: "power2.inOut"
	// 				});
	// 			}
	// 		}
	// 		else if (e.keyCode == 38) { // up arrow to top
	// 			slideID = 0;
	// 			scrollTop();
	// 		}
	// 	});
	// }

	useEffect(() => {

		// gsap.set(stage, { autoAlpha: 1, visibility: "visible" });
		// initHeader();
		initIntro();
		// initLinks();
		initSlides();
		initParallax();
		// initKeys();
	})
	return (
		<div className="stage">
			{/* <section className="intro slide--0" id="slide-0">
				<div className="intro__content">
					<h1 className="intro__title">Brand</h1>
					<p className="intro__txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias deserunt eveniet
						magni magnam optio quos incidunt ut, et dolorum, asperiores porro quasi quaerat ipsum id aliquam
						eos, tempora cumque placeat?</p>
				</div>
				<img className="intro__img intro__img--1" src={Img8} alt="8" />
				<img className="intro__img intro__img--2" src={Img9} alt="9" />
			</section> */}
			<section className="slide slide--1" id="slide-1">
				<div className="col col--1">
					<div className="col-content col-content--1">
						<h2 className="col-content-title"><span className="line__inner">Mono</span><br /><span
							className="line__inner">Be Unique Once</span></h2>
						<div className="col-content-wrap">
							<p className="col-content-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nobis
								a odio ratione quam assumenda eum veritatis, sit quasi magnam quibusdam fugit deleniti
								necessitatibus saepe non cumque praesentium molestias esse.</p>
							<a href="#" className="slide-link">
								<div className="slide-link__circ"></div>
								<div className="slide-link__line"></div>
							</a>
						</div>
					</div>
					<a href="#slide-2" className="slide__scroll-link">
						<div className="slide__scroll-line"></div>
					</a>
				</div>
				<div className="col col--2">
					<div className="col-img-wrap">
						<img className="img img--1" src={Img1} alt="1" />
					</div>
				</div>
			</section>

			<section className="slide slide--2" id="slide-2">

				<div className="col col--2">
					<div className="col-img-wrap">
						<img className="img img--1" src={Img2} alt="2" />
					</div>
					<a href="#slide-3" className="slide__scroll-link">
						<div className="slide__scroll-line"></div>
					</a>
				</div>
				<div className="col col--1">
					<div className="col-content col-content--2">
						<h2 className="col-content-title"><span className="line__inner">Look</span><br /><span
							className="line__inner">Be Different</span></h2>
						<div className="col-content-wrap">
							<p className="col-content-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
								distinctio mollitia maxime doloremque sequi possimus suscipit quisquam laudantium ad odit
								illo, ullam recusandae aliquid est consequatur amet, voluptas voluptatibus nihil.</p>
							<a href="#" className="slide-link">
								<div className="slide-link__circ"></div>
								<div className="slide-link__line"></div>
							</a>
						</div>
					</div>

				</div>
			</section>

			<section className="slide slide--3" id="slide-3">
				<div className="col col--1">
					<div className="col-content col-content--3">
						<h2 className="col-content-title"><span className="line__inner">Zombie</span><br /><span
							className="line__inner">Be Natural</span></h2>
						<div className="col-content-wrap">
							<p className="col-content-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
								distinctio magnam repellendus sapiente, quisquam veritatis nesciunt dignissimos numquam quo
								maiores deleniti laborum nulla qui. Provident obcaecati recusandae inventore amet natus!</p>
							<a href="#" className="slide-link">
								<div className="slide-link__circ"></div>
								<div className="slide-link__line"></div>
							</a>
						</div>
					</div>
					<a href="#slide-4" className="slide__scroll-link">
						<div className="slide__scroll-line"></div>
					</a>
				</div>
				<div className="col col--2">
					<div className="col-img-wrap">
						<img className="img img--1" src={Img3} alt="3" />
					</div>
				</div>
			</section>

			<section className="slide slide--4" id="slide-4">
				<div className="col col--2">
					<div className="col-img-wrap">
						<img className="img img--1" src={Img4} alt="4" />
					</div>
					<a href="#slide-5" className="slide__scroll-link">
						<div className="slide__scroll-line"></div>
					</a>
				</div>
				<div className="col col--1">
					<div className="col-content col-content--4">
						<h2 className="col-content-title"><span className="line__inner">Jimi</span><br /><span
							className="line__inner">What We Provide</span></h2>
						<div className="col-content-wrap">
							<p className="col-content-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
								blanditiis accusamus praesentium minima ducimus eligendi recusandae expedita quasi
								necessitatibus, dicta officia ipsum similique ex adipisci tempora rem neque repudiandae
								deleniti.</p>
							<a href="#" className="slide-link">
								<div className="slide-link__circ"></div>
								<div className="slide-link__line"></div>
							</a>
						</div>
					</div>

				</div>

			</section>

			<section className="slide slide--5" id="slide-5">
				<div className="col col--1">
					<div className="col-content col-content--5">
						<h2 className="col-content-title"><span className="line__inner">Exit</span><br /><span
							className="line__inner">No. 5</span></h2>
						<div className="col-content-wrap">
							<p className="col-content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
								Etiam porta sem malesuada magna mollis euismod.</p>
							<a href="#" className="slide-link">
								<div className="slide-link__circ"></div>
								<div className="slide-link__line"></div>
							</a>
						</div>
					</div>
					<a href="#slide-6" className="slide__scroll-link">
						<div className="slide__scroll-line"></div>
					</a>
				</div>
				<div className="col col--2">
					<div className="col-img-wrap">
						<img className="img img--1" src={Img5} alt="5" />
					</div>
				</div>
			</section>

			<section className="slide slide--6" id="slide-6">

				<div className="col col--2">
					<div className="col-img-wrap">
						<img className="img img--1" src={Img6} alt="6" />
					</div>
					<a href="#slide-7" className="slide__scroll-link">
						<div className="slide__scroll-line"></div>
					</a>
				</div>
				<div className="col col--1">
					<div className="col-content col-content--6">
						<h2 className="col-content-title"><span className="line__inner">Smart</span><br /><span
							className="line__inner">No. 6</span></h2>
						<div className="col-content-wrap">
							<p className="col-content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
								Etiam porta sem malesuada magna mollis euismod.</p>
							<a href="#" className="slide-link">
								<div className="slide-link__circ"></div>
								<div className="slide-link__line"></div>
							</a>
						</div>
					</div>

				</div>
			</section>
		</div>
	)
}

export default Blog;