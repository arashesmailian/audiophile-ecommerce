import styled from "styled-components";
import { QUERIES } from "@/constants/mediaQueries";

export const FooterContainer = styled.footer`
    max-width:100%;
    background-color:var(--color-sec-300);
    padding: 0 1rem;

    @media ${QUERIES.tabletMini} {
        padding:0 2rem;
    }
`
export const Wrapper = styled.div`
    max-width:var(--max-container);
    min-height:40.875rem;
    margin:var(--center-container);

    @media ${QUERIES.tabletMini}{
        min-height: 25rem;
    }    
    @media ${QUERIES.tablet} {
        min-height:22.8125rem;
    }

    & > * {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

        @media ${QUERIES.tabletMini} {
            align-items:flex-start;
        }
    }
`
export const TopBorderWrapper = styled.div`
    @media ${QUERIES.tabletMini} {
        flex-direction:column;
        align-items:flex-start;
    }
`
export const TopBorder = styled.div`
    height: 0.25rem;
    width: 6.3125rem;
    background-color:var(--color-pry-100);
`

export const FooterTopContent = styled.div`
    @media ${QUERIES.tablet} {
        flex-direction:row;
        align-items:flex-end;
        justify-content:space-between;
    }

    & > * {
        display:flex;
        align-items:center;
    }
`
export const LogoWrapper = styled.div`
    min-height:6.25rem;

    @media ${QUERIES.tabletMini} {
        min-height:5.75rem;
        align-items:flex-end;
    }
`
export const FooterMidContent = styled.div`
  @media ${QUERIES.tablet} {
    flex-direction: row;
    align-items: flex-end;

    & > * {
      flex: 1;
    }
  }
`
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 12.5rem;

  @media ${QUERIES.tabletMini} {
    min-height: 6.25rem;
  }

  @media ${QUERIES.tablet} {
    min-height: 8.25rem;
    align-items: flex-end;
  }
`
export const Info = styled.p`
  text-align: center;
  color: var(--color-sec-500);

  @media ${QUERIES.tabletMini} {
    text-align: left;
  }
`
