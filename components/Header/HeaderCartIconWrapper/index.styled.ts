import { styled } from "styled-components"

export const CartWrapper = styled.div`
    justify-content:center;

    img{
        cursor:pointer;
    }
    
  @media screen and (max-width: 786px) {
        justify-content:flex-start;
  }
`
export const CartButton = styled.button`
    cursor:pointer;
    border:none;
    background-color:transparent;
    position:relative;
`
export const CartNumber = styled.div`
    width: 1.1rem;
    height: 1.1rem;
    background-color:var(--color-pry-100);
    color:var(--color-sec-200);
    position:absolute;
    border:none;
    border-radius:100%;
    margin:-2rem 0rem 0rem 1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:10;
    p{
        font-size:0.6rem;
        line-height:0;
        font-weight:var(--font-pry-100);
        letter-spacing:0;
    }
`
