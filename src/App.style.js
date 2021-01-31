import styled, { keyframes } from 'styled-components'
import {Link} from 'react-router-dom'

const ProfileAnim = keyframes`
0%{ height: 0}
100%{height: 280px}
`

export const MainWrapper = styled.div`
background-color: #f2f2f2;
width: 100%;
height: 100%;
min-height: 100vh;
`

export const NavigationBar = styled.div`
width: 100%;
height: 50px;
background-color: ${props => props.theme.colors.primary};
`

export const NavLogo = styled.span`
display: flex;
flex-direction: row;
align-items: center;
width: 200px;
height: 50px;
float: left;
font-weight: bold;
color: ${props => props.theme.colors.navLink};
margin-left: 10px;
font-size: 30px;
background-color: ${props => props.theme.colors.primary};

@media ${props => props.theme.mediaQuery.below600}{
    width: 100%;
    justify-content: center;
}
`

export const NavItemWrapper = styled.div`
height: 50px;
float: right;
display: flex;
flex-direction: row-reverse;
align-items: center;
background-color: ${props => props.theme.colors.primary};

@media ${props => props.theme.mediaQuery.below600}{
    flex-direction: column;
    width: 100%;
}
`

export const NavItem = styled(Link)`
text-decoration: none;
background-color: ${props => props.theme.colors.primary};
color: ${props => props.theme.colors.navLink};
margin-inline: 20px;
padding: 15px;

@media ${props => props.theme.mediaQuery.below600}{
    width: 100%;
    height: 50px;
    align-items: center;
    align-self: center;
    text-align: center;
}

&:hover{
    border-bottom: 5px white solid;
}
`

