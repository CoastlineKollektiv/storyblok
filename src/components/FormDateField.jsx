import { DateField } from '@/common/ReactHookForm';
import React from 'react';

const getName = (fieldName, index, name) => {
	if (fieldName && index) return `${fieldName}.${index}.${name}`;
	if (fieldName) return `${fieldName}.${name}`;
	return name;
};

const FormDateField = ({
	blok,
	name: fieldName,
	index,
	minDate = new Date(),
}) => {
	const { label, name } = blok;
	return (
		<DateField
			label={label}
			disablePast
			minDate={
				name === 'to' ? minDate?.setDate(minDate.getDate() + 1) : undefined
			}
			shouldDisableDate={(date) => date.getDay() !== 6}
			name={getName(fieldName, index, name)}
		/>
	);
};

export default FormDateField;
