import React, { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useMeasure from 'react-use-measure'
import { useTransition, a } from '@react-spring/web'
import '../App.css';

const data = [
	{ css: 'https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg', height: 150 },
	{ css: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg', height: 300 },
	{ css: 'https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg', height: 300 },
	{ css: 'https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg', height: 300 },
	{ css: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg', height: 300 },
	{ css: 'https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg', height: 300 },
	{ css: 'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg', height: 200 },
	{ css: 'https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg', height: 300 },
	{ css: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg', height: 200 },
	{ css: 'https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg', height: 400 },
	{ css: 'https://images.pexels.com/photos/2736834/pexels-photo-2736834.jpeg', height: 200 },
	{ css: 'https://images.pexels.com/photos/249074/pexels-photo-249074.jpeg', height: 150 },
	{ css: 'https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg', height: 400 },
	{ css: 'https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg', height: 200 },
]

function MasnoryLayout() {
	const [isOpen, setOpen] = useState(false);
	const columnCount = 5;
	const columns = isOpen ? (columnCount - 1) : columnCount;

	const [ref, { width }] = useMeasure();

	const items = data;

	const [heights, gridItems] = useMemo(() => {
		let heights = new Array(columns).fill(0)
		let gridItems = items.map((child, i) => {
			const column = heights.indexOf(Math.min(...heights))
			const x = (width / columns) * column
			const y = (heights[column] += child.height / 2) - child.height / 2
			return { ...child, x, y, width: width / columns, height: child.height / 2 }
		})
		return [heights, gridItems]
	}, [columns, items, width])

	const transitions = useTransition(gridItems, {
		key: (item) => item.css,
		from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
		enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
		update: ({ x, y, width, height }) => ({ x, y, width, height }),
		leave: { height: 0, opacity: 0 },
		trail: 25,
	})
	return (
		<Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
			<Box sx={{ flex: 1 }}>
				<div ref={ref} className="list" style={{ height: Math.max(...heights) }}>
					{transitions((style, item) => (
						<a.div style={style}>
							<div style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }} />
						</a.div>
					))}
				</div>
			</Box>

			<Box sx={{ background: 'blue', transition: '0.6s all', zIndex: 1, height: '100vh', width: isOpen ? '30rem' : '4rem' }}>
				<IconButton sx={{ color: '#fff', width: isOpen ? 'auto' : '100%' }} onClick={() => setOpen(!isOpen)}>
					<MenuIcon />
				</IconButton>
			</Box>
		</Box>
	)
}

export default MasnoryLayout;