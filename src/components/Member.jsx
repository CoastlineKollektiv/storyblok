'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { PhoneIcon, MailIcon } from '../common/svgs';
import { Text } from '@/common';

const styles = {
	image: { borderRadius: '50%' },
	iconWrap: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: { xs: 'center', sm: 'flex-start' },
		mt: '.5rem',
	},
	icon: { mr: { xs: '0.25rem', md: '1rem' } },
};

function Member({ blok }) {
	return (
		<Grid container sx={styles.container} textAlign="center" spacing={2}>
			<Grid size={12} textAlign={'left'}>
				<Text type="Text">{blok.description}</Text>
			</Grid>
			<Grid size={{ xs: 12, sm: 3, md: 4 }}>
				<Grid
					component="img"
					sx={styles.image}
					src={blok.picture.filename}
					height={{ xs: 80, md: 110 }}
					width={{ xs: 80, md: 110 }}
				/>
			</Grid>
			<Grid
				size={{ xs: 12, sm: 9, md: 8 }}
				textAlign={{ xs: 'center', sm: 'left' }}
			>
				<Text type="Text" bold fontType="primary">
					{blok.name}
				</Text>
				<Text type="Text">{blok.role}</Text>
				{blok.mobile && (
					<Text sx={styles.iconWrap} type="Text">
						<PhoneIcon sx={styles.icon} />
						{blok.mobile}
					</Text>
				)}
				{blok.mail && (
					<Text sx={styles.iconWrap} type="Text">
						<MailIcon sx={styles.icon} />
						{blok.mail}
					</Text>
				)}
			</Grid>
		</Grid>
	);
}

export default Member;
