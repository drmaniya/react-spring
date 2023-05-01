import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function ScrollingSecTwo() {
	const alignCenter = { display: 'flex', alignItems: 'center' }
	return (
		<Box sx={{ position: 'relative', height: '100vh' }}>
			<Box sx={{
				background: '#fff',
				position: "absolute",
				top: 0,
				bottom: 0,
				right: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
			}} />

			<Parallax pages={5}>
				<ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
					<Typography sx={{
						fontSize: "1.5rem",
					}} component="p">Scroll down</Typography>
				</ParallaxLayer>

				<ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "1.25rem",
							height: "10rem",
							width: "25%",
							textAlign: "center",
							borderRadius: "10px",
							marginLeft: "15%",
							backgroundColor: "#ff6d6d"
						}}>
						<Typography sx={{
							fontSize: "1.5rem",
						}} component="p">I'm a sticky layer</Typography>
					</Box>
				</ParallaxLayer>

				<ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "1.25rem",
							height: "10rem",
							width: "25%",
							textAlign: "center",
							borderRadius: "10px",
						}}>
						<Typography sx={{
							fontSize: "1.5rem",
						}} component="p">I'm not</Typography>
					</Box>
				</ParallaxLayer>

				<ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "1.25rem",
							height: "10rem",
							width: "25%",
							textAlign: "center",
							borderRadius: "10px",
						}}>
						<Typography sx={{
							fontSize: "1.5rem",
						}} component="p">Neither am I</Typography>
					</Box>
				</ParallaxLayer>
			</Parallax>
		</Box >
	)
}
