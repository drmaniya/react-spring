import React, { useEffect, useMemo, useState } from "react";
import '../App.css';
import useMeasure from 'react-use-measure';
import { useTransition, animated } from "@react-spring/web";

const getPositions = () => {
	const windowWidth = window.innerWidth;
	const gridColumn = windowWidth / 12;
	const xGap = gridColumn / 6;
	const yGap = gridColumn / 5;
	const tableWidth = 180;
	const tableHeight = tableWidth;

	return {
		xGap,
		yGap,
		tableWidth,
		tableHeight,
	}
}

const gridBoxPosition = (containerWidth, containerSizes) => {
	const { xGap, yGap, tableWidth, tableHeight } = containerSizes;
	const tables = new Array(22).fill({ type: 'table' });

	const columns = Math.floor((containerWidth - xGap) / (xGap + tableWidth));
	const calXGap = (containerWidth - (tableWidth * columns)) / (columns + 1);
	const rows = Math.ceil(tables.length / columns);
	let heights = new Array(columns).fill(0);
	let widths = new Array(rows).fill(0);

	const res = tables.map((each, index) => {
		const finalIndex = index;

		const column = heights.indexOf(Math.min(...heights));
		const row = Math.ceil((finalIndex + 1) / columns) - 1;
		const y = (heights[column] += tableHeight + yGap) - tableHeight;
		const x = (widths[row] += tableWidth + calXGap) - tableWidth;

		return {
			...each,
			id: '' + index,
			x,
			y,
			width: tableWidth,
			height: tableHeight
		}
	});

	return res;
};

const GridBox = () => {
	return (
		<div style={{
			background: "red",
			height: '100%',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}} />
	)
};

function GridBoxLayout() {
	const [data, setData] = useState([]);

	const [mainContainer, { width: containerWidth, height: containerHeight }] = useMeasure({
		offsetSize: false,
		scroll: false,
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const containerSizes = useMemo(() => getPositions(), [containerWidth, containerHeight]);

	const [transitions, api] = useTransition(data, () => ({
		key: (item) => item.id,
		from: { opacity: 0, height: 0, width: 0, x: 0, y: 0 },
		enter: ({ height, width, x, y }) => ({ height, width, x, y, opacity: 1 }),
		update: ({ height, width, x, y }) => ({ height, width, x, y, opacity: 1 }),
		leave: { opacity: 0 },
		config: { mass: 5, tension: 500, friction: 100 },
	}), [containerWidth, containerHeight, data]);

	useEffect(() => {
		api();
	}, [containerWidth, containerHeight, data]);

	useEffect(() => {
		if (containerWidth && containerHeight) {
			const tables = gridBoxPosition(containerWidth, containerSizes);
			setData([...tables]);
		}
	}, [containerWidth, containerHeight, containerSizes]);

	const outerWrapperHeight = (data?.[data.length - 1]?.y || 0) + containerSizes.yGap + containerSizes.tableHeight;

	return (
		<div style={{
			height: outerWrapperHeight,
		}}>

			<div ref={mainContainer} style={{
				height: '100vh',

			}}>
				{
					transitions((style, item) => (
						<animated.div style={style} key={item.id} className={item.type}>
							{
								item.type === 'table' && <GridBox index={Number(item.id)} />
							}
						</animated.div>
					))
				}
			</div>
		</div>
	);
}

export default GridBoxLayout;