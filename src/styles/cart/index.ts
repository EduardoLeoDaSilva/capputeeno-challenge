import styled from "styled-components";

export const CartContainer = styled.div`
    padding: 1.5rem 10rem;
    display: grid;
    grid-template: 40px 2fr/ 2fr 1fr;
    grid-template-areas: "header details"
                          "products details"
                          "products details";
    gap: 2rem;
    background-color: ${props => props.theme.background};
    font-family: 'Saira', sans-serif;
    
`

export const HeaderContainer = styled.div`
    grid-area: header;
    display: flex;
    flex-direction: column;
`



export const ProductsListContainer = styled.div`
    grid-area: products;
    margin-top: 1.5rem;
`


export const ProductCard= styled.div`
    background-color: ${props => props.theme.white};
    max-width: 736px;
    max-height: 211px;
    border-radius: 8px;
    height: 100%;
    width: 100%;
    display: flex;
    gap: 1rem;

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    :nth-child(1){

        button{
            background-color: transparent;
            color: red;
            border: none;
        }
    }

    
    :nth-child(3){

        button{
            background-color: ${props => props.theme["gray-100"]};
            color: ${props => props.theme["gray-200"]};
            border: 1px solid ${props => props.theme["border"]};
            border-radius: 8px;
            padding: 0.5rem;
            width: 65px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    p{
        font-size: 0.75rem;
        overflow-y: auto;
    }
`

export const DetailsContainer = styled.div`
    grid-area: details;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: ${props => props.theme.white};
    padding: 1.5rem 1rem;
    border-radius: 8px;

    h2{
        color: ${props => props.theme["gray-300"]};
        font-weight: 600;
        font-size: 1.25rem;
    }

    ul{
        list-style-type: none;
        margin-top: 17rem;
        
        li{
            text-transform: uppercase;
            text-decoration: underline;
            color: ${props => props.theme["gray-300"]};
            font-weight: 500;
            font-size: 0.875rem;
        }
    }


`

export const SummaryGrid = styled.div`
    display: grid;
    grid-template: 1fr 1fr 20px 1fr 1fr / 2fr 1fr;
    font-family: 'Saira', sans-serif;
    justify-content: space-between;
    
    span{
        justify-self: end;
    }
    


    label:last-of-type, span:last-of-type{
        font-weight: 700;
    }


    div{
        grid-column: 1 / span 2;
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme["gray-150"]};
    }

    button{
        grid-column: 1 / span 2;
        font-family: 'Saira', sans-serif;
        text-transform: uppercase;
        background-color: ${props => props.theme["green-100"]};
        border: none;
        border-radius: 8px;
        padding: 0.5rem;
        color: ${props => props.theme.white};
    }

    ::se



`
