import { Text } from '@/common';
import { Grid } from '@mui/material';
import React from 'react';

const SurfTeam = ({ blok }) => {
	const { name, text, img } = blok;
	return (
		<Grid container spacing={2}>
			<Grid size={3}>
				<Grid
					sx={{ borderRadius: '50%', overflow: 'hidden' }}
					component="img"
					alt={img.alt}
					width={80}
					height={80}
					src={img.filename}
				/>
			</Grid>
			<Grid size={9}>
				<Text bold sx={{ mb: '0.5rem' }}>
					{name}
				</Text>
				<Text>{text}</Text>
			</Grid>
		</Grid>
	);
};

export default SurfTeam;
