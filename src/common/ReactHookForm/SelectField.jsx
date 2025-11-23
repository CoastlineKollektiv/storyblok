'use client';
import React from 'react';
import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

function SelectField(props) {
	const {
		required = false,
		name,
		label = '',
		defaultValue = 'Select',
		hasSelect = false,
		options,
		rules = {},
		helperText = '',
		onChange = null,
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
					<InputLabel>{label}</InputLabel>
					<Select
						{...field}
						label={label}
						name={name}
						native
						onChange={(e) => {
							field.onChange(e);
							if (onChange) onChange(e);
						}}
						{...rest}
					>
						{hasSelect ? <option value="Select">Select</option> : null}
						{options.map((item) => {
							if (typeof item === 'string')
								return (
									<option key={item} value={item}>
										{item}
									</option>
								);
							return (
								<option key={item.key} value={item.key}>
									{item.value}
								</option>
							);
						})}
					</Select>
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

export default SelectField;
