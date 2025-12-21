import { TextField } from '@/common/ReactHookForm';
import React from 'react';

const FormTextField = ({ blok, name: fieldName, index }) => {
	const { label, name, type } = blok;
	const otherProps = type !== 'textarea' ? {} : { rows: 2, multiline: true };
	return (
		<TextField
			label={label}
			type={type}
			name={fieldName ? `${fieldName}.${index}.${name}` : name}
			{...otherProps}
		/>
	);
};

export default FormTextField;
