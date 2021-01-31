import React from 'react'
import axios from 'axios'
import { MainWrapper } from "./App.style";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Fruits from './components/Fruits';
import Vegetables from './components/Vegetables';
import Search from './components/Search';
import Profile from './components/Profile';
import Cart from './components/Cart';
import ListItem from './components/ListItem';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Orders from './components/Order';
import Nav from './components/Nav';

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            user_id: '0',
            name: '',
            email: '',
            mobile: '',
            showProfileCard: false,
            list: 0
        }
    }

    componentDidMount(){
        this.setState({
            user_id: sessionStorage.getItem('uid'),
            name: sessionStorage.getItem('name'),
            email: sessionStorage.getItem('email'),
            mobile: sessionStorage.getItem('mobile')
        })

        axios.get('http://localhost/fress/items_in_cart.php?user_id='+sessionStorage.getItem('uid')).then(res => {
            console.log(res);
            this.setState({
                list: res.data.items
            })
        })
    }

    logout = async(e) => {

        e.preventDefault();
        sessionStorage.clear();
        this.setState({
            user_id: '',
            name: '',
            email: '',
            mobile: ''
        })

        alert("Logout successful!");
    }

    render(){
        return(
            <Router>
                <MainWrapper>
                    
                    <Nav status={this.state.user_id} logout={this.logout}/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/fruits" component={Fruits}/>
                    <Route path="/vegetables" component={Vegetables}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/list-item" component={ListItem}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/orders" component={Orders}/>      
                    
                </MainWrapper>
            </Router>
        )
    }

}

// Different way of eventHandlerBinding in js
//1. In render method - onClick(functionName.bind(this)) something like this
//2. using arrow function - onClick(()=>functionName()) 
//3. In Constructor - this.functionName = this.functionName.bind(this)
//4. create arrow function over simple function - functionName = () => { //program }

export default App;