'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { Text } from '@/common';

const styles = {
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		mt: '1rem',
	},
	header: { fontWeight: 'bold', fontSize: '1.5rem' },
	caption: { fontSiz1: '1.25rem', my: '1rem' },
	image: { verticalAlign: 'bottom' },
};

function Certificates({ blok }) {
	const { title, caption, image } = blok;
	return (
		<Grid container sx={styles.container}>
			<Grid size={7}>
				<Text variant="button" component="div" sx={styles.header}>
					{title}
				</Text>
				<Text variant="body2" sx={styles.caption}>
					{caption}
				</Text>
			</Grid>
			<Grid size={12}>
				<Grid
					component="img"
					width="100%"
					sx={styles.image}
					alt={image.alt}
					src={image.filename}
				/>
			</Grid>
		</Grid>
	);
}

export default Certificates;
