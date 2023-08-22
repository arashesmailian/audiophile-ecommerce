import Button from '@/components/Shared/Button';
import styles from './index.module.scss';

type Props = {
  data: {
    sectionFour: {
      heading: string;
      button: {
        title: string;
        link: string;
      };
    };
  };
};

const DoubleCard = ({ data: { sectionFour } }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}></div>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <h2 className={styles.heading}>{sectionFour.heading}</h2>
            <div>
              <Button link={sectionFour.button.link} outline>
                {sectionFour.button.title}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubleCard;
