'use client';
import { useAppDispatch, useAppSelector } from '@/redux/types';
import CartItem from '@/components/Shared/CartItem';
import { totalCartPrice } from '@/redux/reducers/cartSlice';
import { shippingFee, vatFee, grandTotal } from '@/helpers/fees';
import { CURRENCY_SYMBOL } from '@/constants/consts';
import styles from './index.module.scss';
import { setModalStatus } from '@/redux/reducers/modalSlice';

const CheckoutSummary = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  //cart total price
  const total = useAppSelector(totalCartPrice);

  //calculate fees
  const shipping = shippingFee(total);
  const vat = vatFee(total);
  const grand = grandTotal(total, shipping, vat);

  const handleActivateModal = () => {
    dispatch(setModalStatus(true));
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>summary</h2>
        <div className={styles.wrapper}>
          <div>
            {cartItems.length == 0 && (
              <div className={styles.empty_cart}>Your cart is empty!</div>
            )}
            {cartItems.length > 0 &&
              cartItems?.map((cartItem) => {
                return <CartItem key={cartItem.id} data={cartItem} summary />;
              })}
          </div>
        </div>
        {cartItems.length > 0 && (
          <div className={styles.checkout_total}>
            <div className={styles.item}>
              <p className={styles.detail}>total</p>
              <p className={styles.amount}>
                {CURRENCY_SYMBOL} {total.toLocaleString('en-US')}
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.detail}>shipping</p>
              <p className={styles.amount}>
                {CURRENCY_SYMBOL} {shipping}
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.detail}>vat (included)</p>
              <p className={styles.amount}>
                {CURRENCY_SYMBOL} {vat.toLocaleString('en-US')}
              </p>
            </div>
            <div className={styles.grand}>
              <p className={styles.detail}>grand total</p>
              <p className={styles.total_amount}>
                {CURRENCY_SYMBOL} {grand.toLocaleString('en-US')}
              </p>
            </div>
            <div className={styles.item}>
              <button
                className={styles.btn}
                type="submit"
                onClick={handleActivateModal}
              >
                continue & pay
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutSummary;
