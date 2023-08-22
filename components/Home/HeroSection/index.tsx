import Button from '@/components/Shared/Button';
import styles from './index.module.scss';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.sub_heading}>new product</p>
          <h1 className={styles.heading}>XX99 mark II headphones</h1>
          <p className={styles.description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div>
            <Button link="/headphone">see product</Button>
          </div>
        </div>
        <div className={styles.empty}></div>
      </section>
    </section>
  );
};

export default HeroSection;
