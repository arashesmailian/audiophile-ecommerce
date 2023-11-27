import { useEffect } from 'react';
import Image from 'next/image';

import Button from '@/components/Shared/Button';
import CartItem from '@/components/Shared/CartItem';
import { useAppDispatch, useAppSelector } from '@/redux/types';
import { clearCart, totalCartPrice } from '@/redux/reducers/cartSlice';
import { CURRENCY_SYMBOL } from '@/constants/consts';
import { grandTotal, shippingFee, vatFee } from '@/helpers/fees';
import styles from './checkoout-modal.module.scss';
import { setModalStatus } from '@/redux/reducers/modalSlice';

const CheckoutModal = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  //calculate cart fees
  const total = useAppSelector(totalCartPrice);
  const shipping = shippingFee(total);
  const vat = vatFee(total);
  const grand = grandTotal(total, shipping, vat);

  const handleClearCart = () => {
    
    dispatch(clearCart(true));
    dispatch(setModalStatus(false));
  };

  const closeModal = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      dispatch(setModalStatus(false));
      handleStyleRestore();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  });

  //Restore default style when modal is exited
  const handleStyleRestore = () => {
    document.body.style.overflow = 'auto';
    document.querySelector('header')!.style.zIndex = '2000';
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div>
        <div className={styles.icon_wrapper}>
          <Image src="/images/shared/success.svg" alt="" fill />
        </div>
        <h2 className={styles.header}>
          thank you
          <br /> for your order
        </h2>
        <p>you will receive an email confirmation shortly.</p>
        <div className={styles.summary}>
          <div className={styles.details}>
            <div className={styles.cart_item_wrapper}>
              {cartItems
                .map((cartItem) => {
                  return <CartItem key={cartItem.id} data={cartItem} summary />;
                })
                .slice(0, 1)}
            </div>
            {cartItems.length > 1 && (
              <div className={styles.cart_item_more}>
                <p>
                  and {cartItems.length - 1} other item{' '}
                  {cartItems.length > 2 && 's'}
                </p>
              </div>
            )}
          </div>
          <div className={styles.summary_total}>
            <div className={styles.modal_total}>
              <h3>grand total</h3>
              <p>
                {CURRENCY_SYMBOL} {grand.toLocaleString('en-US')}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.btn_wrapper} onClick={handleClearCart}>
          <Button link="/" block event={handleStyleRestore}>
            back to home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutModal;
