import { IProduct } from '@/types/mainData';
import styles from './product-hero.module.scss';
import Image from 'next/image';
import { CURRENCY_SYMBOL, PRODUCT_TYPE } from '@/constants/consts';

type Props = {
  productData: IProduct;
};

const ProductHero = ({ productData }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          <div className={styles.image}>
            <Image
              className={styles.desktop_img}
              src={productData.image.desktop}
              alt={productData.name}
              fill
              priority
            />
            <Image
              className={styles.tablet_img}
              src={productData.image.tablet}
              alt={productData.name}
              fill
              priority
            />
            <Image
              className={styles.mobile_img}
              src={productData.image.mobile}
              alt={productData.name}
              fill
              priority
            />
          </div>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            {productData.new && (
              <p className={styles.subheading}>{PRODUCT_TYPE}</p>
            )}
            <h2 className={styles.heading}>{productData.name}</h2>
            <p className={styles.description}>{productData.description}</p>
            <h3 className={styles.price}>
              {CURRENCY_SYMBOL} {productData.price.toLocaleString('en-US')}
            </h3>
            <div className={styles.order_wrapper}>
              <div>{/* {ProductCounter} */}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
