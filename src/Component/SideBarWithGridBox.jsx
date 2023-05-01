import React, { useState } from "react";
import Box from "@mui/material/Box";
import GridBoxLayout from "./GridBoxLayout";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function SidebarWithGridBox() {
	const [isOpen, setOpen] = useState(false);
	return (
		<Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
			<Box sx={{ flex: 1 }}>
				<GridBoxLayout />

			</Box>

			<Box sx={{ background: 'blue', transition: '0.6s all', height: '100vh', width: isOpen ? '30rem' : '4rem' }}>
				<IconButton sx={{ color: '#fff', width: isOpen ? 'auto' : '100%' }} onClick={() => setOpen(!isOpen)}>
					<MenuIcon />
				</IconButton>
			</Box>
		</Box>
	)
}

export default SidebarWithGridBox;