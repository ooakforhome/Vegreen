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

comeponentWillMount(){
    setTimeout(prevProperty(), 1000);
}


  nextProperty(){
    const newIndex = this.state.property.index+1;
        if( this.state.property.index[2] == true){
          this.setState({
            property: data.properties.index[0]
          })
        } else {
      this.setState({
        property: data.properties[newIndex]
      })
    }
  }

  prevProperty(){
    const newIndex = this.state.property.index-1;

    this.setState({
      property: data.properties[newIndex]
    })
  }



  render(){

    return(
      <div className="imgslide">
        <div className="btn_box">
          <button
            className="prev_img"
            onClick={this.prevProperty.bind(this)}
            disabled={this.state.property.index === 0}
          > Prev </button>
          <button
            className="next_img"
            onClick={this.nextProperty.bind(this)}
            disabled={this.state.property.index === data.properties.length-1}
          > Next </button>

        </div>
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
{/* <div className="btn_box">
  <button
    className="prev_img"
    onClick={this.prevProperty.bind(this)}
  > Prev </button>
  <button
    className="next_img"
    onClick={this.nextProperty.bind(this)}
  > Next </button>
</div>

<div className="front_text">
  <div className="front_text_inner">
    <h1>Lives We Saved So Far : 59,520</h1>
    <h2>我們目前為止救了59,520個生命 </h2>
    <p>All plates designs present in this website are party request only.</p>
  </div>
</div> */}
