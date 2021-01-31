import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CardWrapper = styled.div`
position: relative;
width: 250px;
height: 360px;
//border: 1px #cccccc solid;
background: #fff;
overflow: hidden;
margin: 10px;
z-index: 5;
`

const ImageWrapper = styled.div`
background-size: cover;
width: 100%;
height: 330px;
position: relative;
overflow: hidden;
transition: all 1s ease;
`

const CardImage = styled.img`
width: 100%;
height: 330px;
border-radius: 2px;
transition: all 1s ease;
z-index: 5;

${CardWrapper}:hover && {
    transform: scale(1.2, 1.2);
}
`
const PriceTag = styled.div`
background: rgba(0,0,0,0.7);
color: #fff;
position: absolute;
top: 0;
right: 0;
padding: 5px;
margin: 10px;
border-radius: 5px;
z-index: 5;
`

const CardInfo = styled.div`
width: 95%;
position: absolute;
bottom: -45px;
background: #fff;
padding: 10px;
transition: all .5s ease;

${CardWrapper}:hover && {
    bottom: 0;
}
`
const Title = styled.h2`
color: grey;
margin-bottom: 5px;
`

const Para = styled.p`
color: grey;
`
const ButtonWrapper = styled.div`
margin-top: 13px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const Button = styled.button`
background-color: ${props => props.main ? props.theme.colors.primary : props.theme.colors.secondary};
color: #fff;
width: 90px;
padding: 7px;
outline: none;
border: none;
border-radius: 3px;

&:hover{
    color:  ${props => props.main ? props.theme.colors.primary : props.theme.colors.secondary};
    background: #fff;
}
`

class Card01 extends React.Component{

    addToCart(id){

        const data = new FormData();
        data.append('uid', sessionStorage.getItem('uid'));
        data.append('item_id', id);
        data.append('quantity', '1');

        let url = 'http://localhost/fress/add_to_cart.php';

        axios.post(url, data).then(res => 
                window.alert("Added to Cart")
            );

            console.warn(sessionStorage.getItem('uid'))

    }

    render(){
        return(
            <CardWrapper>
                <ImageWrapper>
                    <CardImage src={this.props.img} alt={this.props.img}/>
                </ImageWrapper>
                <PriceTag>{this.props.price}</PriceTag>
                <CardInfo>
                    <Title>{this.props.title}</Title>
                    <Para>{this.props.desc}</Para>
                    <ButtonWrapper>
                        <Button main>Buy Now</Button>
                        <Button onClick={()=>this.addToCart(this.props.item)}>Add To Cart</Button>
                    </ButtonWrapper>
                </CardInfo>
            </CardWrapper>
        )
    }
}

export default Card01;