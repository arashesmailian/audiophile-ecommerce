'use client';
import Image from 'next/image';

import { scrollToTop } from '@/helpers/scrollToTop';
import topArrow from 'public/images/shared/icons8-collapse-arrow-32.png';
import styles from './index.module.scss';

const ScrollTop = () => {
  const handleClick = () => {
    scrollToTop();
  };
  return (
    <button className={styles.scroll_btn} onClick={handleClick}>
      <Image src={topArrow} alt="top arrow" />
    </button>
  );
};

export default ScrollTop;
