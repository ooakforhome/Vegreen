
import React, { Component } from 'react';
import axios from 'axios';

class EditForm extends Component {
  constructor(props){
    super(props);
    this.state={
      editActive: false,
      dishId: "",
      currentDish: {
        spicy: "",
        garlic: "",
        nuts: "",
        dishId: "",
        name: "",
        nameCH: "",
        price: 0,
        priceL: 0,
        description: ""
      }
    }
    this.onDishEditChange = this.onDishEditChange.bind(this);
  }

  needUpdateDish(e){
    this.setState({
      dishId: e.target.value
    })
  }

  needUpdateDishSubmit(e){
    e.preventDefault();
    axios.get(`/api/dishid?dishId=${this.state.dishId}`)
      .then(res=>{
        this.setState({
          currentDish: res.data[0],
          editActive: true
        })
      })
  }


  onDishEditChange(e){
    let key = e.target.getAttribute("data-name");
    let value = e.target.value;

    this.setState(prevState=>({
      ...prevState,
      currentDish: {
        ...prevState.currentDish,
        [key]: value
      }
    }))
  }

  onDishEditSubmit(e){
    e.preventDefault();
    const { dishId } = this.state;
    axios.put(`/api/editdish?dishId=${dishId}`, this.state.currentDish)
      .then(res=>{
        if(res.status=== 200){
          this.setState({
            editActive: false,
            dishId: "",
            currentDish: {
              spicy: "",
              garlic: "",
              nuts: "",
              dishId: "",
              name: "",
              nameCH: "",
              price: 0,
              priceL: 0,
              description: ""
            }
          })
        } else {
          console.log("nope")
        }
      })
  }

  render(){

    return(
      <div style={{border: "1px solid black"}}>
       <div style={{margin: "5px"}}>
        <label>Update Product by Dish ID </label>
        <input
          className="form-control"
          id="name"
          name="name"
          value={this.state.dishId}
          data-name="dishId"
          name="dishId"
          onChange={this.needUpdateDish.bind(this)}
        />
        <button onClick={this.needUpdateDishSubmit.bind(this)}>search</button>
       </div>
      <div style={{margin: "5px"}} className={(this.state.editActive)? "": "displayToggleLG"}>
        <h2>EDIT PRODUCT</h2>
        <div>
          <label>SPICY: </label>
          <span className="radio">
              <label>
                <input onChange={this.onDishEditChange} data-name="spicy" name="spicy" type="radio" value="TRUE"/>
                TRUE
              </label>
            </span>
            <span className="radio">
              <label>
                <input onChange={this.onDishEditChange} data-name="spicy" name="spicy" type="radio" value="FALSE"/>
                FALSE
              </label>
            </span>
          </div>

          <div>
            <label>GARLIC: </label>
            <span className="radio">
                <label>
                  <input onChange={this.onDishEditChange} data-name="garlic" name="garlic" type="radio" value="TRUE"/>
                  TRUE
                </label>
              </span>
              <span className="radio">
                <label>
                  <input onChange={this.onDishEditChange} data-name="garlic" name="garlic" type="radio" value="FALSE"/>
                  FALSE
                </label>
              </span>
            </div>

            <div>
              <label>NUTS: </label>
              <span className="radio">
                  <label>
                    <input onChange={this.onDishEditChange} data-name="nuts" name="nuts" type="radio" value="TRUE"/>
                    TRUE
                  </label>
                </span>
                <span className="radio">
                  <label>
                    <input onChange={this.onDishEditChange} data-name="nuts" name="nuts" type="radio" value="FALSE"/>
                    FALSE
                  </label>
                </span>
            </div>

          <label>NAME: </label>
          <input type="text"
            className="form-control"
            id="name"
            data-name="name"
            name="name"
            value= {this.state.currentDish.name}
            onChange={this.onDishEditChange}
          />
          <label>CHINESE NAME: </label>
          <input type="text"
            className="form-control"
            id="nameCH"
            data-name="nameCH"
            name="nameCH"
            value= {this.state.currentDish.nameCH}
            onChange={this.onDishEditChange}
          />
          <label>PRICE: </label>
          <input type="text"
            className="form-control"
            id="price"
            data-name="price"
            name="price"
            value= {this.state.currentDish.price}
            onChange={this.onDishEditChange}
          />
          <label>LARGE PRICE: </label>
          <input type="text"
            className="form-control"
            id="priceL"
            data-name="priceL"
            name="priceL"
            value= {this.state.currentDish.priceL}
            onChange={this.onDishEditChange}
          />
          <button onClick={this.onDishEditSubmit.bind(this)}>Submit</button>
        </div>
      </div>
    )
  }
}


export default EditForm
