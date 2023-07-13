import { QUERIES } from "@/constants/mediaQueries"
import { styled } from "styled-components"

export const MobileNav = styled.nav`
    display:none;
    @media screen and (max-width:786px) {
        display:flex;
    }
`
export const MobileMenuButton = styled.button`
    border:none;
    background-color:transparent;
    cursor:pointer;
    img{
        width:1.2rem;
        height:auto;
    }
`
export const MobileMenuItemContainer = styled.div`
    position:absolute;
    background-color:var(--color-sec-200);
    width:100%;
    min-height:100%;
    top:0;
    left:0;
    right:0;
    margin-top:5rem;
    padding: 1rem;
    display: flex;
    flex-direction:column;
    border-radius:0rem 0rem 0.5rem 0.5rem;
    gap:1rem;

    & > * {
      flex:1;
      margin: 4.25rem auto 0rem auto;
    }
    @media screen and (min-width: 650px){
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        min-height:10rem;
    }
`