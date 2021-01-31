import styled from "styled-components";

export const HomeWrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: space-evenly;
padding-top: 80px;
background-color: #f2f2f2;
z-index: 1;
`

export const Content = styled.div`
width: 60%;
display: flex;
justify-content: space-around;
flex-flow: row wrap;

@media ${props => props.theme.mediaQuery.below600}{
    width: 100%;
    margin: 5px;
}
`