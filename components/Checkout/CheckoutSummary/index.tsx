import styles from './index.module.scss';

const CheckoutSummary = () => {
  const cartItem = [];

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>summary</h2>
        <div className={styles.wrapper}>
          <div>
            {!cartItem.length && (
              <div className={styles.empty_cart}>Your cart is empty!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutSummary;
