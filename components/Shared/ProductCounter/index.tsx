'use client';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useAppSelector } from '@/redux/types';
import { IProduct } from '@/types/mainData';
import styles from './counter.module.scss';
import { useDispatch } from 'react-redux';
import { addItemToCart, decreaseQuantity } from '@/redux/reducers/cartSlice';
import { PRODUCT_CTA } from '@/constants/consts';

type Props = {
  custom?: boolean;
  data: IProduct;
  preventDelete?: boolean;
};

const ProductCounter = ({ custom, data, preventDelete }: Props) => {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const singleCartItem = cartItems?.find((item) => item.id === data.id);

  const handleDecrease = () => {
    if (preventDelete) {
      if (singleCartItem!.cartQuantity > 1) dispatch(decreaseQuantity(data));
    } else {
      dispatch(decreaseQuantity(data));
    }
  };
  const handleIncrease = () => {
    dispatch(addItemToCart(data));
  };

  useEffect(() => {
    if (custom) {
      const counterInputs =
        document.querySelectorAll<HTMLElement>('#productNumber');
      counterInputs.forEach((counterInput) => {
        counterInput.style.height = '2rem';
        counterInput.style.width = '2rem';
      });
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <button
            className={styles.button}
            onClick={handleDecrease}
            disabled={!singleCartItem}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div>
          <label htmlFor="order">Enter Number of product(s)</label>
          <input
            type="number"
            name="productNumber"
            id="productNumber"
            value={
              singleCartItem ? singleCartItem.cartQuantity : data.cartQuantity
            }
            readOnly
          />
        </div>
        <div>
          <button className={styles.button} onClick={handleIncrease}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <button className={styles.counter_btn} onClick={handleIncrease}>
        {PRODUCT_CTA}
      </button>
    </div>
  );
};

export default ProductCounter;
