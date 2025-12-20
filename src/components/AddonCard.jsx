'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import { Text } from '@/common';

const styles = {
	conatiner: { px: '4rem', py: '2rem' },
	info: { display: 'flex', alignItems: 'center' },
	infoIcon: { mr: '1rem' },
};

function AddonCard({ blok }) {
	const { title, infoSvg, note, addons } = blok;
	return (
		<Grid container sx={styles.conatiner} spacing={2}>
			<Grid size={12}>
				<Text type="BigTitle" light>
					{title}
				</Text>
			</Grid>
			{addons.map((amenity) => (
				<Grid
					key={amenity._uid}
					size={{ xs: 12, md: 12 / addons.length }}
					container
					spacing={1}
					textAlign="center"
					alignItems="center"
					justifyContent={'space-between'}
					flexDirection="column"
				>
					<StoryblokComponent blok={amenity} height={80} width={80} />
				</Grid>
			))}
			<Grid size={{ xs: 12, md: 4 }}>
				<Text sx={styles.info} fontType="secondary">
					{infoSvg.filename && (
						<Grid
							component="img"
							alt={infoSvg.alt}
							src={infoSvg.filename}
							sx={styles.infoIcon}
							width="fit-content"
							height="fit-content"
						/>
					)}
					{note}
				</Text>
			</Grid>
		</Grid>
	);
}

export default AddonCard;
