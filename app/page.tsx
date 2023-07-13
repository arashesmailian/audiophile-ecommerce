import Link from 'next/link'

import {HomeMain} from './page.styled'

export default async function Home() {
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
      </HomeMain>
    </>
  )
}
