'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import { Text } from '@/common';

const styles = {
	conatiner: { p: { xs: '2rem', md: '2rem 6rem' } },
	image: { mt: '5rem' },
};

function Arrival({ blok }) {
	const { header, image, types } = blok;
	return (
		<Grid container spacing={2} sx={styles.conatiner}>
			<Grid size={{ xs: 12, md: 6 }}>
				<Text variant="h3">{header}</Text>
				{types.map((type) => (
					<StoryblokComponent key={type._uid} blok={type} />
				))}
			</Grid>
			<Grid size={{ xs: 12, md: 6 }}>
				{image.filename && (
					<Grid
						component="img"
						sx={styles.image}
						alt={image.alt}
						src={image.filename}
						width={{ xs: '100%', md: 'fit-content' }}
						height={{ xs: '100%', md: 'fit-content' }}
					/>
				)}
			</Grid>
		</Grid>
	);
}

export default Arrival;
