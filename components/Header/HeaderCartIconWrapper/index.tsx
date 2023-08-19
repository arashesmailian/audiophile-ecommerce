import Image from 'next/image';

import styles from './index.module.scss';
import Link from 'next/link';

type Props = {
  data: { icon: any; alt: string };
};

const CartIcon = ({ data: { icon, alt } }: Props) => {
  let totalProduct = 1;

  return (
    <div className={styles.cart_wrapper}>
      <button className={styles.cart_button}>
        <Link href="checkout">
          <Image src={icon} alt={alt} />
        </Link>
        {totalProduct && (
          <div className={styles.cart_number}>
            <p>{totalProduct}</p>
          </div>
        )}
      </button>
      {/* cart menu */}
    </div>
  );
};

export default CartIcon;
