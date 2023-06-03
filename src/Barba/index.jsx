import React from "react";
// import { NavLink } from "react-router-dom";
import { TweenMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import HeroImg from "../image/6.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CSSRulePlugin from "gsap/CSSRulePlugin";


gsap.registerPlugin(CSSRulePlugin);

function Home() {
	let screen = useRef(null);
	let container = useRef(null);
	let imageReveal = CSSRulePlugin.getRule(".hero-img-container:after");
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
		tl.to('.title', {
			y: -100,
			opacity: 1,
			ease: 'power4',
			duration: 1,
		})
		tl.to('.txt', {
			x: "40%",
			opacity: 1,
			ease: 'power4',
			duration: 1,
		})
		tl.to(container, {
			visibility: "visible",
			opacity: 1,
			delay: 0,
			duration: 0.5,
		})
		tl.to(imageReveal, { width: "0%" });

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
	}, []);

	return (
		<React.Fragment>
			<Box className="load-container">
				<Box className="load-screen left" ref={(el) => (screen = el)}>
				</Box>
			</Box>
			<Box className="container Home">

				<Box ref={(el) => (body = el)} className="Headd" sx={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Box sx={{ padding: "2rem", width: "50%" }}>
						<Typography variant="h1" sx={{ fontWeight: 900, opacity: 0 }} className="title" > UNIQUE BRAND</Typography>
						<Typography component="p" className="txt" sx={{ opacity: 0, color: "#fff", maxWidth: "80%", fontSize: "16px", marginTop: '2rem' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and orem Ipsum.</Typography>
					</Box>
					<Box className="hero-img-container" ref={el => (container = el)} sx={{ position: "relative", opacity: 0, height: "100%", width: "50%", overflow: "hidden", "&>img": { backgroundSize: "cover", height: "100%", maxWidth: "100%" } }}>
						<img
							src={HeroImg} alt="home-img" />
					</Box>

				</Box>

			</Box>
		</React.Fragment>
	);
}

export default Home;