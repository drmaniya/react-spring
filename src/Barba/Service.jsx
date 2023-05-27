import React from "react";
import { TweenMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./service.css";

function Service() {
	let screen = useRef(null);
	const cardOn = useRef(null);
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

	useEffect(() => {

		const ele = cardOn.current;
		console.log("btn", ele);


		const card = gsap.timeline({
			paused: "true",
			reversed: "true",
		});
		card.fromTo(
			"#card-animation #card-plus",
			{
				display: "block",
			},
			{
				display: "none",
			}
		);
		card.fromTo(
			"#card-animation #card-minus",
			{
				display: "none",
			},
			{
				display: "block",
			}
		);
		card.fromTo(
			"#card-animation .card-paragraph, #card-animation .card-text-below",
			{
				opacity: 0,
				y: 20,
			},
			{
				opacity: 1,
				y: 0,
				stagger: {
					amount: 0.2,
				},
			},
			"-=2"
		);

		ele.addEventListener('click', function () {
			console.log("cll")
			card.reversed() ? card.play() : card.reverse();

		});

		const tl = gsap.timeline();
		tl.fromTo(".img", {
			y: -50,
			height: 0,
			ease: "Power2.easeInOut",
		}, {
			height: "500px",
			opacity: 1,
			delay: 2.5,
			duration: 1,

		});
		tl.fromTo(
			".card-side, .card-header",
			{
				opacity: 0,
			},
			{
				opacity: 1,
				delay: 0.3,
			},
		);
	})
	return (
		<React.Fragment>
			<div className="load-container">
				<div className="load-screen bottom" ref={(el) => (screen = el)}>
				</div>
			</div>
			{/* <div data-barba="container" className="Service"> */}
			<div ref={(el) => (body = el)} className="Headd">
				<div className="card-animation" id="card-animation">
					<div className="img"></div>
					<p className="card-header">SAVAGE</p>
					<div className="card-text-below">
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="card-side">
						<h2>
							Taimoor <br />
							Shahzada
						</h2>
						<div ref={cardOn} className="card-on">
							<span id="card-plus">+</span>
							<span id="card-minus">-</span>
						</div>
					</div>
					<div className="card-side-text">
						<p className="card-paragraph">
							Lorem ipsum dolor sit amet. <br />
							Lorem ipsum dolor, sit amet consectetur <br />
							adipisicing elit. Voluptate, vero. <br />
							Lorem, ipsum dolor sit amet consectetur adipisicing. <br />
							Lorem ipsum dolor sit amet. <br />
							Lorem, ipsum. <br />
							Lorem ipsum dolor sit amet.
						</p>
					</div>
				</div>
			</div>
			{/* </div> */}
		</React.Fragment>
	);
}

export default Service;