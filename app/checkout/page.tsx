import CheckoutForm from '@/components/Checkout/CheckoutForm';
import NavigateToBack from '@/components/Checkout/Navigator';

import styles from './index.module.scss';
import CheckoutSummary from '@/components/Checkout/CheckoutSummary';

const Checkout = () => {
  return (
    <div className={styles.checkout_page_main}>
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
    </div>
  );
};

export default Checkout;
