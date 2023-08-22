import Button from '@/components/Shared/Button';
import styles from './index.module.scss';

type Props = {
  data: {
    hero: {
      heading: string;
      subHeading: string;
      description: string;
      button: {
        title: string;
        link: string;
      };
    };
  };
};

const HeroSection = ({ data: { hero } }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.sub_heading}>{hero.subHeading}</p>
          <h1 className={styles.heading}>{hero.heading}</h1>
          <p className={styles.description}>{hero.description}</p>
          <div>
            <Button link={hero.button.link}>{hero.button.title}</Button>
          </div>
        </div>
        <div className={styles.empty}></div>
      </section>
    </section>
  );
};

export default HeroSection;
