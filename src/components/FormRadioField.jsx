import { RadioField } from '@/common/ReactHookForm';
import React from 'react';

const getName = (fieldName, index, name) => {
	if (fieldName && index) return `${fieldName}.${index}.${name}`;
	if (fieldName) return `${fieldName}.${name}`;
	return name;
};

const FormRadioField = ({ blok, name: fieldName, index }) => {
	const { label, name, options, groupLabel } = blok;
	return (
		<RadioField
			label={label}
			groupLabel={groupLabel || ''}
			name={getName(fieldName, index, name)}
			options={options}
		/>
	);
};

export default FormRadioField;
