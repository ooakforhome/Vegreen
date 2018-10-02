import React, { Component } from 'react';

class MenuPopup extends Component {
  render() {
    return (
      <div className='popup'>

        <div className='popup_inner'>
        <button className="float-right x-button" onClick={this.props.closePopup}>X</button>
          <h1>{this.props.name}</h1>
          <img alt={this.props.name} src={this.props.img} />
        </div>
      </div>
    );
  }
}

export default MenuPopup;
