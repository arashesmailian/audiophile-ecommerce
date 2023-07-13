import {JsxElement} from 'typescript'
import MobileMenuItemCard from '../MobileMenuItemCard'
import {
  MobileMenuButton,
  MobileMenuItemContainer,
  MobileNav,
} from './index.styled'
import Image from 'next/image'

interface menuDataType {
  title: string
  link: string
  image: {
    src: any
    alt: string
  }
}

type Props = {
  iconData: {
    hamburgerIcon: any
    closeIcon: any
    alt: string
  }
  status: boolean
  changeStatus: any
  menuData: menuDataType[]
}

const MobileHamburgerMenu = ({
  iconData: {hamburgerIcon, closeIcon, alt},
  menuData,
  status,
  changeStatus,
}: Props) => {
  return (
    <MobileNav>
      <MobileMenuButton onClick={() => changeStatus(!status)}>
        {!status ? (
          <Image src={hamburgerIcon} alt={alt} />
        ) : (
          <Image src={closeIcon} alt={alt} />
        )}
      </MobileMenuButton>
      {status && (
        <MobileMenuItemContainer>
          {menuData.slice(1, 4).map((menuItem, index) => (
            <MobileMenuItemCard
              cardData={menuItem}
              key={index}
              onClick={changeStatus}
            />
          ))}
        </MobileMenuItemContainer>
      )}
    </MobileNav>
  )
}

export default MobileHamburgerMenu
