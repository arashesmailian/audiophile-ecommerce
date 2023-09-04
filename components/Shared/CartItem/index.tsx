import { IProduct } from '@/types/mainData';

import styles from './cart-item.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { CURRENCY_SYMBOL } from '@/constants/consts';
import ProductCounter from '../ProductCounter';


type Props = {
  summary?: boolean;
  editable?: boolean;
  data: IProduct;
};

const CartItem = ({ summary, editable, data }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Link href="/headphones">
        <div className={styles.image}>
          <Image src={data.cartIcon} alt={data.name} fill priority />
        </div>
      </Link>
      <div className={styles.details}>
        <h4>{data.shortName}</h4>
        <p>
          {CURRENCY_SYMBOL} {data.subTotal.toLocaleString('en-US')}
        </p>
      </div>
      <div className={`${styles.counter} ${summary ? styles.summary : ''}`}>
        <ProductCounter data={data} />
      </div>
      <div className={`${styles.number} ${editable ? styles.editable : ''}`}>
        <p>x{data.cartQuantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
