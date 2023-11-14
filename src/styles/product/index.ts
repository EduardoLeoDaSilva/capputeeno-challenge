import styled from "styled-components";

export const ProductContainer = styled.main`
    padding: 1.5rem 10rem;
    display: grid;
    grid-template: 30px 2fr/ 1fr 1fr;
    grid-template-areas: "returnAnchor returnAnchor"
                          "image details"
                          "image details";
    gap: 2rem;
    background-color: ${props => props.theme.background};
    font-family: 'Saira', sans-serif;
    
`

export const ReturnContainer = styled.div`
    grid-area: returnAnchor;
`



export const ImageContainer = styled.div`
    grid-area: image;
`

export const DetailsContainer = styled.div`
    grid-area: details;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    h1{
        font-weight: 300;
        font-size: 2rem;
    }

    h2{
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        margin-top: 3.6rem;
    }

    :nth-child(1){
        font-size: 1rem;
        font-weight: 400;
    }

    :nth-child(3){
        font-size: 1.25rem;
        font-weight: 600;
    }

    :nth-child(4){
        font-size: 0.75rem;
        font-weight: 400;
    }
    :nth-child(6){
        font-size: 0.87rem;
        font-weight: 400;
    }


    button{
        background-color: ${props => props.theme["blue-500"]};
        color: ${props => props.theme.white};
        border: none;
        padding: 10px;
        width: 100%;
        text-align: center;
        cursor: pointer;
        svg{
            vertical-align: bottom;
            position: relative;
        }
    }

`
