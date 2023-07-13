import { QUERIES } from "@/constants/mediaQueries";
import styled from "styled-components";

export const HeaderMenu = styled.nav`
    flex:3;
    justify-content:center;

    @media screen and (max-width:786px) {
        display:none;
    }
`
export const MenuWrapUL = styled.ul`
    min-width:26.8125rem;
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width: 992px) {
        min-width:22.8125rem;
    }
`