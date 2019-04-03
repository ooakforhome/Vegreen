
import React, { Component } from 'react';
import axios from 'axios';

class EditForm extends Component {
  constructor(props){
    super(props);
    this.state={
      editActive: false,
      dishId: "",
      currentDish: {
        category:"",
        spicy: "",
        garlic: "",
        nuts: "",
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

  needUpdateDish(e){
    this.setState({
      dishId: e.target.value.toUpperCase()
    })
  }

  needUpdateDishSubmit(e){
    e.preventDefault();
    axios.get(`/api/dishid?dishId=${this.state.dishId}`)
      .then(res=>{
        if(res.data.Dish){
          alert("No such dish")
        } else {
          this.setState({
            currentDish: res.data[0],
            editActive: true
          })
        }
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
       <h3>EDIT DISH</h3>

       <div style={{margin: "5px"}}>
        <label>Insert Dish ID </label>
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

        <div className="inputBlock">
          <p>Category Type</p>
          <select
            name="category"
            data-name="category"
            value={this.state.currentDish.category}
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

        <div>
        <label>SHOW DISH: </label>
          <span className="checkbox">
            <input onChange={this.onDishEditChange}
              data-name="showDish"
              name="showDish"
              type="checkbox"
              checked={(this.state.currentDish.showDish !== "false")?"true": ""}
              value={(this.state.currentDish.showDish === "false")?"true": "false"}/>
          </span>
        </div>

        <div>
          <label>SPICY: </label>
          <span className="radio">
              <label>
                <input onChange={this.onDishEditChange}
                  data-name="spicy"
                  name="spicy"
                  type="checkbox"
                  checked={(this.state.currentDish.spicy !== "FALSE")?"TRUE": ""}
                  value="TRUE"/>
                TRUE
              </label>
            </span>
            <span className="radio">
                <label>
                  <input onChange={this.onDishEditChange}
                    data-name="spicy"
                    name="spicy"
                    type="checkbox"
                    checked={(this.state.currentDish.spicy === "FALSE")?"TRUE": ""}
                    value="FALSE"/>
                  FALSE
                </label>
              </span>
          </div>

          <div>
            <label>GARLIC: </label>
            <span className="radio">
                <label>
                  <input onChange={this.onDishEditChange}
                    data-name="garlic"
                    name="garlic"
                    type="checkbox"
                    checked={(this.state.currentDish.garlic !== "FALSE")?"TRUE": ""}
                    value="TRUE"/>
                  TRUE
                </label>
              </span>
              <span className="radio">
                  <label>
                    <input onChange={this.onDishEditChange}
                      data-name="garlic"
                      name="garlic"
                      type="checkbox"
                      checked={(this.state.currentDish.garlic === "FALSE")?"true": ""}
                      value="FALSE"/>
                    FALSE
                  </label>
                </span>
            </div>

            <div>
              <label>NUTS: </label>
              <span className="radio">
                  <label>
                    <input onChange={this.onDishEditChange}
                    data-name="nuts"
                    name="nuts"
                    type="checkbox"
                    checked={(this.state.currentDish.nuts !== "FALSE")?"true": ""}
                    value="TRUE"/>
                    TRUE
                  </label>
                </span>
                <span className="radio">
                    <label>
                      <input onChange={this.onDishEditChange}
                      data-name="nuts"
                      name="nuts"
                      type="checkbox"
                      checked={(this.state.currentDish.nuts === "FALSE")?"true": ""}
                      value="FALSE"/>
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
          <label>Description: </label>
          <textarea
            className="form-control"
            id="description"
            data-name="description"
            name="description"
            value= {this.state.currentDish.description}
            onChange={this.onDishEditChange}
          />
          <button onClick={this.onDishEditSubmit.bind(this)}>Submit</button>
        </div>
      </div>
    )
  }
}


export default EditForm


// <label>SPICY: </label>
// <span className="radio">
//     <label>
//       <input onChange={this.onDishEditChange} data-name="spicy" name="spicy" type="radio" value="TRUE"/>
//       TRUE
//     </label>
//   </span>
//   <span className="radio">
//     <label>
//       <input onChange={this.onDishEditChange} data-name="spicy" name="spicy" type="radio" value="FALSE"/>
//       FALSE
//     </label>
//   </span>
