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
        <ShowAllImg datas={this.state.images}/>
      </div>
    )
  }
};

export default ImageGallery;
