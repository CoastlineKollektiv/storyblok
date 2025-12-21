import { CheckField } from '@/common/ReactHookForm';
import React from 'react';

const FormCheckField = ({ blok, name: fieldName, index }) => {
	const { label, checked, name } = blok;
	return (
		<CheckField
			label={label}
			defaultValue={checked}
			name={fieldName ? `${fieldName}.${index}.${name}` : name}
		/>
	);
};

export default FormCheckField;
