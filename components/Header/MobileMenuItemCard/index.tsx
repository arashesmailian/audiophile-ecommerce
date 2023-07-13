import Link from 'next/link'
import Image from 'next/image'
import {
  CardContainer,
  CardHeading,
  CardImage,
  CardLinkWrap,
  CardShadow,
} from './index.styled'
import shadow from 'assets/shadow.png'
import arrow from 'assets/shared/desktop/icon-arrow-right.svg'

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
      <CardContainer onClick={() => onClick(false)}>
        <CardImage className='card-image'>
          <Image src={cardData.image.src} alt={cardData.image.alt} />
        </CardImage>
        <CardShadow className='card-show'>
          <Image src={shadow} alt='' role='presentation' fill />
        </CardShadow>
        <CardHeading>{cardData.title}</CardHeading>
        <CardLinkWrap>
          <Link href={cardData.link}>
            shop{' '}
            <span>
              <Image src={arrow} alt='right arrow' />
            </span>
          </Link>
        </CardLinkWrap>
      </CardContainer>
    </Link>
  )
}

export default MobileMenuItemCard
