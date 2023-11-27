'use client';

import { HTMLInputTypeAttribute } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from '@/helpers/yupschema';

import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/types';
import { submitForm } from '@/redux/reducers/formSlice';

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
  error?: FieldError | undefined;
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
  const formState = useAppSelector((state) => state.form);
  // const dispatch = useAppDispatch();
  const { register } = useForm({ resolver: yupResolver(schema) });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ ...formState, [e.target.id]: e.target.value });

    // dispatch(submitForm({ ...formState, [e.target.id]: e.target.value }));
  };

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
          onChange={handleOnChange}
          // value={formState[inputName]}
        />
      </div>
    </div>
  );
};

export default InputField;
