'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderLogoWrapper,
  HeaderWrapper,
} from '@/components/Header/Navbar/index.styled'
import {getRootLayoutData} from 'lib/data'
import MobileHamburgerMenu from '@/components/Header/MobileHamburgerMenu'
import CartIcon from '@/components/Header/HeaderCartIconWrapper'
import {useState} from 'react'
import HeaderMenuItems from '../HeaderMenuItems'

const Navbar = () => {
  const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false)
  const {headerData} = getRootLayoutData()
  const changeMobileMenuHandler = (e: boolean) => setHamburgerMenuStatus(e)
  return (
    <HeaderContainer menuToggle={hamburgerMenuStatus}>
      <HeaderWrapper>
        <MobileHamburgerMenu
          status={hamburgerMenuStatus}
          changeStatus={changeMobileMenuHandler}
          iconData={headerData.mobileMenu}
          menuData={headerData.menu}
        />
        <HeaderLogoWrapper>
          <HeaderLogo>
            <Link href={headerData.logo.link}>
              <Image
                src={headerData.logo.imageSrc}
                alt={headerData.logo.imageAlt}
              />
            </Link>
          </HeaderLogo>
        </HeaderLogoWrapper>
        <HeaderMenuItems data={headerData.menu} />
        <CartIcon data={headerData.cart} />
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Navbar
