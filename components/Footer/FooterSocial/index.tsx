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

const FooterSocial = ({socialsData}: Props) => {
  return (
    <div className={styles.social_wrapper}>
      <ul className={styles.social_items__container}>
        {socialsData.map((item, index) => (
          <li key={index}>
            <Link href={item.link} aria-label={item.label}>
              <Image src={item.icon} alt={item.label} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterSocial
