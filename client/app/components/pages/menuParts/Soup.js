import React, { Component } from 'react';
import ListBox from './listBox';
import axios from 'axios';

class Soup extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: []
    }
  }

componentWillMount(){
  axios.get('/api/Soup')
    .then((res)=>{
      this.setState({
        dishes: res.data
      })
    })
}


  render(){
    if(!this.state.dishes){
      return "waiting for data";
    };

    const ListAllDishes = ({products}) => (
      <div className="dishes-cont">
        {products.map((product) =>
          <ListBox {...product}/>
        )}
      </div>
    )

    return(
      <div className="menu_category menu-Soup">
        <h2 className="menuh2">SOUP</h2>
        <ListAllDishes products={this.state.dishes}/>
      </div>
    )
  }
};

export default Soup;
