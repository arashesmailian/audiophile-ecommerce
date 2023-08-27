import { IProduct } from '@/types/mainData';
import styles from './product-related.module.scss';
import Image from 'next/image';
import Button from '@/components/Shared/Button';

type Props = {
  productData: IProduct;
};

const ProductRelated = ({ productData: { others } }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading_wrapper}>
          <h2 className={styles.heading}>you may also like</h2>
        </div>
        <div className={styles.cards}>
          {others.map((product, index) => {
            return (
              <div className={styles.card} key={index}>
                <div className={styles.card_img}>
                  <Image
                    className={styles.desktop_img}
                    src={product.image.desktop}
                    alt={product.name}
                    fill
                  />
                  <Image
                    className={styles.tablet_img}
                    src={product.image.tablet}
                    alt={product.name}
                    fill
                  />
                  <Image
                    className={styles.mobile_img}
                    src={product.image.mobile}
                    alt={product.name}
                    fill
                  />
                </div>
                <h3 className={styles.card_name}>{product.name}</h3>
                <div>
                  <Button link={product.slug}>see product</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductRelated;
