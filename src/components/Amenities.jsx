'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import { Text } from '@/common';

const styles = {
	container: { p: '2rem' },
	title: { mb: '2rem' },
};

function Amenities({ blok }) {
	const { title, note, amenities } = blok;
	return (
		<Grid container sx={styles.container} alignItems={'flex-start'} spacing={2}>
			{title && (
				<Grid size={12}>
					<Text type="BigTitle" light sx={styles.title}>
						{title}
					</Text>
				</Grid>
			)}
			{amenities.map((amenity) => (
				<Grid
					size={{ xs: 4, md: 12 / amenities.length }}
					key={amenity._uid}
					container
					spacing={0}
					textAlign="center"
					alignItems="center"
					flexDirection="column"
					justifyContent="center"
				>
					<StoryblokComponent blok={amenity} />
				</Grid>
			))}
			<Grid size={{ xs: 10, md: 6, lg: 4 }}>
				<Text type="body">{note}</Text>
			</Grid>
		</Grid>
	);
}

export default Amenities;
