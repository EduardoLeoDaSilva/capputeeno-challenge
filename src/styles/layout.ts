import styled from "styled-components";
import searchIcon from '../../public/search.svg'
export const Header = styled.header`
  background-color: ${p => p.theme.white};
  padding: 1.1rem 10rem;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2.6rem;
`

export const Logo = styled.span`
    font-family: 'Saira Stencil One', sans-serif;
    color: ${props => props.theme["gray-200"]};
    font-size: 2.5rem;
    line-height: 2.6rem;
    flex: 1;
`

export const HeaderActionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex: 1;
    background-image: ${searchIcon.src};

`


export const HeaderInput = styled.input`
    border: none;
    border-radius: 0.62rem 0.5rem;
    background-color: ${props => props.theme["gray-100"]};
    padding:  1rem;
    width: 100%;

    &::placeholder{
        background-image: url(${searchIcon.src});
        background-repeat: no-repeat;
        background-position: right;
        background-size: 20px;
    }
`

export const CardButton = styled.button`
    width: 25px;
    height: 25px;
    border: none;
    background-color: transparent;
    position: relative;
`

export const ButtonBadge= styled.div`
    width: 15px;
    height: 15px;
    background-color: ${props => props.theme.red};
    border-radius: 8px;
    position: absolute;
    bottom: -20%;
    right: -20%;
    font-size: 10px;
    line-height: 15px;
    color: ${props => props.theme.white};

    span{
        text-align: center;
        vertical-align: top;
    }
`