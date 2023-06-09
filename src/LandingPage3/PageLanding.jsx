import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import gsap from "gsap";
import { TweenLite, TweenMax, Power3, Power4, Power1 } from "gsap";
// import { TweenMax, Power3, Power4 } from "gsap";

const PageLanding = () => {
	let screen = useRef(null);
	let body = useRef(null);

	// const [isPageClick, setPageClick] = useState(false);
	// console.log("click", isPageClick);
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
		// tl.to(".imgClass", {
		// 	left: "100%",
		// 	width: "100%",
		// 	opacity: 1,
		// 	duration: 1,
		// 	// ease: Power3.easeInOut,
		// 	// onComplete:() => 
		// })

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

		var root = document.documentElement;
		var body = document.body;
		var pages = document.querySelectorAll(".page");
		var tiles = document.querySelectorAll(".tile");

		if (pages || tiles) {
			for (var i = 0; i < tiles.length; i++) {
				addListeners(tiles[i], pages[i]);
			}
		}


		function animateHero(fromHero, toHero) {
			var clone = fromHero.cloneNode(true);

			var from = calculatePosition(fromHero);
			var to = calculatePosition(toHero);

			TweenLite.set([fromHero, toHero], { visibility: "hidden" });
			TweenLite.set(clone, { position: "absolute", margin: 0 });

			body.appendChild(clone);

			var style = {
				x: to.left - from.left,
				y: to.top - from.top,
				width: to.width,
				height: to.height,
				autoRound: false,
				ease: Power1.easeOut,
				onComplete: onComplete
			};

			TweenLite.set(clone, from);
			TweenLite.to(clone, 0.3, style)

			function onComplete() {

				TweenLite.set(toHero, { visibility: "visible" });
				body.removeChild(clone);
			}
		}

		function calculatePosition(element) {

			var rect = element.getBoundingClientRect();

			var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
			var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

			var clientTop = root.clientTop || body.clientTop || 0;
			var clientLeft = root.clientLeft || body.clientLeft || 0;

			return {
				top: Math.round(rect.top + scrollTop - clientTop),
				left: Math.round(rect.left + scrollLeft - clientLeft),
				height: rect.height,
				width: rect.width,
			};
		}

		function addListeners(tile, page) {
			console.log("Call");
			const tileClick = () => {
				// setPageClick(!isPageClick);

				animateHero(tile, page);
			}
			const pageClick = () => {
				// setPageClick(!isPageClick);

				animateHero(page, tile);
			}
			if (tile) {
				tile.addEventListener("click", tileClick);
			}
			if (page) {
				page.addEventListener("click", pageClick);
			}
		}

	})
	return (
		<div>
			<div className="load-container">
				<div className="load-screen bottom" ref={(el) => (screen = el)}></div>
			</div>
			<div ref={(el) => (body = el)} className="Headd">
				<main style={{ zIndex: 11, position: "relative" }}>


					<div className="green-box"></div>

					<div className="box-container" style={{ zIndex: 11 }}>
						<div className="tile box-1"></div>
						<div className="tile box-2"></div>
						<div className="tile box-3"></div>
						<div className="tile box-4"></div>
					</div>
				</main>

				<div className="container" style={{ zIndex: 11, position: "relative" }}>
					<div className="page box-1">
						<img
							//  className={isPageClick ? "imgClass" : ''} 
							src="https://picsum.photos/seed/picsum/1920/950" alt="no-img" />
					</div>
					<div className="page box-2">
						<img
							//  className={isPageClick ? "imgClass" : ''} 
							src="https://picsum.photos/id/251/1920/950" alt="no-img" />
					</div>
					<div className="page box-3">
						<img
							// className={isPageClick ? "imgClass" : ''} 
							src="https://picsum.photos/id/253/1920/950" alt="no-img" />
					</div>
					<div className="page box-4">
						<img
							// className={isPageClick ? "imgClass" : ''}
							src="https://picsum.photos/id/250/1920/950" alt="no-img" />
					</div>
				</div>
			</div >
		</div >
	)
}

export default PageLanding;