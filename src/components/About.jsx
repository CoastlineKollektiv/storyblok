'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { StoryblokRichText } from '@storyblok/react';
import { Text } from '@/common';

const gridMap = {
	0: 'a',
	1: 'b',
	2: 'c',
	3: 'd',
};

const styles = {
	container: {
		bgcolor: '#F3F1E9',
		py: '2rem',
		px: { xs: '2rem', md: '7rem' },
	},
	title: {
		fontSize: '2.5rem',
		maxWidth: 500,
		lineHeight: 1,
	},
	image: (index) => ({
		gridArea: gridMap[index],
		width: '100%',
		height: '100%',
	}),
};

function About({ blok }) {
	return (
		<Grid
			container
			spacing={2}
			sx={styles.container}
			justifyContent="center"
			textAlign="center"
		>
			<Grid size={{ xs: 12, sm: 8, md: 5 }}>
				<Text type="BigTitle" light sx={styles.title}>
					{blok.title}
				</Text>
			</Grid>
			<Grid size={{ xs: 12, sm: 8 }}>
				<Grid component={StoryblokRichText} doc={blok.content} />
			</Grid>
			<Grid
				size={12}
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gridTemplateRows: 'repeat(2, 1fr)',
					gap: '20px',
					gridTemplateAreas: `
            "a b c"
            "a b d"
            `,
				}}
			>
				{blok.images.map((image, index) => (
					<Grid
						key={image.id}
						sx={styles.image(index)}
						component="img"
						alt={image.alt}
						src={image.filename}
					/>
				))}
			</Grid>
		</Grid>
	);
}

export default About;
