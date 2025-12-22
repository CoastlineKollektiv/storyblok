import { CheckField } from '@/common/ReactHookForm';
import React from 'react';

const getName = (fieldName, index, name) => {
	if (fieldName && index != undefined) return `${fieldName}.${index}.${name}`;
	if (fieldName) return `${fieldName}.${name}`;
	return name;
};

const FormCheckField = ({ blok, name: fieldName, index }) => {
	const { label, checked, name } = blok;
	return (
		<CheckField
			label={label}
			defaultValue={checked}
			name={getName(fieldName, index, name)}
		/>
	);
};

export default FormCheckField;
