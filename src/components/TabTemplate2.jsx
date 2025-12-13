import React from 'react';
import { StoryblokRichText } from '@storyblok/react';
import { Grid } from '@mui/material';
import { Carousel, Text } from '@/common';
import { StoryblokComponent } from '@storyblok/react';

const TabTemplate2 = ({ blok }) => {
	const { images, title, surfTeams } = blok;

	const slides = images.map((image) => ({
		key: image.id,
		content: (
			<Grid
				key={image.id}
				component="img"
				alt={image.alt}
				width="100%"
				height={300}
				src={image.filename}
			/>
		),
	}));

	return (
		<Grid container spacing={5} sx={{ padding: '2rem' }}>
			<Grid size={{ xs: 12, md: 6 }}>
				<Carousel slides={slides} slidesPerView={1} isCircular isAutoPlay />
			</Grid>
			<Grid size={{ xs: 12, md: 6 }}>
				<Text type="title" bold sx={{ fontSize: '2rem', mb: '1.5rem' }}>
					{title}
				</Text>
				<Grid container spacing={2} sx={{ mt: '1rem' }}>
					{surfTeams.map((member) => (
						<Grid key={member._uid} size={12}>
							<StoryblokComponent blok={member} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};
export default TabTemplate2;
