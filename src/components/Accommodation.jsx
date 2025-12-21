'use client';
import { Text } from '@/common';
import { Grid } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import React from 'react';

const styles = {
	title: (color) => ({ ml: '0.5rem', color }),
};

const Accommodation = ({ blok, color }) => {
	const { svg, title, blocks } = blok;
	return (
		<Grid container spacing={2}>
			<Grid size={12} container alignItems={'center'}>
				{svg.filename && (
					<Grid
						component="img"
						alt={svg.alt}
						src={svg.filename}
						width={25}
						height={25}
					/>
				)}
				<Text type="Title" bold sx={styles.title(color)}>
					{title}
				</Text>
			</Grid>
			{blocks.map((nestedBlok, index) => (
				<Grid size={index === 2 ? 12 : { xs: 6, md: 4 }} key={nestedBlok._uid}>
					<StoryblokComponent blok={nestedBlok} />
				</Grid>
			))}
		</Grid>
	);
};

export default Accommodation;
