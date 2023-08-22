import Image, { StaticImageData } from 'next/image';

import styles from './index.module.scss';
import Button from '@/components/Shared/Button';

type Props = {
  data: {
    sectionTwo: {
      heading: string;
      description: string;
      button: {
        title: string;
        link: string;
      };
      image: {
        mobile: StaticImageData;
        tablet: StaticImageData;
        desktop: StaticImageData;
        alt: string;
      };
    };
  };
};

const LargeCard = ({ data: { sectionTwo } }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.image}>
            <Image
              className={styles._desktop}
              src={sectionTwo.image.desktop}
              alt={sectionTwo.image.alt}
            />
            <Image
              className={styles._mobile}
              src={sectionTwo.image.mobile}
              alt={sectionTwo.image.alt}
            />
          </div>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <h2 className={styles.heading}>{sectionTwo.heading}</h2>
            <p className={styles.description}>{sectionTwo.description}</p>
            <div>
              <Button link={sectionTwo.button.link} dark>
                {sectionTwo.button.title}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeCard;
