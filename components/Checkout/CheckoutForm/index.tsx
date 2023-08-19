'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from '@/helpers/yupschema';
import InputField from '../InputField';
import PaymentInput from '../PaymentInput';
import CashMethodWrapper from '../CashMethodWrapper';
import styles from './index.module.scss';

type Props = {};

const CheckoutForm = (props: Props) => {
  const [paymentMethod, setPaymentMethod] = useState('emoney');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    const layoutMain = document.querySelector('main');
    if (layoutMain) layoutMain.style.backgroundColor = 'hsl(0, 0%, 89%)';

    return () => {
      if (layoutMain) layoutMain.style.backgroundColor = '';
    };
  }, []); //styling background color only in '/checkout' route

  return (
    <form id="checkoutForm" className={styles.form}>
      <h2 className={styles.heading}>checkout</h2>
      <div>
        <h3 className={styles.section_heading}>billing details</h3>
        <div className={styles.input_wrapper}>
          <div className={styles.form_break}>
            <InputField
              inputName="name"
              error={errors.name}
              id="name"
              type="text"
              placeholder="Alexei Ward"
              errorMessage="Enter your name!"
            />
          </div>
          <div className={styles.form_break}>
            <InputField
              inputName="email"
              type="email"
              error={errors.email}
              id="email"
              placeholder="alexei@mail.com"
              errorMessage="Wrong email format!"
            />
          </div>
          <div className={styles.form_break}>
            <InputField
              inputName="phone"
              type="text"
              error={errors.phone}
              id="phone"
              placeholder="+1 202-555-0136"
              errorMessage="Wrong phone format!"
            />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.section_heading}>shipping info</div>
        <div className={styles.input_wrapper}>
          <InputField
            inputName="address"
            type="text"
            id="address"
            error={errors.address}
            placeholder="1137 Williams Avenue"
            errorMessage="Enter your address!"
          />
          <div className={styles.form_break}>
            <InputField
              inputName="zipCode"
              type="text"
              id="zipCode"
              error={errors.zipCode}
              errorMessage="Enter your Zip Code!"
              placeholder="10001"
            />
          </div>
          <div className={styles.form_break}>
            <InputField
              inputName="city"
              id="city"
              type="text"
              error={errors.city}
              errorMessage="Enter your city!"
              placeholder="new york"
            />
          </div>
          <div className={styles.form_break}>
            <InputField
              inputName="country"
              id="country"
              type="text"
              error={errors.country}
              errorMessage="Enter your country!"
              placeholder="united states"
            />
          </div>
        </div>
        <div className={styles.input_wrapper}>
          <div className={styles.section_heading}>payment details</div>
          <div className={styles.payment_wrapper}>
            <div className={styles.payment_heading}>payment method</div>
            <div>
              <PaymentInput
                id="emoney"
                name="paymentMethod"
                payment={paymentMethod}
                setPayment={setPaymentMethod}
                type="radio"
                value="e-Money"
              />
              <PaymentInput
                id="cash"
                name="paymentMethod"
                payment={paymentMethod}
                setPayment={setPaymentMethod}
                type="radio"
                value="Cash on Delivery"
              />
            </div>
          </div>
        </div>
        {paymentMethod === 'emoney' ? (
          <div className={styles.emoney_wrapper}>
            <div className={styles.input_wrapper}>
              <div className={styles.form_break}>
                <InputField
                  id="emoneyNumber"
                  type="text"
                  inputName="emoneyNumber"
                  error={errors.emoneyNumber}
                  errorMessage="Enter your e-Money Number!"
                  placeholder="238521993"
                />
              </div>
              <div className={styles.form_break}>
                <InputField
                  id="emoneyPin"
                  type="text"
                  inputName="emoneyPin"
                  error={errors.emoneyPin}
                  errorMessage="Enter your e-Money Pin!"
                  placeholder="6891"
                />
              </div>
            </div>
          </div>
        ) : null}
        {paymentMethod === 'cash' && <CashMethodWrapper />}
        {/* (
          <CashMethodWrapper />
        )} */}
      </div>
    </form>
  );
};

export default CheckoutForm;
