'use client';
import React from 'react';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { LocationIcon } from '@/common/svgs';
import { Button } from '@/common';
import { Text } from '@/common';

const styles = {
	container: (image) => ({
		backgroundImage: `url( ${image})`,
		height: '100vh',
		backgroundSize: 'cover',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		flexDirection: 'column',
	}),
	discountValue: { fontSize: { xs: '1.5rem', md: '2.5rem' }, lineHeight: 1 },
	title: {
		fontSize: { xs: '40px', md: '60px' },
		letterSpacing: 10,
		ml: { xs: '1rem', md: '3rem' },
		width: { xs: '100%', md: '60%' },
		textTransform: 'uppercase',
		color: 'common.white',
	},
	label: {
		textTransform: 'uppercase',
		fontSize: { xs: '1rem', md: '1.5rem' },
	},
	btn: {
		bgcolor: 'common.black',
		color: 'common.white',
		fontWeight: 'bold',
		ml: { xs: '1rem', md: '3rem' },
		mt: '4rem',
		px: '8rem',
	},
	location: {
		color: 'common.white',
		margin: 0,
		ml: { xs: '1rem', md: '3rem' },
		mb: '10px',
		fontSize: '1.25rem',
	},
	caption: {
		mt: '100px',
		ml: { xs: '1rem', md: '3rem' },
		color: 'common.white',
		textTransform: 'none',
	},
	discount: (color) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		bgcolor: color,
		width: { xs: '5rem', md: '8rem' },
		fontSize: '1.5rem',
		fontWeight: 'bold',
		textAlign: 'center',
		overflowWrap: 'break-word',
		height: { xs: '5rem', md: '8rem' },
		position: 'absolute',
		borderRadius: '50%',
		top: 150,
		right: { xs: 50, md: 80 },
	}),
	footerTitle: { mb: '6rem' },
	icon: { color: 'common.white', m: 0 },
	bottomSpace: { mb: { xs: '4rem', md: '8rem' } },
};

function Hero({ blok }) {
	const { bgImage } = blok;
	return (
		<Grid
			container
			textAlign="center"
			sx={styles.container(bgImage.filename)}
			spacing={2}
		>
			<Grid size={{ xs: 11, sm: 10, md: 8, lg: 6 }} textAlign="left">
				{blok.location && (
					<Text type="Title" bold sx={styles.location}>
						<LocationIcon sx={styles.icon} /> {blok.location}
					</Text>
				)}
				<Text
					type="BigTitle"
					bold
					sx={[styles.title, !blok.booking && styles.footerTitle]}
				>
					{blok.title}
				</Text>
				{blok.caption && (
					<Text type="BigTitle" bold sx={styles.caption}>
						{blok.caption}
					</Text>
				)}
				{blok.booking && (
					<Button
						sx={[
							styles.btn,
							(!blok.banner || !blok.caption) && styles.bottomSpace,
						]}
					>
						<Link href={blok.booking.full_slug}>{blok.booking.name}</Link>
					</Button>
				)}
			</Grid>
			{blok.discount && (
				<Grid sx={styles.discount(blok.themeColor.color)}>
					<Text
						bold
						type="Title"
						fontType="secondary"
						sx={styles.discountValue}
					>
						{blok.discount}%
					</Text>
					<Text bold type="Title" fontType="secondary" sx={styles.label}>
						{blok.discountLabel}
					</Text>
				</Grid>
			)}
			{blok.banner && (
				<Grid
					size={12}
					sx={{
						bgcolor: blok.themeColor.color,
						height: 60,
						textAlign: 'center',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text bold type="Text">
						{blok.banner}
					</Text>
				</Grid>
			)}
		</Grid>
	);
}

export default Hero;
