import React from 'react'
import { Cart, Content, Email, Header, Links, Mobile, ProfileImage, ProfileLink, ProfileWrapper, Title, NoItemInCart, Messege, Details, OrderList, Order, Image, Details2, Title2, Desc2, Rate, Status, Button, Actions, Select, Option } from './Profile.Style';
import axios from 'axios'
import Card01 from '../cards/Card'

class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            list: 0,
            products: [
                // {id:1, title: 'Banana', rate: 'Rs.255/dozen', price: 255, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/banana.jpg', desc: 'Best quality grapes available in north east region of India'},
                // {id:2, title: 'Apple', rate: 'Rs.150/kg', price: 150, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/apple.jpg', desc: 'Best quality grapes available in north east region of India'},
                // {id:3, title: 'Orange', rate: 'Rs.95/kg', price: 95, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/orange.jpg', desc: 'Best quality grapes available in north east region of India'},
                // {id:4, title: 'Guava', rate: 'Rs.45/kg', price: 45, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/guava.jpg', desc: 'Best quality grapes available in north east region of India'},
                // {id:5, title: 'Grapes', rate: 'Rs.355/kg', price: 355, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/grapes-green.jpg', desc: 'Best quality grapes available in north east region of India'},
                // {id:6, title: 'Pomegranate', rate: 'Rs.555/kg', price: 555, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/pomegranate.jpg', desc: 'Best quality grapes available in north east region of India'}
            ],
            orders:[]
        }
    }


    cancelOrder(id){

        if(window.confirm("Want to cancel order! Are you sure?")){
            axios.get('http://localhost/fress/cancel_order.php?order_id='+id).then(res => {});
        }else{
            alert("Thank You for not cancelling order!");
        }
        
    }


    componentDidMount(){

        axios.get('http://localhost/fress/items_in_cart.php?user_id='+sessionStorage.getItem('uid')).then(res => {
            console.log(res);
            this.setState({
                list: res.data.items
            })
        })

        axios.get('http://localhost/fress/fetch_listed_items.php?uid='+sessionStorage.getItem('uid')).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            })
        })

        axios.get('http://localhost/fress/fetch_order_request.php?uid='+sessionStorage.getItem('uid')).then(res => {
            this.setState({
                orders: res.data
            })
        });

    }

    updateStatus = (e, id) => {

        e.preventDefault();
        if(window.confirm("Are you sure?")){
            axios.get('http://localhost/fress/update_status.php?order_id='+id+'&status='+e.target.value).then(res => {});
        }else{
            alert("Thank You for not cancelling order!");
        }

    }
    
    render(){
        return(

            
            <ProfileWrapper>
                <Header>
                
                    <ProfileImage src={"http://localhost/fress/"+sessionStorage.getItem('image')}/>
                    <Details>
                        <Title>{sessionStorage.getItem('name')}</Title>
                        <Email>{sessionStorage.getItem('email')}</Email>
                        <Mobile>{"+91" + sessionStorage.getItem('mobile')}</Mobile>
                    </Details>

                </Header>

                <Links>
                    <ProfileLink to="/cart">You Cart</ProfileLink>
                    <ProfileLink to="/list-item">List Your Item</ProfileLink>
                    <ProfileLink to="/orders">Orders</ProfileLink>
                    <ProfileLink to="/profile/listed-items">Listed Item</ProfileLink>
                    <ProfileLink to="/profile/new-orders">Order Request</ProfileLink>
                    {/* <LogoutButton onClick={()=>this.logout()}>Logout</LogoutButton> */}
                </Links>
                    
                <Cart>
                    
                    <NoItemInCart> 
                        <Messege onClick={()=>window.open('http://localhost:3000/cart', '_self')}>
                        {this.state.list} Item In Cart ):
                        </Messege>
                    </NoItemInCart>

                </Cart>

                { window.location.pathname === "/profile/listed-items" ? 
                    <Content>

                        {
                            this.state.products.map((items) => 
                            <Card01 key={items.id} item={items.id} title={items.title} img={"http://localhost/fress/"+items.img} desc={items.desc} price={items.rate}/>)
                        }

                    </Content>
                :
                    <OrderList>
                        {this.state.orders.length != '0' ? this.state.orders.map((item)=>
                            <Order key={item.id}>
                                <Image src={"http://localhost/fress/"+item.img}/>
                                <Details2>
                                    <Title2>{item.title}</Title2>
                                    <Desc2>{item.desc}</Desc2>
                                    <Rate>{item.rate}</Rate>
                                </Details2>
                                <Actions>
                                    <Status>{item.status}</Status>
                                    <Select name="status" id="status" onChange={(e) => this.updateStatus(e, item.id)}>
                                        <Option value="Confirmed">Confirmed</Option>
                                        <Option value="Shipped">Shipped</Option>
                                        <Option value="About To Deliver">About To Deliver</Option>
                                        <Option value="Delivered">Delivered</Option>
                                    </Select>
                                    <Button onClick={()=>this.cancelOrder(item.id)}>Cancel</Button>
                                </Actions>
                            </Order>
                        ) : 
                        <div>You have not purchased anything with us!</div>
                        }
                    </OrderList>
                } 

            </ProfileWrapper>
            
        )
    }

}

export default Profile;