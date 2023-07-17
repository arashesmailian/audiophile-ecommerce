'use client'

import Image from 'next/image'
import Link from 'next/link'
import {getRootLayoutData} from 'lib/data'
import MobileHamburgerMenu from '@/components/Header/MobileHamburgerMenu'
import CartIcon from '@/components/Header/HeaderCartIconWrapper'
import {useState} from 'react'
import HeaderMenuItems from '../HeaderMenuItems'

import styles from './index.module.scss'

const Navbar = () => {
  const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false)
  const {headerData} = getRootLayoutData()
  const changeMobileMenuHandler = (e: boolean) => setHamburgerMenuStatus(e)
  return (
    <header
      className={styles.header_container}
      data-menu-toggle={hamburgerMenuStatus}
    >
      <div className={styles.header_wrapper}>
        <MobileHamburgerMenu
          status={hamburgerMenuStatus}
          changeStatus={changeMobileMenuHandler}
          iconData={headerData.mobileMenu}
          menuData={headerData.menu}
        />
        <div className={styles.header_logo__wrapper}>
          <div className={styles.header_logo}>
            <Link href={headerData.logo.link}>
              <Image
                src={headerData.logo.imageSrc}
                alt={headerData.logo.imageAlt}
              />
            </Link>
          </div>
        </div>
        <HeaderMenuItems data={headerData.menu} />
        <CartIcon data={headerData.cart} />
      </div>
    </header>
  )
}

export default Navbar
