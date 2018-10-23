import React, {Component} from 'react';

class Footer extends Component {
  constructor(props){
    super(props);
      this.state={
        fbLogo : "www.fb.com.jpg",
        inLogo : "www.in.com.jpg",
        gplusLogo : "www.gplus.com.jpg",
        tweetLogo : "www.tweet.com.jpg",
        fb : "www.fb.com",
        in : "www.in.com",
        gplus : "www.gplus.com",
        tweet : "www.tweet.com"
      }
  }


  render(){
    return(
      <footer>
        <div className="col-4 s-col-6 float-left">
          <div className="col-12 footer_p">
            <h2>ADDRESS:</h2>
            <p>
              3780 Old Norcross Rd,<br/>
              Suite 106<br/>
              Duluth, GA, 30096
            </p>
          </div>
          <div className="col-12 footer_p">
            <h2>PHONE:</h2>
            <p> (770)495-8828 </p>
          </div>
          <p className="footer__copyright">© 2016 by VeGreen. Vegetarian Fusion Restaurant</p>
        </div>
        <div className="col-4 float-left footer-mid">.</div>
        <div className="col-4 s-col-6 float-left ">
          <div className="col-12 s-col-12 footer_p">
            <h2>HOURS:</h2>
            <ul className="hoursClass">
              <li>Mon: 11AM to 9PM</li>
              <li>Tue: 11AM to 9PM</li>
              <li>Wed: Temporary Closed</li>
              <li>Thur: 11AM to 9PM</li>
              <li>Fri: 11AM to 10PM</li>
              <li>Sat: 11AM to 10PM</li>
              <li>Sun: 11AM to 9PM</li>
            </ul>
          </div>
          <div className="ssLarge col-12 s-col-12 footer_p">
            <a href={this.state.fb}><img className="col-3 ss-icon" alt="fb" src={this.state.fbLogo} /></a>
            <a href={this.state.in}><img className="col-3 ss-icon" alt="in" src={this.state.inLogo} /></a>
            <a href={this.state.gplus}><img className="col-3 ss-icon" alt="gplus" src={this.state.gplusLogo} /></a>
            <a href={this.state.tweet}><img className="col-3 ss-icon" alt="tweet" src={this.state.tweetLogo} /></a>
          </div>
        </div>
      </footer>
    )
  }
};

export default Footer;
