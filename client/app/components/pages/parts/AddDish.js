
import React, { Component } from 'react';
import axios from 'axios';

class AddDish extends Component {
  constructor(props){
    super(props);
    this.state={
      editActive: false,
      dishId: "",
      newDish: {
        category:"MainCourse",
        spicy: "false",
        garlic: "false",
        nuts: "false",
        dishId: "",
        name: "",
        nameCH: "",
        price: 0,
        priceL: 0,
        description: "",
        showDish: "true"
      }
    }
    this.onDishEditChange = this.onDishEditChange.bind(this);
  }

  onChangeCheckDishAvailable(e){
    this.setState({
      dishId: e.target.value.toUpperCase(),
      newDish: {
        dishId: e.target.value.toUpperCase()
      }
    })
  }

  onChangeCheckDishSubmit(e){
    e.preventDefault();
    axios.get(`/api/dishid?dishId=${this.state.dishId}`)
      .then(res=>{
        if(res.data.Dish){
          this.setState({
            editActive: true
          })
        } else {
          this.setState({
            editActive: false
          }, ()=>alert("Product Already Exist"))
        }
      })
  }


  onDishEditChange(e){
    let key = e.target.getAttribute("data-name");
    let value = e.target.value;

    this.setState(prevState=>({
      ...prevState,
      newDish: {
        ...prevState.newDish,
        [key]: value
      }
    }))
  }

  onAddDishSubmit(e){
    e.preventDefault();
    const { dishId } = this.state;
    axios.post(`/api/newdish`, this.state.newDish)
      .then(res=>{
        if(res.status=== 200){
          this.setState({
            editActive: false,
            dishId: "",
            newDish: {
              showDish: "false",
              spicy: "false",
              garlic: "false",
              nuts: "false",
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
        <h3>ADD DISH</h3>

        <div style={{margin: "5px"}}>
         <label>Insert Dish ID </label>
         <input
           className="form-control"
           id="name"
           name="name"
           value={this.state.dishId}
           data-name="dishId"
           name="dishId"
           onChange={this.onChangeCheckDishAvailable.bind(this)}
         />
         <button onClick={this.onChangeCheckDishSubmit.bind(this)}>search</button>
        </div>

      <div style={{margin: "5px"}} className={(this.state.editActive)? "": "displayToggleLG"}>
        <div className="inputBlock">
          <p>Category Type</p>
          <select
            name="category"
            data-name="category"
            value={this.state.newDish.category}
            onChange={this.onDishEditChange}>
                <option value="Main_Course">MainCourse</option>
                <option value="Appetizers">Appetizers</option>
                <option value="Rice_&_Noodles">RiceNoodle</option>
                <option value="Mock_Meat">MockMeat</option>
                <option value="Soup">Soup</option>
                <option value="Sushi">Sushi</option>
                <option value="Drink">Cake</option>
                <option value="Cakes">CakeDrink</option>
          </select>
        </div>

          <span className="checkbox">
            <label>Show: </label>
            <input onChange={this.onDishEditChange}
              data-name="showDish"
              name="showDish"
              type="checkbox"
              checked={(this.state.newDish.showDish !== "false")?"true": ""}
              value={(this.state.newDish.showDish === "false")?"true": "false"}/>
            <label>spicy: </label>
            <input onChange={this.onDishEditChange}
              data-name="spicy"
              name="spicy"
              type="checkbox"
              checked={(this.state.newDish.spicy !== "false")?"true": ""}
              value={(this.state.newDish.spicy === "false")?"true": "false"}/>
            <label>garlic: </label>
            <input onChange={this.onDishEditChange}
              data-name="garlic"
              name="garlic"
              type="checkbox"
              checked={(this.state.newDish.garlic !== "false")?"true": ""}
              value={(this.state.newDish.garlic === "false")?"true": "false"}/>
            <label>nuts: </label>
            <input onChange={this.onDishEditChange}
              data-name="nuts"
              name="nuts"
              type="checkbox"
              checked={(this.state.newDish.nuts !== "false")?"true": ""}
              value={(this.state.newDish.nuts === "false")?"true": "false"}/>
          </span>

        <div className="text">
            <div>
              <label>NAME: </label>
              <input type="text"
                className="form-control"
                id="name"
                data-name="name"
                name="name"
                value= {this.state.newDish.name}
                onChange={this.onDishEditChange}
              />
            </div>
            <div>
              <label>CHINESE NAME: </label>
              <input type="text"
                className="form-control"
                id="nameCH"
                data-name="nameCH"
                name="nameCH"
                value= {this.state.newDish.nameCH}
                onChange={this.onDishEditChange}
              />
            </div>
            <div>
              <label>PRICE: </label>
              <input type="text"
                className="form-control"
                id="price"
                data-name="price"
                name="price"
                value= {this.state.newDish.price}
                onChange={this.onDishEditChange}
              />
            </div>
            <div>
              <label>LARGE PRICE: </label>
              <input type="text"
                className="form-control"
                id="priceL"
                data-name="priceL"
                name="priceL"
                value= {this.state.newDish.priceL}
                onChange={this.onDishEditChange}
              />
            </div>
            <div>
              <label>Description: </label>
              <textarea
                className="form-control"
                id="description"
                data-name="description"
                name="description"
                value= {this.state.newDish.description}
                onChange={this.onDishEditChange}
              />
            </div>
          </div>
          <button onClick={this.onAddDishSubmit.bind(this)}>Submit</button>
          </div>
      </div>
    )
  }
}


export default AddDish
