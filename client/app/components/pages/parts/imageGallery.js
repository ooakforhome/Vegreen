import React, { Component } from 'react';
import axios from 'axios';

class ImageGallery extends Component {
  constructor(props){
    super(props);
      this.state={
        images : {}
      }
  }

componentWillMount(){
  this.setState({
    images : axios.get('/api/images')
  })
};

  render(){
//     const AllImg = ({filename}) => (
//       <div>
//       <p>{filename}</p>
//       <img alt={filename} src="/api/image/{filename}" />
//       </div>
//     )
//
//     const ProductList = ({products}) => (
//   <div>
//     {products.map((product, i) =>
//       <AllImg key={i}
//               {...product}
//               />
//     )}
//   </div>
// )

    return(
      <div>
        <p>{this.props.images}</p>
      </div>
    )
  }
}

export default ImageGallery;
