import React, {Component} from 'react';
import axios from "axios";

class FindUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: []
    }
  }

  onChanges(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handEmailSubmit(e){
    e.preventDefault();
    axios.post("/api/newcontact", {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    })
    .then(res => window.location.reload())
  }

  render(){
    return(
      <div>
        <h1>FIND US PAGE</h1>
        <div id="google_map_api" className="col-12 iframe">
          <iframe width="100%" height="100%" frameBorder="0" scrolling="no" title="Google Maps" aria-label="Google Maps" src="https://static.parastorage.com/services/santa/1.4664.14/static/external/googleMap.html?language=en&amp;lat=33.9613355&amp;long=-84.1421856&amp;address=3780 Old Norcross Rd, Duluth, GA 30096, USA&amp;addressInfo=VeGreen, Vegetarian Fusion Restaurant&amp;showZoom=true&amp;showStreetView=true&amp;showMapType=true"></iframe>
        </div>

        <div className="col-12 findUs_container">
          <div className="s-iCol-8 iCol-6">
            <form className="col-12 find_us_form" onSubmit={this.handEmailSubmit.bind(this)}>
              <h2>LEAVE US A MESSAGE</h2>
              <div className="find_us_input">
                <label className="col-2">Name :</label>
                <input className="col-9" type="text" name="name" value={this.props.name} onChange={this.onChanges.bind(this)}/>
              </div>
              <div className="find_us_input">
                <label className="col-2">E-Mail :</label>
                <input className="col-9" type="email" name="email" value={this.props.email} onChange={this.onChanges.bind(this)}/>
              </div>
              <div className="find_us_input">
                <label className="col-2">Phone :</label>
                <input className="col-9" type="phone" name="phone" value={this.props.phone} onChange={this.onChanges.bind(this)}/>
              </div>
              <div className="find_us_input">
                <label className="col-2">Message :</label>
                <input className="col-9" type="field" name="message" value={this.props.message} onChange={this.onChanges.bind(this)}/>
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
