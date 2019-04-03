import React, { Component } from 'react';

class Categories extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const ListMaps = () => {
      const navLists = ["MainCourse", "Appetizers", "RiceNoodle", "MockMeat", "Soup", "Sushi", "Drink", "Cake"];

      return(
        <ul className="the_category_nav">
          {
            navLists.map(navList =>{
              return(
                <li
                  key={navList}
                  id={navList}
                  onClick={this.props.clickthenav}
                  className="navlist"
                  name={navList}>
                    {navList}
                </li>
              )
            })
          }
        </ul>
      )
    }

    const menuToggle = (this.props.menuActive === true)? <ListMaps /> : "";

    return(
      <div>
        <span>
        <button onClick={this.props.categorybutton}>
          {(`${this.props.menuActive}` === "false")? "+ Show Categories": "- Show Categories"}
        </button>
        </span>
        <span>
        {menuToggle}
        </span>
      </div>
    )
  }
}

export default Categories;
