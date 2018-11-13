import React, { Component } from 'react';
import MainCourse from './menuParts/Main_Course';
import Appetizers from './menuParts/Appetizers';
import RiceNoodle from './menuParts/RiceAndNoodle';
import MockMeat from './menuParts/Mock_meat';
import Soup from './menuParts/Soup';
import Sushi from './menuParts/Sushi';
import Drink from './menuParts/Drink';
import Cake from './menuParts/Cake';
import { Link } from "react-router-dom";




class MenuPage extends Component {



  render(){

    return(
      <div className="menu_page">
        <a href="#menu_page_header"><button className="backToTop">TOP</button></a>
        <div id="menu_page_header" className="menu_page_header">
          <ul className="col-12">
            <a href="#AppetizersID"><li className="float-left margin-left_5"><button>Appetizers</button> </li></a>
            <a href="#MainCourseID"><li className="float-left margin-left_5"><button>MainCourse</button> </li></a>
            <a href="#RiceNoodleID"><li className="float-left margin-left_5"><button>RiceNoodle</button> </li></a>
            <a href="#MockMeatID"><li className="float-left margin-left_5"><button>MockMeat</button> </li></a>
            <a href="#SoupID"><li className="float-left margin-left_5"><button>Soup</button> </li></a>
            <a href="#SushiID"><li className="float-left margin-left_5"><button>Sushi</button> </li></a>
            <a href="#DrinkID"><li className="float-left margin-left_5"><button>Drink</button> </li></a>
            <a href="#CakeID"><li className="float-left margin-left_5"><button>Cake</button> </li></a>
          </ul>
        </div>
 
        <div id="AppetizersID" className="menu_box iCol-12">
            <Appetizers />
        </div>
        <div id="MainCourseID" className="menu_box iCol-12">
            <MainCourse />
        </div>
        <div id="RiceNoodleID" className="menu_box iCol-12">
            <RiceNoodle />
        </div>
        <div id="MockMeatID" className="menu_box iCol-12">
            <MockMeat />
        </div>
        <div id="SoupID" className="menu_box iCol-12">
            <Soup />
        </div>
        <div id="SushiID" className="menu_box iCol-12">
            <Sushi />
        </div>
        <div id="DrinkID" className="menu_box iCol-12">
            <Drink />
        </div>
        <div id="CakeID" className="menu_box iCol-12">
            <Cake />
        </div>
      </div>
    )
  }
};

export default MenuPage;
