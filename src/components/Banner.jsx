'use client';
import React from 'react';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { Button } from '@/common';
import { Text } from '@/common';

const styles = {
	container: (color) => ({
		bgcolor: color.color,
	}),
	title: (textColor) => ({
		color: textColor.color,
		fontSize: { xs: '2.5rem', md: '4rem' },
		fontWeight: 700,
		lineHeight: 1,
	}),
	btn: {
		mb: '2rem',
		mt: '15rem',
	},
	circle: (textColor) => ({
		mt: '4rem',
		mb: '2rem',
		ml: 'auto',
		mr: 'auto',
		borderRadius: '50%',
		bgcolor: textColor.color,
		width: 20,
		height: 20,
	}),
};

function Banner({ blok }) {
	const { image, title, bgcolor, textColor } = blok;
	return (
		<Grid container sx={styles.container(bgcolor)}>
			<Grid size={{ xs: 12, md: 6 }} textAlign="center">
				<Grid sx={styles.circle(textColor)} />
				<Text
					textAlign="center"
					variant="button"
					component="h2"
					sx={styles.title(textColor)}
				>
					{title}
				</Text>
				{blok.to && (
					<Button variant="contained" sx={styles.btn}>
						<Link href={blok.to.full_slug}>{blok.to.name}</Link>
					</Button>
				)}
			</Grid>
			<Grid size={{ xs: 12, md: 6 }}>
				<Grid
					key={image.id}
					component="img"
					alt={image.alt}
					width="100%"
					height="100%"
					src={image.filename}
				/>
			</Grid>
		</Grid>
	);
}

export default Banner;
