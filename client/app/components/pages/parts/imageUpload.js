import React, { Component } from 'react';

class ImageUpload extends Component {

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

  render(){
    return(
      <div>
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
    )
  }
}



export default ImageUpload;
