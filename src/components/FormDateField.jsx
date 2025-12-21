import { DateField } from '@/common/ReactHookForm';
import React from 'react';

const FormDateField = ({
	blok,
	name: fieldName,
	index,
	minDate = new Date(),
}) => {
	console.log(minDate);
	const { label, name } = blok;
	return (
		<DateField
			label={label}
			disablePast
			minDate={
				name === 'to' ? minDate?.setDate(minDate.getDate() + 1) : undefined
			}
			shouldDisableDate={(date) => date.getDay() !== 6}
			name={fieldName ? `${fieldName}.${index}.${name}` : name}
		/>
	);
};

export default FormDateField;
