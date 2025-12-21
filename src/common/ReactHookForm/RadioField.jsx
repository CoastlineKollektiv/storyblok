'use client';
import React from 'react';
import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

function RadioField(props) {
	const {
		required = false,
		name,
		defaultValue = null,
		rules = {},
		row = true,
		options,
		groupLabel = '',
		helperText = '',
		...rest
	} = props;

	const { validate, ...restRules } = rules;

	const {
		formState: { errors },
		control,
	} = useFormContext();
	return (
		<Controller
			control={control}
			defaultValue={defaultValue}
			name={name}
			render={({ field }) => (
				<FormControl
					error={!!errors[name]}
					fullWidth
					required={required}
					size="small"
					variant="outlined"
				>
					{groupLabel ? (
						<FormLabel id="demo-radio-buttons-group-label">
							{groupLabel}
						</FormLabel>
					) : null}
					<RadioGroup row={row} {...field} {...rest}>
						{options.map((item) => {
							return typeof item === 'string' ? (
								<FormControlLabel
									key={item}
									control={<Radio color="primary" size="small" />}
									label={item}
									value={item}
								/>
							) : (
								<FormControlLabel
									key={item.label}
									control={<Radio color="primary" size="small" />}
									disabled={item.disabled}
									label={item.label}
									value={item.value}
								/>
							);
						})}
					</RadioGroup>
					{errors[name] || helperText ? (
						<FormHelperText error={Boolean(errors[name])}>
							{errors[name] ? errors[name].message : helperText}
						</FormHelperText>
					) : null}
				</FormControl>
			)}
			rules={{
				required: { value: required, message: 'Required' },
				validate,
				...restRules,
			}}
		/>
	);
}

export default RadioField;
