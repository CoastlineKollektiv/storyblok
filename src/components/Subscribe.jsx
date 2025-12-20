'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { CheckField, TextField } from '@/common/ReactHookForm';
import { Button } from '@/common';
import { Text } from '@/common';

const styles = {
	container: (color) => ({
		alignItems: 'center',
		p: { xs: '2rem', md: '2rem 4rem' },
		bgcolor: color,
	}),
	fields: { bgcolor: 'white', '& filedset': { borderColor: 'common.black' } },
	icon: { mr: '1rem' },
	header: { fontWeight: 'bold' },
	btn: { width: '100%' },
};

function Subscribe({ blok }) {
	const { svg } = blok;
	const { handleSubmit, watch, reset, getValues, ...methods } = useForm({
		mode: 'onTouched',
		defaultValues: { username: '', email: '', terms: false },
	});

	const submitForm = (values) => {
		// eslint-disable-next-line no-console
		console.log('values: ' + values);
	};

	return (
		<FormProvider {...methods}>
			<Grid container sx={styles.container(blok.color.color)} spacing={2}>
				<Grid size={{ xs: 12, md: 4 }}>
					{svg.filename && (
						<Grid
							component="img"
							alt={svg.alt}
							src={svg.filename}
							width="fit-content"
							height="fit-content"
						/>
					)}
					<Text type="BigTitle" light>
						{blok.title}
					</Text>
					<Text type="Text">{blok.caption}</Text>
				</Grid>
				<Grid
					size={{ xs: 12, md: 6 }}
					offset={{ xs: 0, md: 1 }}
					container
					spacing={2}
				>
					<Grid size={12}>
						<TextField sx={styles.fields} label={blok.field1} name="username" />
					</Grid>
					<Grid size={12}>
						<TextField sx={styles.fields} label={blok.field2} name="email" />
					</Grid>
					<Grid size={12}>
						<CheckField label={blok.termsAndConditions} name="terms" />
					</Grid>
					<Grid size={12}>
						<Button sx={styles.btn} onClick={handleSubmit(submitForm)}>
							{blok.subscibeBtnText}
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</FormProvider>
	);
}

export default Subscribe;
