import Image from 'next/image';

import { IProduct } from '@/types/mainData';
import { PRODUCT_TYPE } from '@/constants/consts';
import Button from '@/components/Shared/Button';
import styles from './product-view.module.scss';

type Props = {
  data: IProduct;
  flip?: boolean;
};

const ProductView = ({ data, flip }: Props) => {
  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper} ${flip ? styles.wrapper_flip : ''}`}>
        <div className={styles.image_wrapper}>
          <div className={styles.image}>
            <Image
              className={styles.desktop_img}
              src={data.image.desktop}
              alt={data.name}
              fill
              priority
            />
            <Image
              className={styles.tablet_img}
              src={data.image.tablet}
              alt={data.name}
              fill
              priority
            />
            <Image
              className={styles.mobile_img}
              src={data.image.mobile}
              alt={data.name}
              fill
              priority
            />
          </div>
        </div>
        <div className={styles.content_wrapper}>
          <div
            className={`${styles.content} ${flip ? styles.content_flip : ''}`}
          >
            {data.new && <p className={styles.subheading}>{PRODUCT_TYPE}</p>}
            <h2 className={styles.heading}>{data.name}</h2>
            <p className={styles.description}>{data.description}</p>
            <div>
              <Button link={`/products/${data.slug}`}>see product</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
