import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.scss'
interface Props {
  socialsData: {
    icon: any
    label: string
    link: string
  }[]
}

const FooterSocialMobile = ({socialsData}: Props) => {
  return (
    <ul className={styles.social_mobile__container}>
      {socialsData.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>
            <Image src={item.icon} alt={item.label} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterSocialMobile
