import Image, { StaticImageData } from 'next/image';

import styles from './index.module.scss';

type Props = {
  data: {
    heading: {
      prefix: string;
      highlight: string;
      suffix: string;
    };
    description: string;
    image: {
      src: StaticImageData;
      alt: string;
    };
  };
};

const CtaSection = ({ data: { heading, description, image } }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              {`${heading.prefix} `}
              <span className={styles.heading_highlight}>
                {heading.highlight}
              </span>
              {` ${heading.suffix}`}
            </h2>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <Image src={image.src} alt={image.alt} fill />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
