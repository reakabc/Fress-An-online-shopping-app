import styled from 'styled-components'
import { BsFillDashCircleFill, BsFillPlusCircleFill, BsFillXCircleFill } from "react-icons/bs"

export const CartWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: #f2f2f2;
padding-top: 80px;
z-index: 1;
`

export const CartContent = styled.div`
width: 60%;
display: flex;
flex-direction: row;
flex-flow: row wrap;

@media ${props => props.theme.mediaQuery.below600}{
    flex-direction: column;
    width: 100%;
    margin: 15px;
}
`

export const ItemList = styled.div`
display: flex;
width: 60%;
flex-direction: column;

@media ${props => props.theme.mediaQuery.below600}{
    width: 100%;
}
`

export const CartItem = styled.div`
margin: 5px;
background: #fff;
display: flex;
flex-direction: row;
`

export const Image = styled.img`
width: 150px;
height: 200px;
padding: 10px;
`

export const Details = styled.div`
padding: 5px;
display: flex;
flex-direction: column;
`

export const Title = styled.h2`
color: grey;
margin-bottom: 5px;
`

export const Form = styled.form`

`

export const Desc = styled.p`
color: grey;
max-lines: 4px;
overflow: none;
`

export const IncreaseQuantity = styled(BsFillPlusCircleFill)`
color: grey;
margin-inline: 10px;
`

export const DecreaseQuantity = styled(BsFillDashCircleFill)`
color: grey;
margin-inline: 10px;
`

export const Span = styled.span`
display: flex;
flex-direction: row;
align-items: center;
`

export const Remove = styled.button`
padding: 5px;
outline: none;
color: white;
background-color: #888888;
border-radius: 2px;
width: 100px;
outline: none;
border: 0;
margin-top: 10px;
`

export const Rate = styled.p`
color: grey;
`

export const CheckOutDetails = styled.div`
margin-top: 5px;
width: 30%;
background: #fff;
padding: 10px;
position: static;
height: 100%;


@media ${props => props.theme.mediaQuery.below600}{
    width: 95%;
}
`

export const Input = styled.input.attrs({type: 'text'})`
padding: 5px;
width: 94%;
border-radius:2px;
border: 0.5px #f2f2f2 solid;
margin-bottom: 5px;
`

export const Amount = styled.p`
color: grey;
`

export const PayButton = styled.button`
width: 100%;
color: white;
padding: 5px;
outline: none;
margin-top: 10px;
background: ${props => props.theme.colors.primary};
`