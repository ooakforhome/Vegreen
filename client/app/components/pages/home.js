import React, {Component} from 'react';
// import Carousel from 'nuka-carousel';
import ImageSlide from './imageSlide/imgSlide';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      img1: '/api/image/SS006.JPG',
      img2: "https://static.wixstatic.com/media/654f73_a2fa981af2584cef8691745612834677~mv2.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01/654f73_a2fa981af2584cef8691745612834677~mv2.webp",
      img3: "/api/image/SS008.jpg",
    }
  }


  render(){
 
    return(
      <div className="body_container">
        <div className="front_text">
          <div className="front_text_inner">
            <h1>Lives We Saved So Far : 59,520</h1>
            <h2>我們目前為止救了59,520個生命 </h2>
            <p>All plates designs present in this website are party request only.</p>
          </div>
        </div>
        <img className="award" src={this.state.img2} />
        <ImageSlide />
        <div className="g-font">
          <p className="s-col-12 iCol-10">"Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty"</p>
          <p className="float-right">Albert Einstein</p>
        </div>
      </div>
    )
  }
};

export default Home;
