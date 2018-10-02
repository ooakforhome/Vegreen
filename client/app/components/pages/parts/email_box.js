import React, { Component } from "react";

class Email_Box extends Component{

  onChanges(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handEmailSubmit(e){
    e.preventDefault();
    axios.post("/api/send", {
      subject: this.state.subject,
      text: this.state.text
    })
    .then(res => window.location.reload())
  }

  render(){
    return(
      <div>
        <form className="col-12 find_us_form" onSubmit={this.handEmailSubmit.bind(this)}>
          <h2>LEAVE US A MESSAGE</h2>
          <div className="find_us_input">
            <label className="col-2">subject :</label>
            <input className="col-9" type="text" name="subject" value={this.props.subject} onChange={this.onChanges.bind(this)}/>
          </div>
          <div className="find_us_input">
            <label className="col-2">Message :</label>
            <input className="col-9" type="text" name="text" value={this.props.text} onChange={this.onChanges.bind(this)}/>
          </div>
          <div className="submit_button">
            <input className="float-right" type="submit" name="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default Email_Box;
