'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { PhoneIcon, MailIcon } from '../common/svgs';
import { Text } from '@/common';

const styles = {
	container: { mt: '2rem' },
	image: { borderRadius: '50%' },
	iconWrap: { display: 'flex', alignItems: 'center', mt: '.5rem' },
	icon: { mr: { xs: '0.25rem', md: '1rem' } },
};

function Member({ blok }) {
	return (
		<Grid container sx={styles.container} textAlign="center" spacing={2}>
			<Grid size={{ xs: 3, md: 4 }}>
				<Grid
					component="img"
					sx={styles.image}
					src={blok.picture.filename}
					height={{ xs: 80, md: 110 }}
					width={{ xs: 80, md: 110 }}
				/>
			</Grid>
			<Grid size={{ xs: 9, md: 8 }} textAlign="left">
				<Text variant="button">{blok.name}</Text>
				<Text variant="body2">{blok.role}</Text>
				{blok.mobile && (
					<Text sx={styles.iconWrap} variant="body2">
						<PhoneIcon sx={styles.icon} />
						{blok.mobile}
					</Text>
				)}
				{blok.mail && (
					<Text sx={styles.iconWrap} variant="body2">
						<MailIcon sx={styles.icon} />
						{blok.mail}
					</Text>
				)}
			</Grid>
		</Grid>
	);
}

export default Member;
