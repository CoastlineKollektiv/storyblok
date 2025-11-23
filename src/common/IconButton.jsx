'use client';
import React from 'react';
import { IconButton as MuiIconButton, Grid } from '@mui/material';

const styles = {
	iconButton: { height: '100%', py: '4px', px: 0 },
	labelIconButton: { cursor: 'pointer' },
	noPadding: { p: 0 },
};

function IconButton(props) {
	const {
		icon,
		onClick,
		sx = {},
		disabled = false,
		noPadding = false,
		label = null,
		...others
	} = props;

	const button = (
		<MuiIconButton
			sx={[
				styles.iconButton,
				noPadding && styles.noPadding,
				...(Array.isArray(sx) ? sx : [sx]),
			]}
			onClick={onClick}
			disableFocusRipple
			disableTouchRipple
			disableRipple
			disabled={Boolean(disabled)}
			size="small"
			{...others}
		>
			{icon}
		</MuiIconButton>
	);
	return label ? (
		<Grid
			container
			sx={styles.labelIconButton}
			onClick={onClick}
			flexDirection="column"
		>
			{button}
			<Grid>{label}</Grid>
		</Grid>
	) : (
		button
	);
}

export default IconButton;
