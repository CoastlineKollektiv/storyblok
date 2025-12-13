'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { Text } from '@/common';

const styles = {
	svgWrap: (color) => ({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 60,
		height: 60,
		borderRadius: '50%',
		bgcolor: color.color,
	}),
	text: { mt: '1rem' },
	title2: { fontSize: '1rem' },
};

function Amenity({ blok }) {
	const { text, title, svg, bgcolor, price, title2 } = blok;

	const image = (
		<Grid
			component="img"
			alt={svg.alt}
			width={40}
			height={40}
			src={svg.filename}
		/>
	);

	return (
		<React.Fragment>
			{bgcolor ? <Grid sx={styles.svgWrap(bgcolor)}>{image}</Grid> : image}
			{title && (
				<Text variant="h4" id="title">
					{title}
				</Text>
			)}
			{title2 && (
				<Text variant="h6" sx={styles.title2}>
					{title2}
				</Text>
			)}
			{text && (
				<Text variant="body" sx={styles.text}>
					{text}
				</Text>
			)}
			{price && <Text variant="h6">{price}</Text>}
		</React.Fragment>
	);
}

export default Amenity;
