'use client';
import { useAppDispatch, useAppSelector } from '@/redux/types';
import styles from './cart-menu.module.scss';
import { clearCart, totalCartPrice } from '@/redux/reducers/cartSlice';
import CartItem from '@/components/Shared/CartItem';
import { CURRENCY_SYMBOL } from '@/constants/consts';
import Button from '@/components/Shared/Button';
import { setCartModalStatus } from '@/redux/reducers/cartModalSlice';

const CartMenu = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const total = useAppSelector(totalCartPrice);

  const handleClearCart = () => {
    dispatch(clearCart);
  };

  const handleCartModalClose = () => {
    dispatch(setCartModalStatus(false));
  };
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.heading}>cart ({cartItems.length})</h3>
          <button className={styles.remove_btn} onClick={handleClearCart}>
            Remove all
          </button>
        </div>
        <div className={styles.cart}>
          <div>
            {cartItems.length === 0 && (
              <div className={styles.empty_cart}>Your cart is empty!</div>
            )}
            {cartItems.length > 0 &&
              cartItems.map((item) => {
                return <CartItem key={item.id} data={item} editable />;
              })}
          </div>
        </div>
        <div className={styles.checkout_total_itm}>
          <p className={styles.detail}>total</p>
          <p className={styles.amount}>
            {CURRENCY_SYMBOL} {total.toLocaleString('en-US')}
          </p>
        </div>
        <div>
          <Button event={handleCartModalClose} link="/checkout" block>
            checkout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartMenu;
