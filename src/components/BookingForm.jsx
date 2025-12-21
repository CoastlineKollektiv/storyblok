'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import React from 'react';
import { Button, Text } from '@/common';
import { StoryblokComponent } from '@storyblok/react';
import { DateField, WeekPicker } from '@/common/ReactHookForm';

const styles = {
	btn: { width: '20%', ml: 'auto' },
	container: (color) => ({
		bgcolor: color,
		mb: '1rem',
		mt: '7rem',
		mx: '1rem',
		p: { xs: '1rem', md: '1rem 3rem' },
	}),
};

const BookingForm = ({ blok }) => {
	const { blocks, title, submitText, themeColor, bgcolor } = blok;
	const { handleSubmit, ...methods } = useForm({
		mode: 'onTouched',
		defaultValues: { persons: [{ name: '' }] },
	});
	const submitForm = (values) => {
		// eslint-disable-next-line no-console
		console.log('values: ' + values);
	};
	return (
		<FormProvider {...methods}>
			<Grid container sx={styles.container(bgcolor.color)} spacing={2}>
				<Grid size={12}>
					<Text type="BigTitle" bold sx={{ color: themeColor.color }}>
						{title}
					</Text>
				</Grid>
				{blocks.map((nestedBlok) => (
					<Grid size={12} key={nestedBlok._uid}>
						<StoryblokComponent blok={nestedBlok} color={themeColor.color} />
					</Grid>
				))}
				<Grid size={12} sx={{ textAlign: 'right', py: '2rem', pr: '2rem' }}>
					<Button
						sx={styles.btn}
						onClick={handleSubmit(submitForm)}
						variant="contained"
					>
						{submitText}
					</Button>
				</Grid>
			</Grid>
		</FormProvider>
	);
};

export default BookingForm;
