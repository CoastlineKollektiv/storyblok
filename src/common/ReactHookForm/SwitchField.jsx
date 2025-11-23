'use client';
import React from 'react';
import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	Switch,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

function SwitchField(props) {
	const {
		required = false,
		name,
		label = '',
		defaultValue = false,
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
					<FormControlLabel
						control={
							<Switch
								{...field}
								checked={Boolean(field.value)}
								color="primary"
								disableFocusRipple
								disableRipple
								disableTouchRipple
								onChange={(e) => {
									field.onChange(e);
									if (onChange) onChange(e);
								}}
								{...rest}
							/>
						}
						label={label}
						labelPlacement="start"
						sx={{ justifyContent: 'center' }}
					/>

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

export default SwitchField;
