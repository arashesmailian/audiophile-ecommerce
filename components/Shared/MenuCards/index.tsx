import { StaticImageData } from 'next/image';

import styles from './index.module.scss';
import MenuCard from '../MenuCard';

type Props = {
  data: {
    menu: {
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
};

const MenuCards = ({ data: { menu } }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {menu.slice(1, 4).map((menuItem, index) => {
          return <MenuCard key={index} data={menuItem} />;
        })}
      </div>
    </section>
  );
};

export default MenuCards;
