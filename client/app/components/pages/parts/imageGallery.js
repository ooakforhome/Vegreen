import React, { Component } from 'react';
import API from '../api-modules';
import axios from 'axios';

class ImageGallery extends Component {
  constructor(props){
    super(props);
      this.state={
        data: [],
        images: []
      }
  }

  componentDidMount(){
    this.loadImageData();
  }

  _handleImageChange(e){
  e.preventDefault();
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

  loadImageData=()=>{
    API.getImages()
      .then(res => {
        console.log(res.data);
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
        <div style={{padding:"15px", margin:"15px", border:"1px solid black", width:"250px"}}>
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
