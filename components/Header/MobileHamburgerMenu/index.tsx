import MobileMenuItemCard from '../MobileMenuItemCard'
import Image from 'next/image'

import styles from './index.module.scss'

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
    <nav className={styles.mobile_nav}>
      <button
        className={styles.mobile_menu__button}
        onClick={() => changeStatus(!status)}
      >
        {!status ? (
          <Image src={hamburgerIcon} alt={alt} />
        ) : (
          <Image src={closeIcon} alt={alt} />
        )}
      </button>
      {status && (
        <div className={styles.mobile_menu_item__container}>
          {menuData.slice(1, 4).map((menuItem, index) => (
            <MobileMenuItemCard
              cardData={menuItem}
              key={index}
              onClick={changeStatus}
            />
          ))}
        </div>
      )}
    </nav>
  )
}

export default MobileHamburgerMenu
