import React, { useState } from "react";
import gsap from "gsap";
import "./Clip.css";
import { useEffect } from "react";


export default function Menu() {
	const [isMenu, setMenu] = useState(false);

	const ham = document.getElementById("ham");
	const links = document.getElementById("link")
	console.log("ham", ham, isMenu);

	var tl = gsap.timeline({ paused: true });
	tl.to('.overlay', {
		duration: 1,
		opacity: 1,
		"--clip": '100%'
	})
	tl.from(links, {
		duration: 1,
		opacity: 0,
		stagger: 0.1,
		ease: 'expo.inOut',
	}, "-=0.5");

	tl.reverse();
	if (ham) {
		ham.addEventListener('click', () => {
			tl.reversed(!tl.reversed());
		});
	}

	useEffect(() => {
		window.addEventListener('load', function () {
			// document.getElementById('ham').addEventListener("click", () => {
			console.log('clicked');
			// });
		});
	})


	return (
		<>
			<div>
				<button className="button" id="ham" style={{ cursor: "pointer", zIndex: 10, position: "relative" }} onClick={() => setMenu(!isMenu)}>Menu</button>
			</div>

			<div className="overlay" >
				test
				<div className="link" id="link">
					menu
				</div>
			</div>
		</>

	)
}