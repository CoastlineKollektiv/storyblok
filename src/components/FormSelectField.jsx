import { SelectField } from '@/common/ReactHookForm';
import React from 'react';

const getName = (fieldName, index, name) => {
	if (fieldName && index) return `${fieldName}.${index}.${name}`;
	if (fieldName) return `${fieldName}.${name}`;
	return name;
};

const FormSelectField = ({ blok, name: fieldName, index }) => {
	const { label, name, options } = blok;
	return (
		<SelectField
			label={label}
			hasSelect
			options={options}
			name={getName(fieldName, index, name)}
		/>
	);
};

export default FormSelectField;
