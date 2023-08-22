import Button from '@/components/Shared/Button';
import styles from './index.module.scss';

type Props = {
  data: {
    sectionThree: {
      heading: string;
      button: {
        title: string;
        link: string;
      };
    };
  };
};

const SingleCard = ({ data: { sectionThree } }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <div>
            <h2 className={styles.heading}>{sectionThree.heading}</h2>
            <div>
              <Button link={sectionThree.button.link} dark outline>
                {sectionThree.button.title}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
