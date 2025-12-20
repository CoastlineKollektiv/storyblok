'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { Text } from '@/common';

const styles = {
	container: { mt: '2rem' },
};
function ArrivalType({ blok }) {
	const { svg, header, content } = blok;
	return (
		<Grid container sx={styles.container}>
			<Grid size={2}>
				{svg.filename && (
					<Grid
						component="img"
						alt={svg.alt}
						src={svg.filename}
						width="fit-content"
						height="fit-content"
					/>
				)}
			</Grid>
			<Grid size={10}>
				<Text type="Text" fontType="primary" bold>
					{header}
				</Text>
				<Text sx={{ ml: '0.5rem' }}>{content}</Text>
			</Grid>
		</Grid>
	);
}

export default ArrivalType;
