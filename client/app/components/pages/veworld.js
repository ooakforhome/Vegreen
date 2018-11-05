import React, {Component} from 'react';
import NewsList from './parts/news';
import HealthList from './parts/health';
import VideoList from './parts/video';

class VeWorld extends Component {
  constructor(props){
    super(props);
    this.state = {
      img1 : "https://preview.ibb.co/iwtDPp/Lee_Food_8_26_160407.jpg",
      img2 : "https://preview.ibb.co/iwtDPp/Lee_Food_8_26_160407.jpg",
      vid1 : "https://www.youtube.com/embed/tgbNymZ7vqY",
      vid2 : "https://www.youtube.com/embed/tgbNymZ7vqY",
      vid3 : "https://www.youtube.com/embed/tgbNymZ7vqY",
      news1: "https://preview.ibb.co/iwtDPp/Lee_Food_8_26_160407.jpg",
      news2: "https://preview.ibb.co/iwtDPp/Lee_Food_8_26_160407.jpg",
      news3: "https://preview.ibb.co/iwtDPp/Lee_Food_8_26_160407.jpg",
      health1: "https://preview.ibb.co/iwtDPp/Lee_Food_8_26_160407.jpg",
      health2: "https://preview.ibb.co/iwtDPp/Lee_Food_8_26_160407.jpg",
      health3: "https://preview.ibb.co/iwtDPp/Lee_Food_8_26_160407.jpg"
    }
  }

  render(){
    return(
      <div>
        <div className="col-12">
          <img alt="slide_show" src="a.jpg" />
        </div>
        <div className="col-12">
          <div className="col-6"><div className="iCol-8"><img alt="logo" src={this.state.img1} /></div></div>
          <div className="col-6"><div className="iCol-8"><img alt="logo" src={this.state.img2} /></div></div>
        </div>
        <div className="col-12 abc">
          <div className="iCol-12">
            <iframe className="youIframe" src={vid1} />
          </div>
        </div>
      </div>
    )
  }
};

export default VeWorld;
