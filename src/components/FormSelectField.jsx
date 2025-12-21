import { SelectField } from '@/common/ReactHookForm';
import React from 'react';

const FormSelectField = ({ blok, name: fieldName, index }) => {
	const { label, name, options } = blok;
	return (
		<SelectField
			label={label}
			options={options}
			name={fieldName ? `${fieldName}.${index}.${name}` : name}
		/>
	);
};

export default FormSelectField;
