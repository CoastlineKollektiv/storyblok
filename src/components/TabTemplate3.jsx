import React from 'react';
import { StoryblokRichText } from '@storyblok/react';
import { Grid } from '@mui/material';
import { Carousel } from '@/common';
import { StoryblokComponent } from '@storyblok/react';

const TabTemplate3 = ({ blok }) => {
	const { images, content, amenities } = blok;

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
				<Grid container alignItems="center" sx={{ my: '0.5rem' }}>
					{amenities.map((amenity) => (
						<Grid
							size={{ xs: 12, sm: 6 }}
							key={amenity._uid}
							container
							textAlign="center"
							alignItems="center"
							flexDirection="column"
						>
							<StoryblokComponent blok={amenity} />
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid size={{ xs: 12, md: 6 }}>
				<StoryblokRichText doc={content} />
			</Grid>
		</Grid>
	);
};

export default TabTemplate3;
