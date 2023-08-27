import Image from 'next/image';

import { IProduct } from '@/types/mainData';
import styles from './product-gallery.module.scss';

type Props = {
  productData: IProduct;
};

const ProductGallery = ({ productData: { name, gallery } }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.first_img__wrapper}>
          <Image
            className={styles.desktop_img}
            src={gallery.first.desktop}
            alt={name}
            fill
          />
          <Image
            className={styles.tablet_img}
            src={gallery.first.tablet}
            alt={name}
            fill
          />
          <Image
            className={styles.mobile_img}
            src={gallery.first.mobile}
            alt={name}
            fill
          />
        </div>
        <div className={styles.second_img__wrapper}>
          <Image
            className={styles.desktop_img}
            src={gallery.second.desktop}
            alt={name}
            fill
          />
          <Image
            className={styles.tablet_img}
            src={gallery.second.tablet}
            alt={name}
            fill
          />
          <Image
            className={styles.mobile_img}
            src={gallery.second.mobile}
            alt={name}
            fill
          />
        </div>
        <div className={styles.third_img__wrapper}>
          <Image
            className={styles.desktop_img}
            src={gallery.third.desktop}
            alt={name}
            fill
          />
          <Image
            className={styles.tablet_img}
            src={gallery.third.tablet}
            alt={name}
            fill
          />
          <Image
            className={styles.mobile_img}
            src={gallery.third.mobile}
            alt={name}
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
