import styles from './categories-hero.module.scss';

type Props = {
  data: string;
};

const CategoriesHero = ({ data }: Props) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>{data}</h1>
    </section>
  );
};

export default CategoriesHero;
