'use client';
import { useRouter } from 'next/navigation';

import styles from './index.module.scss';

type Props = {};

const NavigateToBack = (props: Props) => {
  const router = useRouter();

  const handleBackNavigation = () => {
    router.back();
  };

  return (
    <section className={styles.navigator_container}>
      <div className={styles.navigator_wrapper}>
        <button
          type="button"
          className={styles.navigator_btn}
          onClick={handleBackNavigation}
        >
          go back
        </button>
      </div>
    </section>
  );
};

export default NavigateToBack;
