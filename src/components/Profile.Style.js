import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const ProfileWrapper = styled.div`
padding-top: 100px;
width: 100%;
background-color: #f2f2f2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
z-index: 1;
`

export const Header = styled.div`
display: flex;
flex-direction: row;
width: 60%;
padding: 10px;
background-color: #fff;
border-radius: 5px;


@media ${props => props.theme.mediaQuery.below600}{
    flex-direction: column;
    width: 100%;
    margin: 15px;
}
`

export const ProfileImage = styled.img`
border-radius: 50px;
height: 100px;
width: 100px;
background-color: ${props => props.theme.colors.primary};

@media ${props => props.theme.mediaQuery.below600}{
    align-items: center;
    align-self: center;
    justify-content: center;
}
`

export const Details = styled.div`
margin-left: 20px;
margin-top: 20px;
display: flex;
flex-direction: column;

@media ${props => props.theme.mediaQuery.below600}{
    margin-left:0;
    align-items: center;
    align-self: center;
    justify-content: center;
}
`

export const Title = styled.h2`
color: grey;
padding: 5px;
margin: 0;
`

export const Email = styled.div`
color: grey;
padding: 2px 5px;
margin: 0;
`

export const Mobile = styled.div`
color: grey;
padding: 2px 5px;
margin: 0;
`

export const AddItem = styled(Link)`
color: grey;
padding: 10px;
`

export const Cart = styled.div`
background-color: #fff;
width: 60%;
padding: 10px;
margin-top: 20px;
border-radius: 5px;
`

export const NoItemInCart = styled.div`
position: relative;
width: 100%;
background: #fff;
color:grey;
display: flex;
justify-content: center;
align-content: center;
align-items:center;
`

export const Messege = styled.p`
color: grey;
padding: 10px;
`

export const ItemsInCart = styled.div`
background: #fff;
display: flex;
flex-flow: row wrap;
`

export const Links = styled.div`
padding: 10px;
background-color: #fff;
width: 60%;
display: flex;
flex-direction:row;
justify-content: space-evenly;

@media ${props => props.theme.mediaQuery.below600}{
    flex-direction: column;
    width: 100%;
}
`
export const ProfileLink = styled(Link)`
text-decoration: none;
background-color: ${props => props.theme.colors.primary};
color: ${props => props.theme.colors.navLink};
padding: 5px 10px;
font-size: 14px;
width: 150px;
border-radius: 4px;
text-align: center;
margin: 2px;


@media ${props => props.theme.mediaQuery.below600}{
    width: 100%;
    align-items: center;
    align-self: center;
    text-align: center;
}

&:hover{
    background-color: greenyellow;
}
`

export const LogoutButton = styled.div`
width: 150px;
color: ${props => props.theme.colors.primary};
background-color: ${props => props.theme.colors.primary};
color: #fff;
padding: 5px 10px;
font-size: 14px;
width: 150px;
border-radius: 4px;
text-align: center;
margin: 2px;

@media ${props => props.theme.mediaQuery.below600}{
    width: 100%;
    align-items: center;
    align-self: center;
    text-align: center;
}

&:hover{
    background-color: red;
}
`

export const Content = styled.div`
margin-top: 30px;
width: 61%;
display: flex;
justify-content: space-around;
flex-flow: row wrap;
border: 2px grey solid;
border-radius: 5px;

@media ${props => props.theme.mediaQuery.below600}{
    width: 100%;
}
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
display: flex;
flex-direction: row;
margin-top: 5px;
`


export const Image = styled.img`
width: 20%;
height: 100px;
padding: 10px;
`

export const Details2 = styled.div`
width: 60%;
position: relative;
padding: 5px;
display: flex;
flex-direction: column;
`

export const Title2 = styled.h2`
color: grey;
`

export const Desc2 = styled.p`
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

export const Actions = styled.div`
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

export const Select = styled.select`
background-color: ${props => props.theme.colors.primary};
color: #fff;
width: 85px;
padding: 5px;
margin: 5px;
border-radius: 3px;
text-align: center;
outline: none;
`

export const Option = styled.option`
background-color: ${props => props.theme.colors.primary};
color: #fff;
`