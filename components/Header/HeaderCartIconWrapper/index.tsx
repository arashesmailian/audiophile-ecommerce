'use client';

import Image from 'next/image';

import CartMenu from '@/components/cart/CartMenu';
import { setCartModalStatus } from '@/redux/reducers/cartModalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/types';
import { totalCartQuantity } from '@/redux/reducers/cartSlice';
import styles from './index.module.scss';

type Props = {
  data: { icon: any; alt: string };
};

const CartIcon = ({ data: { icon, alt } }: Props) => {
  const dispatch = useAppDispatch();
  const cartModalStatus = useAppSelector((state) => state.cartModal.value);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalCount = useAppSelector(totalCartQuantity);
  const handleOpenCartModal = () => {
    dispatch(setCartModalStatus(true));
  };

  return (
    <div className={styles.cart_wrapper}>
      <button className={styles.cart_button} onClick={handleOpenCartModal}>
        <Image src={icon} alt={alt} />
        <p className={styles.cart_number}>{totalCount || 0}</p>
      </button>
      {cartModalStatus && <CartMenu />}
    </div>
  );
};

export default CartIcon;
