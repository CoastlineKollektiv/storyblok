'use client';
import React from 'react';
import { StoryblokRichText } from '@storyblok/react';
import { Grid } from '@mui/material';
import { Text } from '@/common';

const styles = {
	container: { p: '2rem' },
	title: { my: '2rem' },
};

function MapCard({ blok }) {
	const { map, title, content } = blok;
	return (
		<Grid container justifyContent="space-around" sx={styles.container}>
			<Grid size={{ xs: 12, md: 5 }}>
				<Grid component="img" alt={map.alt} src={map.filename} width="100%" />
			</Grid>
			<Grid size={{ xs: 12, md: 5 }}>
				<Text type="BigTitle" light sx={styles.title}>
					{title}
				</Text>
				<StoryblokRichText doc={content} />
			</Grid>
		</Grid>
	);
}

export default MapCard;
