import { Button } from '@/common';
import { Grid } from '@mui/material';
import React from 'react';

const DownloadForm = ({ blok }) => {
	const { svg, label, file, themeColor } = blok;

	return (
		<Grid sx={{ textAlign: 'right', pr: '2rem' }}>
			<Button
				sx={{ color: themeColor.color, fontWeight: 700 }}
				href={file.filename}
				variant="text"
				target="_blank"
				startIcon={
					svg && (
						<Grid
							component={'img'}
							src={svg.filename}
							alt={svg.alt}
							width={20}
							height={20}
						/>
					)
				}
				download
			>
				{label}
			</Button>
		</Grid>
	);
};

export default DownloadForm;
