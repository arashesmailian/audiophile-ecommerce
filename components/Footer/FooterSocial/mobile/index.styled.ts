import styled from "styled-components";
import { QUERIES } from "@/constants/mediaQueries";

export const SocialMobileContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 6.5625rem;
  min-height: 4.5rem;

  @media ${QUERIES.tablet} {
    display: none;
  }
`