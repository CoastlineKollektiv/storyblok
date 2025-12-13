'use client';
import React from 'react';
import { StoryblokComponent, StoryblokRichText } from '@storyblok/react';
import { Grid } from '@mui/material';
import { Text } from '@/common';

const styles = {
	container: {
		bgcolor: '#f3f1e9',
		p: { xs: '1rem', md: '1rem 2rem' },
	},
};

function Team({ blok }) {
	const { description } = blok;
	return (
		<Grid container sx={styles.container}>
			<Grid size={12}>
				<Text variant="h4">{blok.header}</Text>
			</Grid>
			<Grid size={7}>
				<StoryblokRichText doc={description} />
			</Grid>
			{blok.members.map((member) => (
				<Grid key={member._uid} size={{ xs: 12, sm: 6 }}>
					<StoryblokComponent blok={member} height={200} width="100%" />
				</Grid>
			))}
		</Grid>
	);
}

export default Team;
