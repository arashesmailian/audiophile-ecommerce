import HeaderMenuItemLink from '../HeaderMenuItemLink'

import styles from './index.module.scss'
interface menuItems {
  title: string
  link: string
  image: {
    src: any
    alt: string
  }
}
type Props = {data: menuItems[]}

const HeaderMenuItems = ({data}: Props) => {
  return (
    <nav className={styles.header_menu}>
      <ul className={styles.menu_ul__wrapper}>
        {data.map((item: menuItems, index: number) => (
          <li key={index}>
            <HeaderMenuItemLink href={item.link}>
              {item.title}
            </HeaderMenuItemLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderMenuItems
