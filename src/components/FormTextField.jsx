import { TextField } from '@/common/ReactHookForm';
import React from 'react';

const getName = (fieldName, index, name) => {
	if (fieldName && index) return `${fieldName}.${index}.${name}`;
	if (fieldName) return `${fieldName}.${name}`;
	return name;
};

const FormTextField = ({ blok, name: fieldName, index }) => {
	const { label, name, type } = blok;
	const otherProps = type !== 'textarea' ? {} : { rows: 2, multiline: true };
	return (
		<TextField
			label={label}
			type={type}
			name={getName(fieldName, index, name)}
			{...otherProps}
		/>
	);
};

export default FormTextField;
