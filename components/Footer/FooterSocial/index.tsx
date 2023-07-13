import Link from 'next/link'
import {SocialItemsContainer, SocialWrapper} from './index.styled'
import Image from 'next/image'

interface Props {
  socialsData: {
    icon: any
    label: string
    link: string
  }[]
}

const FooterSocial = ({socialsData}: Props) => {
  return (
    <SocialWrapper>
      <SocialItemsContainer>
        {socialsData.map((item, index) => (
          <li key={index}>
            <Link href={item.link} aria-label={item.label}>
              <Image src={item.icon} alt={item.label} />
            </Link>
          </li>
        ))}
      </SocialItemsContainer>
    </SocialWrapper>
  )
}

export default FooterSocial
