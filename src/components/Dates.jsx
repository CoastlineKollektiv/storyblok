'use client';
import { Text } from '@/common';
import { Grid } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const styles = {
	title: (color) => ({ ml: '0.5rem', color }),
};

const Dates = ({ blok, color }) => {
	const { svg, title, blocks, description } = blok;
	const { watch } = useFormContext();
	const from = watch('from');

	return (
		<Grid container spacing={2}>
			<Grid size={12} container alignItems={'center'}>
				{svg.filename && (
					<Grid
						component="img"
						alt={svg.alt}
						src={svg.filename}
						width={25}
						height={25}
					/>
				)}
				<Text type="Title" bold sx={styles.title(color)}>
					{title}
				</Text>
			</Grid>
			{blocks.map((nestedBlok, index) => (
				<Grid size={6} key={nestedBlok._uid}>
					<StoryblokComponent blok={nestedBlok} minDate={from} />
				</Grid>
			))}
			<Grid size={12}>
				<Text type="Text">{description}</Text>
			</Grid>
		</Grid>
	);
};

export default Dates;
