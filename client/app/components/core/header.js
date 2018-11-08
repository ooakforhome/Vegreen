import React, {Component} from "react";
import { add, clear } from "material-design-icons";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props){
    super(props)
    this.state ={
      isClicked: false
    }
  }
  handleClick(){
    this.setState({
      isClicked: !this.state.isClicked
    })
  };
  toggleNav(e){
    e.preventDefault();
    var headNavcontainer = document.querySelector('.nav-container');
    headNavcontainer.classList.toggle("displayToggle")
  }
  toggleNavli(e){
    e.preventDefault();
    var navulul = document.querySelector('.ulul');
    var toggleshow = document.querySelector('.toggleshow');
    var iconNav = document.querySelector('.icon-nav');
    navulul.classList.toggle("displayToggleLG");
    toggleshow.classList.toggle("showSub");
    iconNav.textContent ==="add"? iconNav.innerHTML="clear": iconNav.innerHTML="add";
  }

  render(){
    let menuClass = this.state.isClicked ? 'clicked' : '';
    return(
      <header className="page-top">
        <div className="s-col-6 col-4 float-left">
          <Link to="/">
            <img alt="Vegreen logo" src="https://image.ibb.co/kWFzx9/Ve_Green_Logo_update_Long.jpg"
className="logo_image"/>
          </Link>
        </div>
        <div className="s-col-6 col-8 float-left head-nav">
          <i class="material-icons" onClick={this.toggleNav.bind(this)}>menu</i>
          <nav className="nav-container displayToggle">
            <ul>
              <li className="header_link" onClick={this.toggleNav.bind(this)}><Link className="linkLi
header_link" to="/">HOME</Link></li>
              <li className="header_link toggleshow showSub">
                <p className="linkLii" onClick={this.toggleNav.bind(this)}><Link className=" header_link"
to="/menu">MENU 菜單</Link></p>
                <i className="icon-nav material-icons" onClick={this.toggleNavli.bind(this)}>add</i>
                  <ul className="ulul displayToggleLG">
                    <li className="ulli" onClick={this.toggleNav.bind(this)}><Link className="linkLi"
to="/menu/lunch">LUNCH 中餐</Link></li>
                    <li className="ulli" onClick={this.toggleNav.bind(this)}><Link className="linkLi"
to="/menu/regular">REGULAR 菜單</Link></li>
                  </ul>
              </li>
              <li className="header_link" onClick={this.toggleNav.bind(this)}><Link className="linkLi
header_link" to="/find-us">FIND US 找我們</Link></li>
              <li className="header_link" onClick={this.toggleNav.bind(this)}><Link className="linkLi
header_link" to="/mission">MISSION 使命</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
export default Header;
