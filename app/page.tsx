import Link from 'next/link'

import {getCategories} from '@/lib/cms'

import {HomeMain} from './page.styled'

export default async function Home() {
  const categories = getCategories()
  return (
    <>
      <HomeMain>
        <div>
          <h1>Hi! Welcome.</h1>
        </div>
        <div>
          <Link href='/blog'>Checkout my Blog</Link>
        </div>
        <div>
          <Link href='/contact'>Contact</Link>
        </div>
        {categories.map((item, index) => (
          <div key={index}>
            <Link href={`/${item}`}>{item}</Link>
          </div>
        ))}
      </HomeMain>
    </>
  )
}
