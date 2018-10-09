import React, { Component } from 'react';
import ImgBox from "./imgBox";
import data from './dataImg';
// import './sty.scss';


class ImgSlide extends Component{
  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

componentDidMount(){
  setTimeout(this.nextProperty.bind(this), 3000);
}

componentDidUpdate(){
    setTimeout(this.nextProperty.bind(this), 3000);
}

  prevProperty(){
    const newIndex = this.state.property.index-1;
    if(this.state.property.index === 0){
      this.setState({
        property: this.state.properties[2]
      })
    } else {
      this.setState({
        property: data.properties[newIndex]
      })
    }
  }


    nextProperty(){
      const newIndex = this.state.property.index+1;
          if( this.state.property.index === data.properties.length-1 ){
            this.setState({
              property: this.state.properties[0]
            })
          } else {
        this.setState({
          property: data.properties[newIndex]
        })
      }
    }

  render(){

    return(
      <div className="imgslide">

        <div className="page">
        <div className="col">
          <div className={`cards-slider active-slide-${this.state.property.index}`}>
            <div className="cards-slider-wrapper" style={{
              'transform': `translateX(-${this.state.property.index*(100/this.state.properties.length)}%)`
            }}>
              {
                this.state.properties.map(property => <ImgBox key={property._id} property={property} />)
              }
            </div>
          </div>
        </div>
      </div>
  </div>
    )
  }
}

export default ImgSlide;
