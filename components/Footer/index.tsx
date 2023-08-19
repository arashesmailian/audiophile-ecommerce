import Link from 'next/link';
import Image from 'next/image';
import { getRootLayoutData } from '@/lib/data';
import FooterMenu from './FooterMenu';
import FooterSocial from './FooterSocial';
import FooterSocialMobile from './FooterSocial/mobile';

import styles from './index.module.scss';

const Footer = () => {
  const {
    headerData: { logo, menu },
    footerData,
  } = getRootLayoutData();

  return (
    <footer className={styles.footer_container}>
      <div className={styles.wrapper}>
        <div className={styles.top_border__wrapper}>
          <div className={styles.top_border}></div>
        </div>
        <div className={styles.footer_top__content}>
          <div className={styles.logo_wrapper}>
            <div>
              <Link href={logo.link}>
                <Image src={logo.imageSrc} alt={logo.imageAlt} />
              </Link>
            </div>
          </div>
          <nav>
            <FooterMenu menuData={menu} />
          </nav>
        </div>
        <div className={styles.footer_mid__content}>
          <div className={styles.info_wrapper}>
            <p className={styles.info}>{footerData.footerInfo.description}</p>
          </div>
          <FooterSocial socialsData={footerData.socials} />
        </div>
        <div className={styles.footer_bottom__content}>
          <div>
            <p className={styles.copy_right__content}>
              {footerData.footerInfo.copyright}
            </p>
          </div>
          <FooterSocialMobile socialsData={footerData.socials} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
