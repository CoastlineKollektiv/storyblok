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
	caption: { my: '1rem' },
	image: { verticalAlign: 'bottom' },
};

function Certificates({ blok }) {
	const { title, caption, image } = blok;
	return (
		<Grid container sx={styles.container}>
			<Grid size={{ xs: 11, md: 9, lg: 6 }}>
				<Text type={'Title'} bold>
					{title}
				</Text>
				<Text type={'Text'} sx={styles.caption}>
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
