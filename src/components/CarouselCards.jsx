'use client';
import React from 'react';
import Link from 'next/link';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Carousel, Button, Text } from '@/common';

const styles = {
	container: {
		px: { xs: '1rem', sm: '2rem', md: '4rem', lg: '8rem' },
		py: '2rem',
	},
	header: { fontSize: '1.75rem' },
	img: (color) => ({ width: '100%', height: color ? 230 : 380 }),
	circleImg: { height: 160, width: 160, borderRadius: '50%' },
	carousel: { pt: '2rem' },
	card: (cardColour) => ({ p: '10px', bgcolor: cardColour || 'trasnparent' }),
	cardHeader: { width: '10rem', my: '1rem' },
	caption: { my: '1rem' },
};

function CarouselCards({ blok }) {
	const { cards, header, content, to } = blok;
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

	const slides = cards.map((card) => {
		return {
			key: card._uid,
			content: (
				<Grid
					container
					textAlign="center"
					justifyContent="center"
					sx={styles.card(card.cardColour?.color)}
				>
					<Grid size={12}>
						<Grid
							sx={[
								styles.img(card.cardColour?.color),
								card.isImageCircle && styles.circleImg,
							]}
							component="img"
							alt={card.image.alt}
							src={card.image.filename}
						/>
					</Grid>
					<Grid size={12} justifyItems="center">
						<Text sx={styles.cardHeader} variant="h6">
							{card.header}
						</Text>
					</Grid>
					<Grid size={12}>
						<Text variant="body">{card.content}</Text>
					</Grid>
					<Grid size={12}>
						<Text sx={styles.caption} variant="subtitle2">
							{card.caption}
						</Text>
					</Grid>
				</Grid>
			),
		};
	});

	return (
		<Grid
			container
			sx={styles.container}
			textAlign="center"
			spacing={2}
			justifyContent="center"
		>
			<Grid size={{ xs: 12, md: 6 }}>
				<Text variant="button" sx={styles.header}>
					{header}
				</Text>
			</Grid>
			<Grid size={{ xs: 12, md: 8 }}>
				<Text sx={styles.content}>{content}</Text>
			</Grid>
			<Grid size={{ xs: 12, md: 8 }}>
				{to && (
					<Button variant="contained" sx={[styles.btn]}>
						<Link href={to.full_slug}>{to.name}</Link>
					</Button>
				)}
			</Grid>
			<Grid size={12}>
				<Carousel
					key={blok.id}
					buttonType={isSmallScreen ? 'onImage' : 'side'}
					sx={styles.carousel}
					slides={slides}
					slidesPerView={isSmallScreen ? 1 : 3}
					isCircular
				/>
			</Grid>
		</Grid>
	);
}

export default CarouselCards;
