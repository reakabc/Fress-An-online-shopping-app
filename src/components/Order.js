import React from 'react'
import { Button, Desc, Details, Image, Option, Order, OrderList, OrderListWrapper, Rate, Status, Title } from './Order.Style'
import axios from 'axios'

class Orders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost/fress/fetch_order.php?user_id='+sessionStorage.getItem('uid')).then(res => {
            this.setState({
                products: res.data
            })
        });
    }

    cancelOrder(id){

        if(window.confirm("Want to cancel order! Are you sure?")){
            axios.get('http://localhost/fress/cancel_order.php?order_id='+id).then(res => {});
        }else{
            alert("Thank You for not cancelling order!");
        }
        
    }

    render(){
        return(
            <OrderListWrapper>
                <OrderList>
                    {this.state.products.length != '0' ? this.state.products.map((item)=>
                        <Order key={item.id}>
                            <Image src={"http://localhost/fress/"+item.img}/>
                            <Details>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Rate>{item.rate}</Rate>
                            </Details>
                            <Option>
                                <Status>{item.status}</Status>
                                <Button>Track</Button>
                                <Button onClick={()=>this.cancelOrder(item.id)}>Cancel</Button>
                            </Option>
                        </Order>
                    ) : 
                    <div>You have not purchased anything with us!</div>
                    }
                </OrderList>
            </OrderListWrapper>
        )
    }

}

export default Orders;