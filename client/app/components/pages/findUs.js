import React, {Component} from 'react';
import axios from "axios";


class FindUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      fbLogo : "/api/image/fb-icon.png",
      inLogo : "/api/image/in-icon.png",
      gplusLogo : "/api/image/Gplus-icon.png",
      tweetLogo : "/api/image/tw-icon.png",
      fb : "https://www.facebook.com/vegreenfusion",
      in : "https://www.instagram.com/vegreenfusion/",
      gplus : "www.gplus.com",
      tweet : "https://twitter.com/vegreenfusion"
    }
  }
  onChanges(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(){
      axios.post("/api/sendMessage", {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
        .then((response)=>{
          if (response.data.msg === 'success'){
              alert("Message Sent.");
          }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
          }
      })
return alert("Thank you we have received your message.");
      document.getElementById("contact-form").reset();
  }
  render(){
    return(
      <div>
        <h1>FIND US PAGE</h1>
        <div id="google_map_api" className="col-12 iframe">
          <iframe width="100%" height="100%" frameBorder="0" scrolling="no" title="Google Maps"
            aria-label="Google Maps"
            src="https://static.parastorage.com/services/santa/1.4664.14/static/external/googleMap.html?language=en&amp;lat=33.9613355&amp;long=-84.1421856&amp;address=3780
            Old Norcross Rd, Duluth, GA 30096, USA&amp;addressInfo=VeGreen, Vegetarian Fusion
            Restaurant&amp;showZoom=true&amp;showStreetView=true&amp;showMapType=true">
          </iframe>
        </div>
        <div className="ssLarge s-col-12 footer_p">
          <a href={this.state.fb}><img className="col-3 ss-icon" alt="fb" src={this.state.fbLogo} /></a>
          <a href={this.state.in}><img className="col-3 ss-icon" alt="in" src={this.state.inLogo} /></a>
          <a href={this.state.gplus}><img className="col-3 ss-icon" alt="gplus" src={this.state.gplusLogo}/></a>
          <a href={this.state.tweet}><img className="col-3 ss-icon" alt="tweet" src={this.state.tweetLogo}/></a>
        </div>
        <div className="col-12 findUs_container">
          <div className="s-iCol-10 iCol-8">
            <form id="contact-form" className="col-12 find_us_form" onSubmit={this.handleSubmit.bind(this)}>
              <h2>LEAVE US A MESSAGE</h2>
              <div className="find_us_input">
                <label className="col-2 s-col-3">Name : </label>
                <input className="col-9 s-col-8" type="text" name="name" value={this.props.name} onChange={this.onChanges.bind(this)} required/>
              </div>
              <div className="find_us_input">
                <label className="col-2 s-col-3">E-Mail : </label>
                <input className="col-9 s-col-8" type="email" name="email" value={this.props.email} onChange={this.onChanges.bind(this)} required/>
              </div>
              <div className="find_us_input">
                <label className="col-2 s-col-3">Message : </label>
                <textarea className="col-9 s-col-8" name="message" rows="5" value={this.props.message} onChange={this.onChanges.bind(this)} required/>
              </div>
              <div className="submit_button">
                <input className="float-right" type="submit" name="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
export default FindUs;
