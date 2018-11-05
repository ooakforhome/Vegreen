import React, {Component} from 'react';
import MenuPopup from './parts/MenuPopup';

class Lunch extends Component{
  constructor(props){
    super(props)
    this.state = {
      menuLunch: "/api/image/menuLunchL.jpg",
    }
  }

  togglePopup(e) {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup,
      img: e.target.src,
      name: e.target.name
    });
  }

  render(){
    return(
      <div className="s-iCol-10 iCol-7 lunch_body">
        <img
          src={this.state.menuLunch}
          alt="Lunch"
          onClick={this.togglePopup.bind(this)}
        />

        {this.state.showPopup ?
          <MenuPopup
          name={this.state.name}
          img={this.state.img}
          closePopup={this.togglePopup.bind(this)}
        /> : null}
      </div>
    )
  }

}

export default Lunch;
