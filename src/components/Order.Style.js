import styled from 'styled-components'

export const OrderListWrapper = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 80px;
align-items: center;
z-index: 1;
`

export const OrderList = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30px;
width: 60%;

@media ${props => props.theme.mediaQuery.below600}{
    width: 100%;
}
`

export const Order = styled.div`
background-color: #fff;
margin: 5px;
display: flex;
flex-direction: row;
`


export const Image = styled.img`
width: 20%;
height: 100px;
padding: 10px;
`

export const Details = styled.div`
width: 60%;
position: relative;
padding: 5px;
display: flex;
flex-direction: column;
`

export const Title = styled.h2`
color: grey;
`

export const Desc = styled.p`
color: grey;
font-size: 14px;
`

export const Rate = styled.p`
color: grey;
position: absolute;
bottom: 0;
right: 0;
margin: 10px;
`

export const Option = styled.div`
width: 20%;
height: 100px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Button = styled.div`
background-color: ${props => props.theme.colors.primary};
color: #fff;
width: 75px;
padding: 5px;
margin: 5px;
border-radius: 3px;
text-align: center;
`

export const Status = styled.p`
text-align: center;
width: 100%;
color: grey;
font-size: 14px;
`