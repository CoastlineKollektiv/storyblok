import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function Menu(props) {
	const { sx = {}, width = 18, height = 18, ...rest } = props;

	return (
		<SvgIcon
			sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
			viewBox="0 0 24 24"
			fontSize="small"
			{...rest}
		>
			<path d="M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z"></path>
		</SvgIcon>
	);
}

export default Menu;
