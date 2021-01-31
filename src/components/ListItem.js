import React from 'react'
import axios from 'axios'
import { Content, Image, Info, Input, ListItemWrapper, Select, SubmitButton } from './ListItem.Style'

class ListItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            price: '',
            rate: '',
            quantity: '',
            type: '',
            img: '',
            user_id: 1,
            url: ''
        }

        this.handleImage = this.handleImage.bind(this);

    }

    handleImage(e) {

        const objectURL = URL.createObjectURL(e.target.files[0])

        this.setState({
            img: e.target.files[0],
            url: objectURL
        })

    }

    componentWillUnmount(){
        URL.revokeObjectURL(this.state.url);
    }

    submit = async(e) => {

        e.preventDefault();

        const data = new FormData();
        data.append('file', this.state.img);
        data.append('uid', sessionStorage.getItem('uid'));
        data.append('title', e.target.elements.title.value);
        data.append('desc', e.target.elements.desc.value);
        data.append('rate', e.target.elements.rate.value);
        data.append('price', e.target.elements.price.value);
        data.append('quantity', e.target.elements.quantity.value);
        data.append('type', e.target.elements.type.value);

        let url = 'http://localhost/fress/list_item.php';
        axios.post(url, data).then(res => this.response(res.data));

    }

    response(data){

        console.log(data);

        alert('Added successfully!');

        // if (data === 'ok') {
        //     window.alert('Item Added Successfully!');
        // }else{
        //     window.alert('Something went wrong!');
        // }
    }
    
    render(){
        return(
            <ListItemWrapper>
                <Content>
                    <Image src={this.state.url === '' ? "./assets/grapes-black.jpg" : this.state.url} alt="image"/>
                    <Info onSubmit={this.submit}>
                        <Input type="text" name="title" placeholder="Enter Title" maxLength="50" minLength="3"/>
                        <Input type="text" name="desc" placeholder="Type Short description here" maxLength="200" minLength="20"/>
                        <Input type="text" name="rate" placeholder="Type rate in text 'Rs.255/Kg'"/>
                        <Input type="text" name="price" placeholder="Price in Rupees"/>
                        <Input type="text" name="quantity" placeholder="Enter Quantity"/>
                        <Select name="type" name="type">
                            <option value="fruit">Fruits</option>
                            <option value="veg">Vegetables</option>
                        </Select>
                        <Input type="file" onChange={this.handleImage}/>
                        <SubmitButton type="submit">Add Now</SubmitButton>
                    </Info>
                </Content>
            </ListItemWrapper>
        )
    }

}

export default ListItem;