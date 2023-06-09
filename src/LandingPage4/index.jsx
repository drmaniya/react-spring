import React from "react";
import { useEffect } from "react";
import "./index.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);
const LandingPage4 = () => {
	useEffect(() => {



		const smileyWrapper = document.querySelector(".smiley-wrapper");
		const targets = gsap.utils.toArray("section:not(:first-of-type)");
		const smileys = gsap.utils.toArray(".smiley");
		const colors = gsap.utils.wrap(["#241C31", "#4A4453", "#B0A8BA", "#153B34", "#446B62"]);
		gsap.set(targets, { backgroundColor: colors });

		targets.forEach((target, i) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: target,
					start: () => "top " + smileyWrapper.getBoundingClientRect().bottom,
					end: () => "top " + smileyWrapper.getBoundingClientRect().top,
					scrub: true
				}
			});
			tl.to(smileys[i], { "clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
			tl.to(smileys[i + 1], { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, 0);
		});




	})
	return (
		<>
			<div className="smiley-wrapper">
				<div className="smiley">
					<img src="https://assets.codepen.io/314556/smiley-default.png" alt="smiley emoji" />
				</div>
				<div className="smiley">
					<img src="https://assets.codepen.io/314556/smiley-grin.png" alt="smiley emoji with big grin" />
				</div>
				<div className="smiley">
					<img src="https://assets.codepen.io/314556/smiley-silly.png" alt="smiley emoji with toungue out" />
				</div>
				<div className="smiley">
					<img src="https://assets.codepen.io/314556/smiley-worried.png" alt="smiley emoji looking worried" />
				</div>
				<div className="smiley">
					<img src="https://assets.codepen.io/314556/smiley-crying.png" alt="smiley emoji crying" />
				</div>
				<div className="smiley">
					<img src="https://assets.codepen.io/314556/smiley-party.png" alt="smiley emoji with headphones" />
				</div>
				<div className="smiley">
					<img src="https://assets.codepen.io/314556/smiley-cool.png" alt="smiley emoji with sunglasses looking cool" />
				</div>
			</div>

			<div id="smooth-wrapper">
				<div id="smooth-content">

					<section>
						<div className="some-content">
							<h2>Project Stages</h2>
							<p>Please scroll down to learn about the roller coaster of emotions you may experience on your next project.</p>
						</div>
					</section>
					<section>
						<div className="some-content">
							<h2>1. Happiness</h2>
							<p>You'll be super excited and happy to start work on the project. Fortune and glory are certain to follow.</p>
						</div>
					</section>
					<section>
						<div className="some-content">
							<h2>2. Logo Feedback</h2>
							<p>That's a wonderful and original idea Mr/Mrs Client. No one has ever asked to make the logo bigger. Well done.</p>
						</div>
					</section>
					<section>
						<div className="some-content dark-text">
							<h2>3. Deadline Approaching</h2>
							<p>The deadline will soon be here. Maybe if you stay off social media and focus, you can get this thing done. </p>
						</div>
					</section>
					<section>
						<div className="some-content">
							<h2>4. Panic</h2>
							<p>The project specs have now changed but the deadline has not. Lack of sleep is getting to you.</p>
						</div>
					</section>
					<section>
						<div className="some-content">
							<h2>5. Music &amp; Caffeine</h2>
							<p>Okay, crunch time. You crank up your favorite tunes, drink copious amounts of your favorite caffeinated beverage and code through the night.</p>
						</div>
					</section>
					<section>
						<div className="some-content">
							<h2>6. Rock Star!!</h2>
							<p>The project is out the door, and the client is happy. You have achieved legendary status. Well done. Bring on the next challenge! </p>
						</div>
					</section>
				</div>
			</div>
		</>

	)
}

export default LandingPage4;