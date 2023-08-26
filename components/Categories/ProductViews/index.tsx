import ProductView from '../ProductView';

import { IProduct } from '@/types/mainData';
import styles from './product-views.module.scss';

type Props = {
  data: IProduct[];
};

const ProductViews = ({ data }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {data.map((product: IProduct, index: number) => {
          return (
            <ProductView
              key={index}
              data={product}
              flip={index % 2 !== 0 ? true : false}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductViews;
