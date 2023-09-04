'use client';
import CheckoutForm from '@/components/Checkout/CheckoutForm';
import NavigateToBack from '@/components/Checkout/Navigator';

import styles from './index.module.scss';
import CheckoutSummary from '@/components/Checkout/CheckoutSummary';
import { useAppDispatch, useAppSelector } from '@/redux/types';
import CheckoutModal from '@/components/Checkout/CheckoutModal';
import Overlay from '@/components/Shared/Overlay';
import { setModalStatus } from '@/redux/reducers/modalSlice';

const Checkout = () => {
  const dispatch = useAppDispatch();
  const showModal = useAppSelector((state) => state.modal.value);

  const overlayEvent = () => {
    dispatch(setModalStatus(false));
    document.body.style.overflow = 'auto';
    document.querySelector('header')!.style.zIndex = '2000';
  };
  return (
    <>
      <main className={styles.checkout_page_main}>
        <NavigateToBack />
        <section className={styles.container}>
          <div className={styles.wrapper}>
            <section className={styles.form_wrapper}>
              <CheckoutForm />
            </section>
            <section className={styles.summary_wrapper}>
              <CheckoutSummary />
            </section>
          </div>
        </section>
      </main>
      {showModal && <CheckoutModal />}
      {showModal && <Overlay event={overlayEvent} maxOverlay />}
    </>
  );
};

export default Checkout;
