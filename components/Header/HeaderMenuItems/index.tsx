import {HeaderMenu, MenuWrapUL} from './index.styled'
import HeaderMenuItemLink from '../HeaderMenuItemLink'

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
    <HeaderMenu>
      <MenuWrapUL>
        {data.map((item: menuItems, index: number) => (
          <li key={index}>
            <HeaderMenuItemLink href={item.link}>
              {item.title}
            </HeaderMenuItemLink>
          </li>
        ))}
      </MenuWrapUL>
    </HeaderMenu>
  )
}

export default HeaderMenuItems
