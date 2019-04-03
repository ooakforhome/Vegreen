import React, { Component } from 'react';
import API from '../api-modules';
import axios from 'axios';

import EditForm from './EditForm';
import AddDish from './AddDish';
import DeleteDish from './DeleteDish';

class ImageGallery extends Component {
  constructor(props){
    super(props);
      this.state={
        data: [],
        images: [],
        deleteMsg: "",
        lunchImages: "/api/image/menuLunchL",
        dinnerImages: {
          menu1: "/api/image/menu1L",
          menu2: "/api/image/menu2L",
          menuSushi: "/api/image/menuSushiL",
          menuDrinkCake: "/api/image/menuDrinkCakeL"
        }
      }
  }

  componentDidMount(){
    this.loadImageData();
  }

  _handleImageChange(e){
    this.setState({
      file: e.target.files[0]
    });
  }

  _handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", this.state.file);

    fetch('/api/upload/', {
      method: 'POST',
      body: formData
      })
      .then(res => {
        if( res.ok === true ){
          alert("upload successfully")
        } else {
          alert ("upload failed")
        }
      })
  };

// Lunch image Updates
  _handleLunchImageChange(e){
    this.setState({
      lunchImage: e.target.files[0]
    });
  }

  _handleLunchSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", this.state.lunchImage, 'menuLunchL');

    fetch('/api/upload/', {
      method: 'POST',
      body: formData
      })
      .then(res => {
        if( res.ok === true ){
          alert("upload successfully")
        } else {
          alert ("upload failed")
        }
      })
  }

  removeLunchImg(e){
    e.preventDefault();
    axios.delete(`/api/delete/menuLunchL`)
      .then(res => {
        console.log(res.data)
      })
  }
// Lunch image Updates End
// Menu image updates
  _removeMenu(menu){
    axios.delete(`/api/delete/${menu}`)
      .then(res => {
        console.log(res.data)
      })
  }

  _handleMenuImageChange(e){
    const key = e.target.getAttribute("data-name")
    this.setState({
      dinnerImages: {
        [key]: e.target.files[0]}
    });
  }


  _handleMenuSubmit(e){
    e.preventDefault();
    const name = e.target.getAttribute("data-name");
    const key = e.target.getAttribute("data-key");
    const {menu1, menu2, menuSushi, menuDrinkCake} = this.state.dinnerImages;
    let formData = new FormData();
    formData.append("file", this.state.dinnerImages[key] , `${name}`);

    fetch('/api/upload/', {
      method: 'POST',
      body: formData
      })
      .then(res => {
        if( res.ok === true ){
          alert("upload successfully")
        } else {
          alert ("upload failed")
        }
      })
  }
// Menu image updates end
onChangeDeleteDish(e){
  this.setState({deleteDishId: e.target.value.toUpperCase()})
}
onDeleteSubmit(e){
  e.preventDefault();
  axios.delete(`/api/deletebydishid?dishId=${this.state.deleteDishId}`)
    .then(info => {
      console.log(info)
      if(info.data.status !== "null"){
        this.setState({
          deleteMsg: info.data.status
        })
      } else {
        this.setState({
          deleteMsg: "No Such File"
        })
      }
    })
}

  loadImageData=()=>{
    API.getImages()
      .then(res => {
        this.setState({
          images: res.data
        })
      })
  }

  removeImg(e){
    e.preventDefault();
    API.deleteImage(e.target.value)
      .then(res=> {
        this.loadImageData();
      })
  }

  render(){

    const ShowImg = ({_id, filename}) => (
      <div className="col-3 gal_contain">
        <p>{filename}</p>
        <img alt={filename} src={`/api/image/${filename}`} />
        <p className="abc">{_id}}</p>
        <button value={_id} onClick={this.removeImg.bind(this)}>Delete</button>
      </div>
    )

    const ShowAllImg = ({datas}) => (
        <div>
          {datas.map((data, i) =>
            <ShowImg key={i}
                    {...data}
                    />
          )}
        </div>
      )


    return(
      <div>
        <AddDish />
        <EditForm />

        <div style={{display: "flex", padding:"15px", margin:"15px", border:"1px solid black"}}>
          <h2>Lunch Menu</h2>
          <div className="col-3 gal_contain">
            <img
              style={{width: '100px'}}
              alt={this.state.lunchImages}
              src={this.state.lunchImages} />
            <button
              onClick={this.removeLunchImg.bind(this)}>
                Delete
            </button>
          </div>
          <div className="col-9 gal_contain">

          <form
            className="form_class"
            encType="multipart/form-data"
            onSubmit = { this._handleLunchSubmit.bind(this) }>
            <input
              className="fileInput"
              type="file"
              data-name="lunch"
              id="file"
              onChange={this._handleLunchImageChange.bind(this) } />
          <button className="saveBtn"> Upload </button>
          </form>
          </div>
        </div>



        <div style={{display: "flow-root", padding:"15px", margin:"15px", border:"1px solid black"}}>
          <h2>Menu</h2>
          <div className="col-5 gal_contain">
          <p>menu1 </p>
          <img
          style={{width: '100px'}}
          alt={this.state.dinnerImages.menu1}
          src={this.state.dinnerImages.menu1} />
          <button
            onClick={this._removeMenu.bind(this, "menu1L")}>
              Delete
          </button>
          </div>
          <div className="col-5 gal_contain">
          <p>menu2 </p>
          <img
          style={{width: '100px'}}
          alt={this.state.dinnerImages.menu2}
          src={this.state.dinnerImages.menu2} />
          <button
            onClick={this._removeMenu.bind(this, "menu2L")}>
              Delete
          </button>
          </div>
          <div className="col-5 gal_contain">
          <p>Sushi </p>
          <img
          style={{width: '100px'}}
          alt={this.state.dinnerImages.menuSushi}
          src={this.state.dinnerImages.menuSushi} />
          <button
            onClick={this._removeMenu.bind(this, "menuSushiL")}>
              Delete
          </button>
          </div>
          <div className="col-5 gal_contain">
          <p>Drink and Coke</p>
          <img
          style={{width: '100px'}}
          alt={this.state.dinnerImages.menuDrinkCake}
          src={this.state.dinnerImages.menuDrinkCake} />
          <button
            onClick={this._removeMenu.bind(this, "menuDrinkCakeL")}>
              Delete
          </button>
          </div>
          <div className="col-12 gal_contain">

          <form
            className="form_class"
            encType="multipart/form-data"
            data-name = "menu1L"
            data-key="menu1"
            onSubmit = { this._handleMenuSubmit.bind(this) }>
            <label>Menu 1 </label>
            <input
              className="fileInput"
              type="file"
              data-name="menu1"
              id="file"
              onChange={this._handleMenuImageChange.bind(this) } />
          <button className="saveBtn"> Upload </button>
          </form>
          <form
            className="form_class"
            encType="multipart/form-data"
            data-name = "menu2L"
            data-key="menu2"
            onSubmit = { this._handleMenuSubmit.bind(this) }>
            <label>Menu 2 </label>
            <input
              className="fileInput"
              type="file"
              data-name="menu2"
              id="file"
              onChange={this._handleMenuImageChange.bind(this) } />
          <button className="saveBtn"> Upload </button>
          </form>
          <form
            className="form_class"
            encType="multipart/form-data"
            data-name = "menuSushiL"
            data-key="menuSushi"
            onSubmit = { this._handleMenuSubmit.bind(this) }>
            <label>Sushi </label>
            <input
              className="fileInput"
              type="file"
              data-name="menuSushi"
              id="file"
              onChange={this._handleMenuImageChange.bind(this) } />
          <button className="saveBtn"> Upload </button>
          </form>
          <form
            className="form_class"
            encType="multipart/form-data"
            data-name = "menuDrinkCakeL"
            data-key="menuDrinkCake"
            onSubmit = { this._handleMenuSubmit.bind(this) }>
            <label>Drink and Cake </label>
            <input
              className="fileInput"
              type="file"
              data-name="menuDrinkCake"
              id="file"
              onChange={this._handleMenuImageChange.bind(this) } />
          <button className="saveBtn"> Upload </button>
          </form>
          </div>
        </div>




        <div style={{padding:"15px", margin:"15px", border:"1px solid black", width:"250px"}}>
          <h3>OTHER IMAGES UPLOAD</h3>
          <form
            className="form_class"
            encType="multipart/form-data"
            onSubmit = { this._handleSubmit.bind(this) }>
            <input
              className="fileInput"
              type="file"
              name="file"
              id="file"
              onChange={this._handleImageChange.bind(this) } />
          <button className="saveBtn"> Upload </button>
          </form>
        </div>


        <ShowAllImg datas={this.state.images}/>
      </div>
    )
  }
};

export default ImageGallery;

 
// <DeleteDish
//   onChangeDeleteDish = {this.onChangeDeleteDish.bind(this)}
//   onDeleteSubmit = {this.onDeleteSubmit.bind(this)}
//   deleteMsg = {this.state.deleteMsg}
//   />
