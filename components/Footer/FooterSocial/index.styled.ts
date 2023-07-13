import styled from "styled-components"
import { QUERIES } from "@/constants/mediaQueries"

export const SocialWrapper = styled.div`
    @media ${QUERIES.tablet} {
    display: flex;
    justify-content: flex-end;
  }
`
export const SocialItemsContainer = styled.ul`
  justify-content: space-between;
  width: 6.5625rem;
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
  }
`
export const FooterBottomContent = styled.div`
  @media ${QUERIES.tabletMini} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 5.625rem;
  }

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${QUERIES.tabletMini} {
      align-items: flex-end;
    }
  }
`
export const CopyRightContent = styled.p`
  font-weight: var(--font-weight-400);
  min-height: 4.5rem;
  color: var(--color-sec-500);
  display: flex;

  @media ${QUERIES.tabletMini} {
    align-items: flex-end;
  }
`