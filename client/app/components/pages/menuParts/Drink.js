import React, { Component } from 'react';
import ListBox from './listBox';
import axios from 'axios';

class Drink extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: []
    }
  }

componentWillMount(){
  axios.get('/api/Drink')
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
        {products.map((product) =>{
          return((product.showDish !== "false")?<ListBox {...product}/>:'')
        })}
      </div>
    )

    return(
      <div className="menu_category menu-Drink">
        <h2 className="menuh2">Drink</h2>
        <ListAllDishes products={this.state.dishes}/>
      </div>
    )
  }
};

export default Drink;
