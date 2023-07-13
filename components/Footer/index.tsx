'use client'

import {getRootLayoutData} from '@/lib/data'
import {
  FooterContainer,
  LogoWrapper,
  TopBorder,
  TopBorderWrapper,
  FooterTopContent,
  Wrapper,
  Info,
  FooterMidContent,
  InfoWrapper,
} from './index.styled'
import Link from 'next/link'
import Image from 'next/image'
import FooterMenu from './FooterMenu'
import FooterSocial from './FooterSocial'
import {
  CopyRightContent,
  FooterBottomContent,
} from './FooterSocial/index.styled'
import FooterSocialMobile from './FooterSocial/mobile'

const Footer = () => {
  const {
    headerData: {logo, menu},
    footerData,
  } = getRootLayoutData()

  return (
    <FooterContainer>
      <Wrapper>
        <TopBorderWrapper>
          <TopBorder />
        </TopBorderWrapper>
        <FooterTopContent>
          <LogoWrapper>
            <div>
              <Link href={logo.link}>
                <Image src={logo.imageSrc} alt={logo.imageAlt} />
              </Link>
            </div>
          </LogoWrapper>
          <nav>
            <FooterMenu menuData={menu} />
          </nav>
        </FooterTopContent>
        <FooterMidContent>
          <InfoWrapper>
            <Info>{footerData.footerInfo.description}</Info>
          </InfoWrapper>
          <FooterSocial socialsData={footerData.socials} />
        </FooterMidContent>
        <FooterBottomContent>
          <div>
            <CopyRightContent>
              {footerData.footerInfo.copyright}
            </CopyRightContent>
          </div>
          <FooterSocialMobile socialsData={footerData.socials} />
        </FooterBottomContent>
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer
