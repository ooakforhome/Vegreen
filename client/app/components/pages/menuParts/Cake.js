import React, { Component } from 'react';
import ListBox from './listBox';
import axios from 'axios';

class Cake extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: []
    }
  }

componentWillMount(){
  axios.get('/api/Cakes')
    .then((res)=>{
      this.setState({
        dishes: res.data
      })
    })
}


  render(){
    console.log("==============1=state=1==============");
    console.log(this.state.dishes)
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
      <div className="menu_category menu-Cake">
        <h2 className="menuh2">CAKE</h2>
        <ListAllDishes products={this.state.dishes}/>
      </div>
    )
  }
};

export default Cake;
