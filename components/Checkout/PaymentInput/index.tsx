'use client';

import {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
  useEffect,
} from 'react';
import styles from './index.module.scss';

type Props = {
  type: HTMLInputTypeAttribute;
  name: string;
  id: string;
  value: string;
  payment: string;
  setPayment: Dispatch<SetStateAction<string>>;
};

const PaymentInput = ({
  type,
  name,
  id,
  value,
  payment,
  setPayment,
}: Props) => {
  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.id);
  };

  useEffect(() => {
    const thisInput = document.querySelector(`#${id}`);
    if (payment === id) thisInput?.setAttribute('checked', 'checked');
  }, [payment, id]);

  return (
    <div className={styles.payment_input}>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={handleClick}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default PaymentInput;
