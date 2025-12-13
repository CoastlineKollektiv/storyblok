'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { StoryblokRichText } from '@storyblok/react';
import Link from 'next/link';
import { Button } from '@/common';
import { Text } from '@/common';

const styles = {
	container: { p: { xs: '2rem', md: '2rem 6rem' }, bgcolor: '#F3F1E9' },
	header: { mb: '1.5rem', textTransform: 'uppercase' },
	rightText: { mt: '6rem' },
	btn: {
		mt: '1rem',
		'& a': { color: 'common.black' },
		'&:hover': { bgcolor: 'transparent' },
	},
	text: {
		width: '100%',
		color: 'common.white',
		fontWeight: 700,
		letterSpacing: 4,
		lineHeight: '20px',
	},
	discount: (color) => ({
		textAlign: 'center',
		py: '0.5rem',
		bgcolor: color.color,
	}),
};

function FlexibleTravel({ blok }) {
	const { header, to, leftContent, rightContent, discountText, discountColor } =
		blok;

	return (
		<React.Fragment>
			<Grid
				container
				sx={styles.container}
				spacing={2}
				justifyContent="space-between"
			>
				<Grid size={{ xs: 12, md: 5.5 }}>
					<Text variant="h3" sx={styles.header}>
						{header}
					</Text>
					<StoryblokRichText doc={leftContent} />
					{to && (
						<Button variant="outlined" sx={styles.btn}>
							<Link href={to.full_slug}>{to.name}</Link>
						</Button>
					)}
				</Grid>
				<Grid size={{ xs: 12, md: 5.5 }}>
					<Grid sx={styles.rightText}>
						<StoryblokRichText doc={rightContent} />
					</Grid>
				</Grid>
			</Grid>
			<Grid container sx={styles.discount(discountColor)}>
				<Text variant="body" sx={styles.text}>
					{discountText}
				</Text>
			</Grid>
		</React.Fragment>
	);
}

export default FlexibleTravel;
