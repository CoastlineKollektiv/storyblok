import { RadioField } from '@/common/ReactHookForm';
import React from 'react';

const FormRadioField = ({ blok, name: fieldName, index }) => {
	const { label, name, options, groupLabel } = blok;
	return (
		<RadioField
			label={label}
			groupLabel={groupLabel || ''}
			name={fieldName ? `${fieldName}.${index}.${name}` : name}
			options={options}
		/>
	);
};

export default FormRadioField;
