import DoubleCard from '@/components/Home/DoubleCard';
import HeroSection from '@/components/Home/HeroSection';
import LargeCard from '@/components/Home/LargeCard';
import SingleCard from '@/components/Home/SingleCard';
import CtaSection from '@/components/Shared/CtaSection';
import MenuCards from '@/components/Shared/MenuCards';

import { homeData, menuData, ctaData } from '@/lib/data';
import styles from 'style/home-page/page.module.scss';

export default async function Home() {
  return (
    <main className={styles.new_home_main}>
      <HeroSection data={homeData} />
      <MenuCards data={menuData} />
      <LargeCard data={homeData} />
      <SingleCard data={homeData} />
      <DoubleCard data={homeData} />
      <CtaSection data={ctaData} />
    </main>
  );
}
