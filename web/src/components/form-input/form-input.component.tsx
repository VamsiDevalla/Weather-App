import React, { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import './form-input.styles.scss';

interface FormProperties extends ComponentPropsWithoutRef<'input'> {
  handleChange: (error: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
}

const FormInput = ({ handleChange, id = 'customInput', label, ...otherProperties }: FormProperties): JSX.Element => {
  return (
    <div className='group'>
      <input id={id} className='form-input' onChange={handleChange} {...otherProperties} />
      {label ? (
        <label htmlFor={id} className={`${otherProperties.value ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : undefined}
    </div>
  );
};

export default FormInput;
