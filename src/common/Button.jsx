'use client';
import React from 'react';
import { Button as MuiButton } from '@mui/material';

const styles = {
	buttonStyle: {
		fontSize: '1rem',
		outline: 'none',
		'& a': { color: 'common.white' },
		'&:hover': {
			'&::after': { opacity: 0 },
			outline: 'none',
		},
		'&:active': {
			boxShadow: 2,
			outline: 'none',
		},
		'&:focus': {
			outline: 'none',
		},
	},
};

function Button(props) {
	const {
		children,
		onClick,
		sx = {},
		color = 'primary',
		variant = 'contained',
		...other
	} = props;
	return (
		<MuiButton
			disableFocusRipple
			disableRipple
			disableElevation
			disableTouchRipple
			onClick={onClick}
			sx={[styles.buttonStyle, ...(Array.isArray(sx) ? sx : [sx])]}
			variant={variant}
			{...other}
		>
			{children}
		</MuiButton>
	);
}

export default Button;
