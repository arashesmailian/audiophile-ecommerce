import { IProduct } from '@/types/mainData';
import styles from './product-features.module.scss';

type Props = {
  productData: IProduct;
};

const ProductFeatures = ({ productData }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <h2 className={styles.content_header}>features</h2>
          <p className={styles.content_text}>{productData.features}</p>
        </div>
        <div className={styles.list_wrapper}>
          <div>
            <h2 className={styles.content_header}>in the box</h2>
            <ul>
              {productData.includes.map((include, index) => {
                return (
                  <li className={styles.list_item} key={index}>
                    <p className={styles.quantity}>{include.quantity}</p>
                    <p className={styles.quantity_text}>{include.item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
