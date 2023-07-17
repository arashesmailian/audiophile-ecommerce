import HeaderMenuItemLink from '@/components/Header/HeaderMenuItemLink'
import {StaticImageData} from 'next/image'

import styles from './index.module.scss'

interface Props {
  menuData: {
    title: string
    link: string
    image: {
      src: StaticImageData
      alt: string
    }
  }[]
}

const FooterMenu = ({menuData}: Props) => {
  return (
    <ul className={styles.footer_menu_wrapper}>
      {menuData.map((item, index) => (
        <li key={index}>
          <HeaderMenuItemLink href={item.link}>{item.title}</HeaderMenuItemLink>
        </li>
      ))}
    </ul>
  )
}

export default FooterMenu
