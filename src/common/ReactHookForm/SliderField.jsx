'use client';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Slider } from '@mui/material';

function SliderField(props) {
	const {
		required = false,
		name,
		rules = {},
		sx = {},
		step = 1,
		min = 0,
		max = 100,
		...rest
	} = props;

	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			defaultValue=""
			name={name}
			render={({ field }) => (
				<Slider
					max={max}
					min={min}
					step={step}
					valueLabelDisplay="auto"
					{...field}
					{...rest}
					sx={[...(Array.isArray(sx) ? sx : [sx])]}
				/>
			)}
			rules={{
				required: { value: required, message: 'Required' },
				// validate: allValidations,
				...rules,
			}}
		/>
	);
}

export default SliderField;
