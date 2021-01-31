import React from 'react'
import axios from 'axios'
import { Button, Content, Form, Input, RoundImage, SignUpWrapper, ProfileLink } from './Login.Style'

class Login extends React.Component{

    constructor(props) {
        
        super(props);
        this.state = {
            loggedIn: false,
            url: ''
        }

    }

    submit = async(e) => {

        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        const data = new FormData();
        data.append('email', email);
        data.append('password', password);

        let url = 'http://localhost/fress/login.php';

        axios.post(url, data).then(res => 
                this.startSession(res.data)
            );

    }

    startSession(data){

        if(data == 'error'){
            alert('Sorry, Wrong credentials provided!')
        }else{

            const user = data;
            sessionStorage.setItem('loggedIn', true);
            sessionStorage.setItem('uid', user.uid);
            sessionStorage.setItem('name', user.name);
            sessionStorage.setItem('email', user.email);
            sessionStorage.setItem('mobile', user.mobile);
            sessionStorage.setItem('image', user.img);

            console.warn("session started "+sessionStorage.getItem('uid'));
            window.open('http://localhost:3000/', '_self');

        }

    }


    
    render(){
        
        return(
            <SignUpWrapper>
                <Content>
                    <RoundImage src={this.state.url === '' ? "./assets/me_round.png" : this.state.url} alt="profile image"/>
                    <Form onSubmit={this.submit}>
                        <Input type="email" name="email" placeholder="Enter email"/>
                        <Input type="password" name="password" placeholder="Enter password"/>
                        <Button type="submit">Login</Button>
                        <ProfileLink to="/signup">Sign Up</ProfileLink>
                    </Form>
                </Content>
            </SignUpWrapper>
        )
       
    }

}

export default Login;