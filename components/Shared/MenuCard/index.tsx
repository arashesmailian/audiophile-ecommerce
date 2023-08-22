import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';
import shadow from 'public/images/shared/shadow.png';
import arrow from 'public/images/shared/desktop/icon-arrow-right.svg';

type Props = {
  data: {
    title: string;
    link: string;
    active: boolean;
    cta: string;
    image: {
      src: StaticImageData;
      alt: string;
    };
  };
};

const MenuCard = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image className={styles.header_image} src={data.image.src} alt={data.image.alt} />
      </div>
      <div className={styles.shadow}>
        <Image src={shadow} alt="" role="presentation" fill />
      </div>
      <h3 className={styles.heading}>{data.title}</h3>
      <div className={styles.link_wrapper}>
        <Link href={data.link} passHref>
          {data.cta}{' '}
          <span>
            <Image src={arrow} alt="right arrow" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MenuCard;
