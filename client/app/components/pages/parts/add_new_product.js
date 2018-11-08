import React, { Component } from 'react';
import axios from 'axios';

class AddNewProduct extends Component {
  constructor(props){
    super(props);
    this.state={
      category: "Appetizers"
    }
  }

  onChanges(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleProductSubmit(e){
    e.preventDefault();
    axios.post('/api/newdish', {
      category: this.state.category,
      spicy: this.state.spicy,
      garlic: this.state.garlic,
      nuts: this.state.nuts,
      dishId: this.state.dishId,
      name: this.state.name,
      nameCH: this.state.nameCH,
      price: this.state.price,
      description: this.state.description
    }).then( res => {
      document.getElementById('newProductForm').reset();
      this.cleanState();
    })
  }

  cleanState(){
    this.setState({
      category: "",
      spicy: "",
      garlic: "",
      nuts: "",
      dishId: "",
      name: "",
      nameCH: "",
      price: "",
      description: "",
    })
  }

  render(){
    return(
      <div id="add_New_Product">
        <form id="newProductForm" className="iCol-6 s-iCol-10" onSubmit={this.handleProductSubmit.bind(this)}>
          <h2>Add New Product</h2>
          <div>
            <select name="category" onChange={this.onChanges.bind(this)}>
             <option value="Appetizers">Appetizers</option>
             <option value="Main_Course">Main_Course</option>
             <option value="Rice_&_Noodles">Rice_&_Noodles</option>
             <option value="Mock_Meat">Mock_Meat</option>
             <option value="Soup">Soup</option>
             <option value="Sushi">Sushi</option>
             <option value="Drink">Drink</option>
             <option value="Cakes">Cakes</option>
            </select>
          </div>


           <div className="col-12">
            <input type="checkbox" name="spicy" value="true" onChange={this.onChanges.bind(this)}/> Spicy<br/>
            <input type="checkbox" name="garlic" value="true" onChange={this.onChanges.bind(this)}/> Garlic<br/>
            <input type="checkbox" name="nuts" value="true" onChange={this.onChanges.bind(this)}/> Nuts<br/>
           </div>
           <div className="input_box">
              <label className="col-3 input_name"><p>dishId : </p></label>
                <input
                  className="col-8"
                  type="text"
                  name="dishId"
                  value={this.props.dishId}
                  onChange={this.onChanges.bind(this)}/>
           </div>
           <div className="input_box">
              <label className="col-3 input_name"><p>name : </p></label>
                <input
                  className="col-8"
                  type="text"
                  name="name"
                  value={this.props.name}
                  onChange={this.onChanges.bind(this)}/>
           </div>
           <div className="input_box">
              <label className="col-3 input_name"><p>中文 : </p></label>
                <input
                  className="col-8"
                  type="text"
                  name="nameCH"
                  value={this.props.nameCH}
                  onChange={this.onChanges.bind(this)}/>
           </div>
           <div className="input_box">
              <label className="col-3 input_name"><p>price : </p></label>
                <input
                  className="col-8"
                  type="text"
                  name="price"
                  value={this.props.price}
                  onChange={this.onChanges.bind(this)}/>
           </div>
           <div className="input_box col-12">
              <label className="col-3 input_name"><p>description : </p></label>
                <textarea
                  className="col-8"
                  type="text"
                  name="description"
                  value={this.props.description}
                  onChange={this.onChanges.bind(this)}/>
           </div>
           <div className="submit_button">
             <input className="float-right" type="submit" name="submit" />
           </div>
        </form>
      </div>
    )
  }
};

export default AddNewProduct;
