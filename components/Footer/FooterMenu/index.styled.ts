import styled from "styled-components"
import { QUERIES } from "@/constants/mediaQueries"

export const FooterMenuWrapper = styled.ul`
    text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 11.875rem;

  @media ${QUERIES.tabletMini} {
    flex-direction: row;
    min-height: 4.5625rem;
    width: 26.6875rem;
    justify-content: space-between;
  }
  @media ${QUERIES.tablet} {
    min-height: 0rem;
  }
`
