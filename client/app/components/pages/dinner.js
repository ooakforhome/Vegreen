import React, {Component} from "react";
import MenuPopup from './parts/MenuPopup';

class Dinner extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu1: "/api/image/menu1L.JPG",
      menu2: "/api/image/menu2L.JPG",
      menuSushi: "/api/image/menuSushiL.JPG",
      menuDrinkCake: "/api/image/menuDrinkCakeL.JPG"
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
      <div className="s-iCol-10 iCol-8">
        <img
          src={this.state.menu1}
          alt="menu1"
          onClick={this.togglePopup.bind(this)}
        />
        <img
          src={this.state.menu2}
          alt="menu2"
          onClick={this.togglePopup.bind(this)}
        />
        <img
          src={this.state.menuSushi}
          alt="sushi"
          onClick={this.togglePopup.bind(this)}
        />
        <img
          src={this.state.menuDrinkCake}
          alt="Drink and Cake"
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

};

export default Dinner;
