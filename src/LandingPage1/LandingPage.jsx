import React, { useEffect } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import "./landing.css";

const LandingPage = () => {
	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.from(".left-side-container img", {
				y: "-100%",
				duration: 2.5,
				transform: "scale(1, .9)",
				delay: 1,
			});
			tl.from(
				".right-side-container img",
				{
					y: 400,
					duration: 2.5,
					transform: "scale(1.5,1.3)",
					stagger: {
						amount: 1.4,
					},
				},
				"-=2.5"
			);
			tl.from(
				".right-side-container h6",
				{
					y: 500,
					duration: 2,
				},
				"-=2.5"
			);
		});
		return () => ctx.revert();
	});

	function finalAnimation(id, text) {
		console.log("id", id, text)
		console.log("hello");
		let imgspan = document.getElementById("left-side-img-span");
		innerTextContent.innerText = text;
		let img = document.createElement("img");
		img.src = require(`../assets/images/${id}.jpg`);
		console.log("img src test", img.src);
		imgspan.appendChild(img);
		var imgTags = imgspan.querySelectorAll("img");
		var lastImgTag = imgTags[imgTags.length - 1];
		gsap.from(lastImgTag, {
			y: -800,
			duration: 2,
			transform: "scale(1,0.8)",
			ease: "Power3.easeOut",
		});
	}

	let innerTextContent = document.getElementById("innerTextContent");

	function contentChange(el) {
		console.log("call", el.target.id);
		if (el.target.id === "img1") {
			console.log("true")
			finalAnimation(el.target.id, "Le Oh Diva Impulse No1");
		} else if (el.target.id === "img2") {
			finalAnimation(el.target.id, "Le Oh Flash Beige");
		} else if (el.target.id === "img3") {
			finalAnimation(el.target.id, "Botanic Apache No2");
		} else if (el.target.id === "img4") {
			finalAnimation(el.target.id, "Jeroen De Ruddere No5");
		} else if (el.target.id === "img5") {
			finalAnimation(el.target.id, "Le Oh Botanic Bright White");
		}
	}



	return (
		<Box sx={{ color: "#fff" }} >
			<div className="section">
				<div className="wrapper">
					<div className="section-container">
						<div className="left-side-container">
							<span id="left-side-img-span">
								<img src={require("../assets/images/img1.jpg")} alt="" />
							</span>
						</div>
						<div className="right-side-container">
							<span>
								<h6 id="innerTextContent">Le Oh Diva Impulse No1</h6>
							</span>
							<ul>
								<li>
									<span
									><img
											src={require("../assets/images/img1.jpg")}
											alt=""
											onMouseOver={(e) => contentChange(e)}
											className="imgHover"
											id="img1"
										/></span>
								</li>
								<li>
									<span
									><img
											src={require("../assets/images/img2.jpg")}
											onMouseOver={(e) => contentChange(e)}
											alt=""
											className="imgHover"
											id="img2"
										/></span>
								</li>
								<li>
									<span
									><img
											src={require("../assets/images/img3.jpg")}
											alt=""
											onMouseOver={(e) => contentChange(e)}
											className="imgHover"
											id="img3"
										/></span>
								</li>
								<li>
									<span
									><img
											src={require("../assets/images/img4.jpg")}
											onMouseOver={(e) => contentChange(e)}
											alt=""
											className="imgHover"
											id="img4"
										/></span>
								</li>
								<li>
									<span
									><img
											src={require("../assets/images/img5.jpg")}
											alt=""
											className="imgHover"
											onMouseOver={(e) => contentChange(e)}
											id="img5"
										/></span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Box>
	)
}

export default LandingPage;