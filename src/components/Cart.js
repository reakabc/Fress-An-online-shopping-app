import React from 'react'
import { CartContent, CartItem, CartWrapper, CheckOutDetails, Desc, Details, Form, Image, ItemList, Rate, Title, Amount, PayButton, Input, Remove, Span, IncreaseQuantity, DecreaseQuantity } from './Cart.Style'
import axios from 'axios'

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                // { id: 1, title: 'Banana', rate: 'Rs.255/dozen', price: 255, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/banana.jpg', desc: 'Best quality grapes available in north east region of India', quantity: 2 },
                // { id: 2, title: 'Apple', rate: 'Rs.150/kg', price: 150, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/apple.jpg', desc: 'Best quality grapes available in north east region of India', quantity: 1 },
                // { id: 3, title: 'Orange', rate: 'Rs.95/kg', price: 95, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/orange.jpg', desc: 'Best quality grapes available in north east region of India', quantity: 1 },
                // { id: 3, title: 'Orange', rate: 'Rs.95/kg', price: 95, time: 'DD-MM-YYYY', type: 'fruit', img: './assets/orange.jpg', desc: 'Best quality grapes available in north east region of India', quantity: 1 },
            ],
            total: 0,
            tax: 0,
            payableAmount: 0,
            user_id: sessionStorage.getItem('uid'),
            items_ids: [],
            items_quantity: [],
            items_amount: []
        }


    }

    componentDidMount() {

        axios.get('http://localhost/fress/fetch_cart.php?user_id=' + this.state.user_id).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            });
            this.calculatePayment();
        });

    }

    calculatePayment(){

        var sum = 0;
        let items_id = [];
        let quantities = [];
        let amounts = [];

        for (let index = 0; index < this.state.products.length; index++) {
            sum += this.state.products[index].price * this.state.products[index].quantity;
            items_id.push(this.state.products[index].id);
            quantities.push(this.state.products[index].quantity);
            amounts.push(this.state.products[index].price * this.state.products[index].quantity);
        }

        this.setState({
            items_ids: items_id,
            items_quantity: quantities,
            items_amount: amounts
        })

        this.setState({
            total: sum,
            tax: Math.floor(sum * 0.18),
            payableAmount: Math.floor(sum * 0.18 + sum)
        })

        //console.log(sum);
    }

    remove(id, item){

        if (window.confirm('Want to remove '+item+' from cart! Are you sure?')) {
            const data = new FormData();
            data.append('uid', sessionStorage.getItem('uid'));
            data.append('item_id', id);

            let url = 'http://localhost/fress/remove_from_cart.php';

            axios.post(url, data).then(res => 
                this.componentDidMount()
            );
        }
        
    }

    increaseQuantity(id, quantity){

        if(quantity < 5){
            const data = new FormData();
            data.append('uid', sessionStorage.getItem('uid'));
            data.append('item_id', id);

            let url = 'http://localhost/fress/increase_quantity.php';

            axios.post(url, data).then(res => 
                    this.componentDidMount()
                );
        }
    }

    decreaseQuantity(id, quantity){

        if(quantity > 1){

            const data = new FormData();
            data.append('uid', sessionStorage.getItem('uid'));
            data.append('item_id', id);
    
            let url = 'http://localhost/fress/decrease_quantity.php';
    
            axios.post(url, data).then(res => 
                    this.componentDidMount()
                );

        }
        
    }

    placeOrder(e){

        e.preventDefault();

        if(this.state.items_ids.length > 0 ){

            const data = new FormData();
            data.append('uid', sessionStorage.getItem('uid'));
            data.append('items', JSON.stringify(this.state.items_ids));
            data.append('quantities', JSON.stringify(this.state.items_quantity));
            data.append('amounts', JSON.stringify(this.state.items_amount));

            data.append('name', sessionStorage.getItem('name'));
            data.append('email', sessionStorage.getItem('email'));
            data.append('mobile', sessionStorage.getItem('mobile'));
            data.append('address', e.target.elements.address.value);
    
            let url = 'http://localhost/fress/place_order.php';

            //console.warn(e.target.elements.address.value+" / "+this.state.payableAmount);
    
            axios.post(url, data).then(res => 
                    //console.log(res)
                    window.alert("Thank You for purchasing with us! I am really happy to see you here!")
                );

        }
        
    }

    render() {
        return (
            <CartWrapper>
                <CartContent>
                    <ItemList>

                        {this.state.products.map((items) =>
                            <CartItem key={items.id}>
                                <Image src={"http://localhost/fress/"+items.img} />
                                <Details>
                                    <Title>{items.title}</Title>
                                    <Desc>{items.desc}</Desc>
                                    <Span>
                                        <Desc>Quantity: {items.quantity} </Desc>
                                        <DecreaseQuantity onClick={()=>this.decreaseQuantity(items.id, items.quantity)} />  
                                        <IncreaseQuantity onClick={()=>this.increaseQuantity(items.id, items.quantity)} />
                                    </Span>
                                    <Rate>Rate: {items.rate}</Rate>
                                    <Rate>Amount: Rs.{items.price*items.quantity}</Rate>
                                    <Remove onClick={()=>this.remove(items.id, items.title)}>Delete</Remove>
                                </Details>

                            </CartItem>
                        )}

                    </ItemList>
                    <CheckOutDetails>

                        <Form onSubmit={(e)=>this.placeOrder(e)}>
                            <Input name="name" placeholder="Enter Name" value={sessionStorage.getItem('name')} readOnly/>
                            <Input name="email" placeholder="Enter Email" value={sessionStorage.getItem('email')} readOnly/>
                            <Input name="mobile" placeholder="Enter Mobile Number" value={sessionStorage.getItem('mobile')} readOnly/>
                            <Input name="address" placeholder="Enter Full Address" />
                        

                            <Amount>Amout: Rs.{this.state.total}</Amount>
                            <Amount>Tax: Rs.{this.state.tax}</Amount>
                            <Amount>Total Amout: Rs.{this.state.payableAmount}</Amount>

                            <PayButton type="submit">Pay Now</PayButton>
                        </Form>
                        
                    </CheckOutDetails>
                </CartContent>
            </CartWrapper>
        )
    }

}

export default Cart;