import styled from 'styled-components'

export const SearchWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
padding-top: 80px;
background-color: #f2f2f2;
z-index: 1;
`

export const Content = styled.div`
width: 60%;
display: flex;
flex-direction: column;
flex-flow: row wrap;

@media ${props => props.theme.mediaQuery.below600}{
    flex-direction: column;
    width: 100%;
    margin: 15px;
}
`

export const SearchBox = styled.div`
margin: 10px;
width: 93%;
display: flex;
flex-direction: row;
`

export const SearchInput = styled.input`
padding: 5px;
width: 80%;
`

export const SearchButton = styled.button`
width: 20%;
padding: 5px;
background-color: ${props => props.theme.colors.primary};
color: white;
`