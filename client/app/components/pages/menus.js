import React, {Component} from 'react';
import MenuPopup from './parts/MenuPopup';
import { Link } from "react-router-dom";
// import LunchPopup from './parts/LunchPopup';

class Menus extends Component {
  constructor(props){
    super(props);
    this.state = {
      awardImg : "/api/imagesm/Best_2017.jpg",
      magzImg  : "/api/imagesm/AtlMag.jpg",
      newArrImg: "/api/image/NewArrival.jpg",
      showPopup: false,
      menuSet: "/api/image/Dinner-Menu-logo.jpg",
      menuReg: "/api/image/Set-Menu-logo.jpg",
      menu1: "/api/image/menu1.JPG",
      menu2: "/api/image/menu2.JPG",
      menuSushi: "/api/image/menuSushi.JPG",
      menuLunch: "/api/image/menuLunch.JPG",
      menu1L: "/api/image/menu1L.JPG",
      menu2L: "/api/image/menu2L.jpg",
      menuSushiL: "/api/image/menuSushiL.jpg",
      menuLunchL: "/api/image/menuLunchL.jpg",
      dish1 : "/api/image/dish-01-360px-240px.jpg",
      dish2 : "/api/image/dish-02-360px-240px.jpg",
      dish3 : "/api/image/dish-03-360px-240px.jpg",
      dish4 : "/api/image/dish-04-360px-240px.JPG",
      text1: "Vegreen\'s menu is carefully designed for your healthy consumption and we have the best flavor you can imagine\. Moreover, We bring out the flavor of the world\. We want to open up your mind\, and show you that vegetarian has no boundary\. From Asia\, to Europe\, to North and South America\, or to Australia\, \"Any type of dish can now be replaced by vegetarian\"\, and it will taste as good as the original dish if not better\."
    }
  }


  togglePopup(e) {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup,
      img: e.target.alt,
      name: e.target.name
    });
  }

  render(){

    return(
      <div>
        <div className="menu_title s-iCol-12 iCol-10">
          <div className="s-col-12 col-4">
            <div className="title_logo">
              <img className="mag_img" alt="2017" src={this.state.magzImg}/>
            </div>
          </div>
          <div className="s-col-12 col-4">
            <h1 className="iCol-12 title_h1">MENU PAGE</h1>
            <h2 className="iCol-12 title_h2">菜單</h2>
          </div>
          <div className="s-col-12 col-4">
            <div className="title_logo">
              <img className="mag_imga" alt="mag" src={this.state.awardImg}/>
            </div>
          </div>
        </div>
        <div className="col-12 text_center">
          <p className="menu_text iCol-9 s-iCol-11">{this.state.text1}</p>
        </div>

        <div className="menu_box_container col-12 s-col-12">
          <div className="menu_box s-col-12 iCol-6">
            <div className="s-col-6 col-6 menu-thumb">
		          <Link to="/menu/lunch">
              <img
                src={this.state.menuSet}
                alt="Set Menu" />
              </Link>
            </div>
            <div className="s-col-6 col-6 menu-thumb">
            	<Link to="/menu/regular">
            <img
                src={this.state.menuReg}
                alt="Regular Menu" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="hr70"/>

        <div className="margin-10">
          <div className="col-12 new_arrival_box">
            <div className="s-col-12 col-4"><h2 className="s-iCol-12 iCol-10">NEW</h2></div>

            <div className="s-col-12 col-4 margin-padding">
              <img className="s-image" alt="New Arrival" src={this.state.newArrImg}  />
            </div>

            <div className="s-col-12 col-4"><h2 className="s-iCol-12 iCol-10">ARRIVAL</h2></div>
          </div>
        </div>

        <div className="margin-10">
          <div className="s-col-12 col-3"><div className="iCol-10"><img alt="dish-1" src={this.state.dish1} /></div></div>
          <div className="s-col-12 col-3"><div className="iCol-10"><img alt="dish-2" src={this.state.dish2} /></div></div>
          <div className="s-col-12 col-3"><div className="iCol-10"><img alt="dish-3" src={this.state.dish3} /></div></div>
          <div className="s-col-12 col-3"><div className="iCol-10"><img alt="dish-4" src={this.state.dish4} /></div></div>
        </div>

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

export default Menus;
