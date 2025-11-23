'use client';
import React from 'react';
import { StoryblokRichText } from '@storyblok/react';
import { Grid } from '@mui/material';

const styles = {
	mainPageContent: { p: '4rem' },
};

function Content({ blok }) {
	return (
		<Grid sx={[blok.mainPageContent && styles.mainPageContent]}>
			<StoryblokRichText doc={blok.text} />
		</Grid>
	);
}

export default Content;
