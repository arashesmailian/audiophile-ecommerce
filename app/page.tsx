import HeroSection from '@/components/Home/HeroSection';
import Link from 'next/link';

import styles from 'style/home-page/page.module.scss';

export default async function Home() {
  return (
    <>
      <main className={styles.home_main}>
        {/* <div>
          <h1>Hi! Welcome.</h1>
        </div>
        <div>
          <Link href="/blog">Checkout my Blog</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div> */}
        <HeroSection />
      </main>
    </>
  );
}
