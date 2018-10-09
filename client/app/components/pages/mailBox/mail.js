import React, { Component } from 'react';
import axios from 'axios';

class MailBox extends Component {

  onChanges(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  resetForm(){
    document.getElementById('contact-form').reset();
  }

  handleSubmit(e){
      e.preventDefault();
      axios.post("/api/send", {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
        .then((response)=>{
          if (response.data.msg === 'success'){
              alert("Message Sent.");
              this.resetForm()
          }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
          }
      })
  }


  render(){
    return(
      <div>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={this.props.name}
                  onChange={this.onChanges.bind(this)}
                />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={this.props.email}
                  onChange={this.onChanges.bind(this)}
                  aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea className="form-control"
                  rows="5"
                  name="message"
                  value={this.props.message}
                  onChange={this.onChanges.bind(this)}
                  id="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}


export default MailBox;
