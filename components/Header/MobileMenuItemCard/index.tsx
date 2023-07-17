import Link from 'next/link'
import Image from 'next/image'
import shadow from 'assets/shadow.png'
import arrow from 'assets/shared/desktop/icon-arrow-right.svg'

import styles from './index.module.scss'

type Props = {
  cardData: {
    title: string
    link: string
    image: {
      src: any
      alt: string
    }
  }
  onClick: any
}

const MobileMenuItemCard = ({cardData, onClick}: Props) => {
  return (
    <Link href={cardData.link}>
      <div className={styles.card_container} onClick={() => onClick(false)}>
        <div className={`${styles.card_image} card-image__class`}>
          <Image src={cardData.image.src} alt={cardData.image.alt} />
        </div>
        <div className={`${styles.card_shadow} card-show__class`}>
          <Image src={shadow} alt='' role='presentation' fill />
        </div>
        <h3 className={styles.card_heading}>{cardData.title}</h3>
        <div className={styles.card_link__wrapper}>
          shop{' '}
          <span>
            <Image src={arrow} alt='right arrow' />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default MobileMenuItemCard
