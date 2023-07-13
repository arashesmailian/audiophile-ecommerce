import styled,{ css } from "styled-components";
import { QUERIES } from "@/constants/mediaQueries";

export const HeaderContainer = styled.header<{menuToggle:boolean}>`
    max-width: 100%;
    background-color: var(--color-sec-300);
    padding: 0 2rem;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2000;
    @media screen and (max-width:786px) {
        padding: 0;
    }
    @media screen and (max-width:650px) {
     ${(menuToggle)=>
        menuToggle ? 
        css`
            position:relative;
            top:auto;
            left:auto;
            right:auto;
            z-index:2000;
        `
        :
        css`
            position:sticky;
            top:0;
            right:0;
            left:0;
            z-index:2000;
        `}
    }
`
export const HeaderWrapper = styled.div`
    max-width: 1100px;
    min-height: 6rem;
    margin: var(--center-container);
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid var(--color-sec-400);
    background-color: var(--color-sec-300);
    z-index: 2000;
    position: relative;
    & > * {
        display: flex;
        flex:1 1 0%;
        align-items: center;
        /* justify-content:center; */
    }
    @media screen and (max-width:786px) {
        min-height: 5rem;
        padding: 0 1rem;
    }
`
export const HeaderLogoWrapper = styled.div`
   @media screen and (max-width: 786px) {
        flex: 5;
  }

  @media screen and (max-width: 576px) {
        justify-content: center;
  }
`
export const HeaderLogo = styled.div`
    img{
    @media screen and (max-width: 786px) {
      width: 143px;
      height: auto;
    }
  }
`

