import styled from 'styled-components'

export const ListItemWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
padding-top: 80px;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 1;
`

export const Content = styled.div`
display: flex;
flex-direction: row;
background-color: #fff;
padding: 5px;

@media ${props => props.theme.mediaQuery.below600}{
    flex-direction: column;
    width: 100%;
    margin: 15px;
}
`

export const Image = styled.img`
padding: 5px;
width: 240px;
height: 300px;

@media ${props => props.theme.mediaQuery.below600}{
    width: 98%;
}
`

export const Info = styled.form`
padding: 5px;
display: flex;
flex-direction: column;
`
export const Input = styled.input`
padding: 5px;
color: grey;
border: 0.5px grey solid;
border-radius: 2px;
outline: none;
margin: 5px;
`

export const Select = styled.select`
padding: 5px;
color: grey;
margin: 5px;
`

export const SubmitButton = styled.button`
padding: 5px;
background-color: ${props => props.theme.colors.primary};
color: white;
outline: none;
border: 0px;
`