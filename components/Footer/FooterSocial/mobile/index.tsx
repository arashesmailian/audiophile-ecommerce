import Link from 'next/link'
import {SocialMobileContainer} from './index.styled'
import Image from 'next/image'

interface Props {
  socialsData: {
    icon: any
    label: string
    link: string
  }[]
}

const FooterSocialMobile = ({socialsData}: Props) => {
  return (
    <SocialMobileContainer>
      {socialsData.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>
            <Image src={item.icon} alt={item.label} />
          </Link>
        </li>
      ))}
    </SocialMobileContainer>
  )
}

export default FooterSocialMobile
