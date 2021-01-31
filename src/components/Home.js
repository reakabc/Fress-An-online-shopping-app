import React from 'react'
import { Content, HomeWrapper } from './Home.Stayle';
import Card01 from '../cards/Card'
import axios from 'axios'

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            products: [
                // {id:1, title: 'Banana', rate: 'Rs.255/dozen', price: 255, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/banana.jpg', desc: 'Best quality grapes available in north east region of India'},
                // {id:2, title: 'Apple', rate: 'Rs.150/kg', price: 150, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/apple.jpg', desc: 'Best quality grapes available in north east region of India'},
                // {id:3, title: 'Orange', rate: 'Rs.95/kg', price: 95, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/orange.jpg', desc: 'Best quality grapes available in north east region of India'},
                // {id:4, title: 'Guava', rate: 'Rs.45/kg', price: 45, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/guava.jpg', desc: 'Best quality grapes available in north east region of India'},
                // {id:5, title: 'Grapes', rate: 'Rs.355/kg', price: 355, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/grapes-green.jpg', desc: 'Best quality grapes available in north east region of India'},
                // {id:6, title: 'Pomegranate', rate: 'Rs.555/kg', price: 555, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/pomegranate.jpg', desc: 'Best quality grapes available in north east region of India'}
            ]
        }
    }

    componentDidMount(){


        axios.get('http://localhost/fress/fetch_items.php?type=0').then(res => {
            console.log(res);
            this.setState({
                products: res.data
            })
        })

    }
    

    render(){
        return(
            <HomeWrapper>
                <Content>

                    {
                        this.state.products.map((items) => 
                        <Card01 key={items.id} item={items.id} title={items.title} img={"http://localhost/fress/"+items.img} desc={items.desc} price={items.rate}/>)
                    }

                </Content>
            </HomeWrapper>
        )
    }

}

export default Home;