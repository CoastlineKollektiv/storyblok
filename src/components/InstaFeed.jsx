'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { InstagramIcon } from '@/common/svgs';
import { Text } from '@/common';

const styles = {
	container: { alignItems: 'center' },
	icon: { mr: '1rem' },
};

function InstaFeed({ blok }) {
	return (
		<Grid container sx={styles.container}>
			<Grid
				size={12}
				sx={{
					py: '1rem',
					px: '1rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<InstagramIcon sx={styles.icon} />
				<Text type={'Text'} fontType="primary" bold>
					{blok.header}
				</Text>
			</Grid>
			<Grid size={12} container>
				{blok.images.map((image) => (
					<Grid
						size="grow"
						key={image.id}
						component="img"
						alt={image.alt}
						src={image.filename}
					/>
				))}
			</Grid>
		</Grid>
	);
}

export default InstaFeed;
