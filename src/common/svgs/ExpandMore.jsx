import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

function ExpandMore(props) {
	const {
		sx = {},
		width = 18,
		height = 18,
		direction = 'down',
		...rest
	} = props;
	return (
		<SvgIcon
			fontSize="small"
			sx={[
				styles.icon,
				{ width, height },
				direction === 'left' && styles.left,
				direction === 'right' && styles.right,
				direction === 'up' && styles.up,
				...(Array.isArray(sx) ? sx : [sx]),
			]}
			{...rest}
		>
			<path d="M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"></path>
		</SvgIcon>
	);
}

export default ExpandMore;
