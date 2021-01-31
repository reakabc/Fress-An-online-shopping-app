import React from 'react'
import axios from 'axios'
import { Button, Content, Form, Input, RoundImage, SignUpWrapper, ProfileLink } from './SignUp.Style'

class SignUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
            password: '',
            img: '',
            url: ''
        }

    }

    handleImage(e){

        const objectURL = URL.createObjectURL(e.target.files[0])

        this.setState({
            img: e.target.files[0],
            url: objectURL
        })

    }

    submit = async(e) => {

        e.preventDefault();

        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const mobile = e.target.elements.mobile.value;
        const password = e.target.elements.password.value;

        const data = new FormData();
        data.append('file', this.state.img);
        data.append('name', name);
        data.append('email', email);
        data.append('mobile', mobile);
        data.append('password', password);

        let url = 'http://localhost/fress/signup.php';

        axios.post(url, data).then(res => this.response(res.data));

    }

    response(data){

        window.alert('SignUp successful!');

        // if (data === 'ok') {
        //     window.alert('SignUp successful!');
        // }else{
        //     window.alert('Something went wrong!');
        // }
    }
    
    render(){
        return(
            <SignUpWrapper>
                <Content>
                    <RoundImage src={this.state.url === '' ? "./assets/me_round.png" : this.state.url} alt="profile image"/>
                    <Form onSubmit={this.submit}>
                        <Input type="file" name="image" onChange={(e) => this.handleImage(e)}/>
                        <Input type="text" name="name" placeholder="Enter name"/>
                        <Input type="email" name="email" placeholder="Enter email"/>
                        <Input type="number" name="mobile" placeholder="Enter mobile number"/>
                        <Input type="password" name="password" placeholder="Enter password"/>
                        <Button type="submit">Sign Up</Button>
                        <ProfileLink to="/login">login</ProfileLink>
                    </Form>
                </Content>
            </SignUpWrapper>
        )
    }

}

export default SignUp;