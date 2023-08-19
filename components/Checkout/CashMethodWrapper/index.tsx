import Image from 'next/image';
import styles from './index.module.scss';

const CashMethodWrapper = () => {
  return (
    <div className={styles.cashOnWrapper}>
      <div className={styles.cashOnImage}>
        <Image
          src="/images/shared/payondelivery.png"
          alt="pay on delivery"
          fill
        />
      </div>
      <div className={styles.cashOnContent}>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </div>
    </div>
  );
};

export default CashMethodWrapper;
