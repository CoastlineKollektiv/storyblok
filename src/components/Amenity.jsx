'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { Text } from '@/common';

const styles = {
	svgWrap: (color, height, width) => ({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: color.color ? 60 : height,
		height: color.color ? 60 : width,
		borderRadius: '50%',
		bgcolor: color.color,
		mb: '1rem',
	}),
	title: { textTransform: 'uppercase' },
};

function Amenity({ blok, height = 40, width = 40 }) {
	const { text, title, svg, bgcolor, price, title2 } = blok;
	const image = (
		<Grid
			component="img"
			alt={svg.alt}
			width={width}
			height={height}
			src={svg.filename}
		/>
	);

	return (
		<React.Fragment>
			{bgcolor ? (
				<Grid sx={styles.svgWrap(bgcolor, height, width)}>{image}</Grid>
			) : (
				image
			)}
			{title && (
				<Text type="Text" bold sx={styles.title}>
					{title}
				</Text>
			)}
			{title2 && (
				<Text type="Text" light fontType="primary">
					{title2}
				</Text>
			)}
			{text && <Text type="Text">{text}</Text>}
			{price && (
				<Text type="Text" bold>
					{price}
				</Text>
			)}
		</React.Fragment>
	);
}

export default Amenity;
