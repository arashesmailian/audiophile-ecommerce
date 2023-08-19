'use client';

import { HTMLInputTypeAttribute } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from '@/helpers/yupschema';

import styles from './index.module.scss';

type Props = {
  inputName:
    | 'email'
    | 'name'
    | 'phone'
    | 'address'
    | 'zipCode'
    | 'city'
    | 'country'
    | 'emoneyNumber'
    | 'emoneyPin';
  error: FieldError | undefined;
  errorMessage: string;
  type: HTMLInputTypeAttribute;
  id: string;
  placeholder: string;
};

const InputField = ({
  inputName,
  error,
  errorMessage,
  type,
  id,
  placeholder,
}: Props) => {
  const { register } = useForm({ resolver: yupResolver(schema) });

  return (
    <div className={styles.form_input}>
      <div className={styles.form_label}>
        <label htmlFor={inputName}>{inputName}</label>
        <div className={styles.form_error}>{error && errorMessage}</div>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(inputName)}
        />
      </div>
    </div>
  );
};

export default InputField;
