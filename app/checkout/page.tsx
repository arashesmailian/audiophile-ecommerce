import CheckoutForm from '@/components/Checkout/CheckoutForm';
import NavigateToBack from '@/components/Checkout/Navigator';

import styles from './index.module.scss';

const Checkout = () => {
  return (
    <div className={styles.checkout_page_main}>
      <NavigateToBack />
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
