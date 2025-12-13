import React from 'react';
import { StoryblokRichText } from '@storyblok/react';
import { Grid } from '@mui/material';
import { Carousel, Text } from '@/common';

const TabTemplate1 = ({ blok }) => {
	const { images, content, captionIcon, captionTitle, captionText } = blok;

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
					{captionIcon?.filename && (
						<Grid
							component="img"
							alt={captionIcon.alt}
							src={captionIcon.filename}
							width={22}
							height={22}
						/>
					)}
					<Text type="title" bold sx={{ ml: '0.5rem' }}>
						{captionTitle}
					</Text>
				</Grid>
				<Text>{captionText}</Text>
			</Grid>
			<Grid size={{ xs: 12, md: 6 }}>
				<StoryblokRichText doc={content} />
			</Grid>
		</Grid>
	);
};
export default TabTemplate1;
