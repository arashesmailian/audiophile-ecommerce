import {manrope} from '@/style/fonts'
import Navbar from '@/components/Header/Navbar'
import Footer from '@/components/Footer'
import './global.scss'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' className={manrope.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
