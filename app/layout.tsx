import { manrope } from '@/style/fonts';
import Navbar from '@/components/Header/Navbar';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/Shared/ScrollTop';
import ReduxProvider from '@/components/Shared/ReduxProvider';
import './global.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={manrope.className}>
      <head />
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
