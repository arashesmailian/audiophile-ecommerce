import { StaticImageData } from 'next/image';

import styles from './index.module.scss';
import HomeCategoriesItem from '../../Shared/MenuCard';

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
  }[];
};

const HomeCategories = ({ data: menu }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {menu.slice(1, 4).map((menuItem, index) => {
          return <HomeCategoriesItem key={index} data={menuItem} />;
        })}
      </div>
    </section>
  );
};

export default HomeCategories;
