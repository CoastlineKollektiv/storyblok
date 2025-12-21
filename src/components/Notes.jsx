import React from 'react';
import { Text } from '@/common';
import { Grid } from '@mui/material';
import { StoryblokComponent } from '@storyblok/react';

const styles = {
	title: (color) => ({ ml: '0.5rem', color }),
};

const Notes = ({ blok, color }) => {
	const { title, svg, blocks } = blok;
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
			{blocks.map((nestedBlok) => (
				<Grid size={12} key={nestedBlok._uid}>
					<StoryblokComponent blok={nestedBlok} />
				</Grid>
			))}
		</Grid>
	);
};

export default Notes;
