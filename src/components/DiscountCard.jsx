'use client';
import React from 'react';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { Button } from '@/common';
import { Text } from '@/common';

const styles = {
	container: (color) => ({
		bgcolor: color.color,
		px: { xs: '2rem', md: '4rem' },
		py: '2rem',
	}),
	text: { color: 'common.white' },
	btn: { mt: '1rem' },
};

function DiscountCard({ blok }) {
	const { text, to, bgcolor } = blok;
	return (
		<Grid
			container
			sx={styles.container(bgcolor)}
			alignItems="center"
			textAlign="center"
			flexDirection="column"
		>
			<Grid size={{ xs: 11, md: 7 }}>
				<Text type="SubTitle" bold sx={styles.text}>
					{text}
				</Text>
			</Grid>
			{to && (
				<Button sx={[styles.btn]}>
					<Link href={blok.to.full_slug}>{blok.to.name}</Link>
				</Button>
			)}
		</Grid>
	);
}

export default DiscountCard;
