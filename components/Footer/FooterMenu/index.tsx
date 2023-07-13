import HeaderMenuItemLink from '@/components/Header/HeaderMenuItemLink'
import {FooterMenuWrapper} from './index.styled'
import {StaticImageData} from 'next/image'

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
    <FooterMenuWrapper>
      {menuData.map((item, index) => (
        <li key={index}>
          <HeaderMenuItemLink href={item.link}>{item.title}</HeaderMenuItemLink>
        </li>
      ))}
    </FooterMenuWrapper>
  )
}

export default FooterMenu
