'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import { Carousel } from '@/common';
import { StoryblokRichText } from '@storyblok/react';
import { Text } from '@/common';

const styles = {
	container: (color) => ({
		pb: '2rem',
		pt: '5rem',
		px: '2rem',
		bgcolor: color.color,
	}),
	title: { letterSpacing: '1.5px', mb: '3rem' },
};

function SportsCard({ blok }) {
	const { content, title, images, amenities, bgcolor } = blok;

	const slides = images.map((image) => ({
		key: image.id,
		content: (
			<Grid
				key={image.id}
				component="img"
				alt={image.alt}
				width="100%"
				height={430}
				src={image.filename}
			/>
		),
	}));

	return (
		<Grid
			container
			spacing={2}
			justifyContent="space-around"
			sx={styles.container(bgcolor)}
		>
			<Grid size={{ xs: 12, md: 5.5 }}>
				<Text type="BigTitle" light sx={styles.title}>
					{title}
				</Text>
				<StoryblokRichText doc={content} />
			</Grid>
			<Grid size={{ xs: 12, md: 5.5 }}>
				<Carousel
					key={blok.id}
					slides={slides}
					slidesPerView={1}
					isCircular
					isAutoPlay
				/>
			</Grid>
			{amenities.map((amenity) => (
				<Grid
					size={{ xs: 4, md: 12 / amenities.length }}
					key={amenity._uid}
					container
					spacing={0}
					textAlign="center"
					alignItems="center"
					flexDirection="column"
				>
					<StoryblokComponent blok={amenity} />
				</Grid>
			))}
		</Grid>
	);
}

export default SportsCard;
