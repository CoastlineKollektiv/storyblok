'use client';
import React from 'react';
import { StoryblokComponent } from '@storyblok/react';
import { Grid } from '@mui/material';
import { Text } from '@/common';

const styles = {
	container: {
		bgcolor: '#f3f1e9',
		p: { xs: '1rem', md: '1rem 4rem' },
	},
};

function Team({ blok }) {
	return (
		<Grid container sx={styles.container} spacing={{ xs: 1, md: 3 }}>
			<Grid size={12}>
				<Text type="BigTitle" light>
					{blok.header}
				</Text>
			</Grid>
			{blok.members.map((member) => (
				<Grid key={member._uid} size={{ xs: 12, sm: 6 }}>
					<StoryblokComponent blok={member} />
				</Grid>
			))}
		</Grid>
	);
}

export default Team;
