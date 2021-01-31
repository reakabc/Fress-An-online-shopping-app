import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SignUpWrapper = styled.div`
width: 100%;
height: 100%;
margin-top: 5%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 80px;
z-index: 1;
`

export const Content = styled.div`
width: 60%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;

@media ${props => props.theme.mediaQuery.below600}{
    flex-direction: column;
    width: 100%;
    margin: 15px;
}
`

export const RoundImage = styled.img`
height: 150px;
width: 150px;
border-radius: 50%;
padding: 5px;
background-color: #ffffff;
`

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
`
export const Input = styled.input`
width: 50%;
padding: 5px;
color: grey;
border: 0.5px grey solid;
border-radius: 2px;
outline: none;
margin: 5px;
`

export const Button = styled.button`
background-color: ${props => props.theme.colors.primary};
color: #ffffff;
padding: 5px;
margin: 5px;
width: 51.5%;
border: 0px;
outline: none;
`

export const ProfileLink = styled(Link)`
text-decoration: none;
background-color: #fff;
color: ${props => props.theme.colors.primary};
padding: 5px;
font-size: 14px;
margin-top: 5px;

&:hover{
    color: black;
}
`