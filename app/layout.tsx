import { manrope } from '@/style/fonts';
import Navbar from '@/components/Header/Navbar';
import Footer from '@/components/Footer';
import './global.scss';
import ScrollTop from '@/components/Shared/ScrollTop';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={manrope.className}>
      <head />
      <body>
        <Navbar />
        {/* <main> */}
        {children}
        {/* </main> */}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
