import React, { Component } from 'react';
import ListBox from './menuParts/listBox';
import axios from 'axios';

class MenuPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: []
    }
  }

componentWillMount(){
  axios.get('/api/Main_Course')
    .then((res)=>{
      this.setState({
        dishes: res.data
      })
    })
}

// componentDidMount(){
  // axios.get('/api/Main_Course')
  //   .then((res)=>{
  //     this.setState({
  //       dishes: res.data
  //     })
  //   })
// }

  render(){
    console.log("==============1=state=1==============");
  console.log(this.state.dishes)
    if(!this.state.dishes){
      return "waiting for data";
    };

    const ListAllDishes=({products})=>{
  		<div>
  			{products.map((product, i)=>
  				{<ListBox
          key={i}
          _id = {product._id}
          category = {product.category}
          dishId = {product.dishId}
          name = {product.name}
          nameCH = {product.nameCH}
          price = {product.price}
          description = {product.description}
          spicy = {product.spicy}
          garlic = {product.garlic}
          nuts = {product.nuts}}
  				/>
  			)}
  		</div>
  	}

      console.log("==============2=state=2==============");
    console.log(this.state.dishes)
    return(
      <div className="menu">
        <h2>DISHES</h2>
        <div>
          <ListAllDishes products={this.state.dishes}/>
        </div>
      </div>
    )
  }
};

export default MenuPage;
