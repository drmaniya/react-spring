import * as React from 'react'
import { useScroll, animated, useSpring } from '@react-spring/web'
import '../App.css';
import { Box, Typography } from '@mui/material';


const PAGE_COUNT = 10



export default function ScrollingSec() {
	const containerRef = document.getElementsByClassName("containerRef")[0];

	console.log("containerRef", containerRef);
	const [textStyles, textApi] = useSpring(() => ({
		y: '100%',
	}))
	const [textStyles2, textApi2] = useSpring(() => ({
		y: '100%',
	}))

	const { scrollYProgress } = useScroll({
		container: containerRef,
		onChange: ({ value: { scrollYProgress } }) => {
			if (scrollYProgress > 0.1 && scrollYProgress < 0.2) {
				textApi.start({ y: '0' })
			} else {
				textApi.start({ y: '100%' })
			}
			if (scrollYProgress > 0.3 && scrollYProgress < 0.4) {
				textApi2.start({ y: '0' });
				console.log("product call");
			} else {
				textApi2.start({ y: '100%' })
			}
		},
		default: {
			immediate: true,
		},
	})

	console.log("scrollYProgress", scrollYProgress.to(val => val));

	return (


		<div ref={containerRef} className="containerRef">
			<div className="animated__layers">
				<Box sx={{ height: '100vh', color: '#FFF' }}>
					<Typography component="h1" sx={{ textAlign: 'center', fontSize: '100px' }}>Hero</Typography>
				</Box>

				<animated.div
					className="dot"
					style={{
						clipPath: scrollYProgress.to(val => `circle(${val * 500}%)`),
					}}>
					<h1 className="title">
						<span>
							<animated.span style={textStyles}>ABOUT US!</animated.span>
						</span>
						<span >
							<animated.span style={textStyles}>
								<span style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quisquam dolor dicta eligendi culpa exercitationem modi iste nostrum doloremque esse harum nulla eos, repudiandae ducimus illum itaque iusto ab similique.
								</span>
							</animated.span>
						</span>

					</h1>
				</animated.div>
				<animated.div

				>
					<h1 className="title">
						<span>
							<animated.span style={textStyles2}>product</animated.span>
						</span>
						<span >
							<animated.span style={textStyles2} >
								<span style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quisquam dolor dicta eligendi culpa exercitationem modi iste nostrum doloremque esse harum nulla eos, repudiandae ducimus illum itaque iusto ab similique.
								</span>
							</animated.span>
						</span>

					</h1>
				</animated.div>
			</div>
			{
				new Array(PAGE_COUNT).fill(null).map((_, index) => (
					<div className="full__page" key={index} />
				))
			}
		</div >
	)
}
