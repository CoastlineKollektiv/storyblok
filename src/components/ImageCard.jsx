'use client';
import React from 'react';
import { StoryblokRichText } from '@storyblok/react';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { Button } from '@/common';
import { Text } from '@/common';

const styles = {
	container: (color) => ({
		p: '2rem',
		bgcolor: color.color,
	}),
	title: {
		lineHeight: 1,
		mb: '3.5rem',
		mt: '1rem',
	},
	outlinedBtn: { '& a': { color: 'common.black' } },
	btn: {
		width: 'inherit',
		mb: '2rem',
		mt: '3rem',
	},
};

function ImageCard({ blok }) {
	const { image, title, bgcolor, isBtnFilled, content, svg } = blok;

	return (
		<Grid
			container
			sx={styles.container(bgcolor)}
			justifyContent="space-around"
			alignItems="flex-start"
		>
			<Grid size={{ xs: 12, md: 5 }} container flexDirection="column">
				{svg.filename && (
					<Grid
						component="img"
						alt={svg.alt}
						src={svg.filename}
						width="fit-content"
						height="fit-content"
					/>
				)}
				{title && (
					<Text type="BigTitle" light sx={styles.title}>
						{title}
					</Text>
				)}
				<StoryblokRichText doc={content} />
				{blok.to && (
					<Button
						sx={[styles.btn, !isBtnFilled && styles.outlinedBtn]}
						variant={isBtnFilled ? 'contained' : 'outlined'}
					>
						<Link href={blok.to.full_slug}>{blok.to.name}</Link>
					</Button>
				)}
			</Grid>
			<Grid size={{ xs: 12, md: 5 }}>
				<Grid
					component="img"
					alt={image.alt}
					width="100%"
					height={{ xs: 200, md: 400 }}
					src={image.filename}
				/>
			</Grid>
		</Grid>
	);
}

export default ImageCard;
