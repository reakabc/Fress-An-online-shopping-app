import React from 'react'
import Card01 from '.././cards/Card'
import axios from 'axios'
import { Content, SearchBox, SearchButton, SearchInput, SearchWrapper } from './Search.Style';

class Search extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            products: [] 
        }
    }

    
    search(e){

        const key = e.target.value;
        axios.get('http://localhost/fress/search.php?keyword='+key).then(res => {
            console.log(res);
            this.setState({
                products: res.data
            })
        })

        //console.log(e.target.value);

    }

    componentDidMount(){

        axios.get('http://localhost/fress/fetch_items.php?type=0').then(res => {
            console.log(res);
            this.setState({
                products: res.data
            })
        })

        //console.log(e.target.value);

    }

    render(){
        return(
            <SearchWrapper>
                
                <Content>
                <SearchBox>
                    <SearchInput onChange={(e)=>this.search(e)} type="text" name="keyword" placeholder="Type here.."/>
                    <SearchButton value="Search">Search</SearchButton>
                </SearchBox>
                
                    {
                        this.state.products.map((items) => 
                        <Card01 key={items.id} title={items.title} img={"http://localhost/fress/"+items.img} desc={items.desc} price={items.rate}/>)
                    }
                </Content>

            </SearchWrapper>
        )
    }

}

export default Search;