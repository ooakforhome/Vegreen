import React, {Component} from 'react';

class Mission extends Component {
  constructor(props){
    super(props);
      this.state = {
        vegreenImg: "/api/image/rsz_vegreen-png.png",
        longLogo: "/api/image/rsz_vegreen-png.png"
      }
  }


  render(){
    return(
      <div className="body_container">

        <div className="mission_page s-iCol-12 iCol-8">
          <img alt="vegreen_mission_img" className="vegreen_mission_img" src={this.state.vegreenImg}/>
          <h1 className="mission_h1">OUR MISSION</h1>
          <p className="mission_p">
            Because of our busy lifestyles, many people have forgotten how important it is to eat healthy. VeGreen wants to play the role in helping you balance both physical and mental health. We gather many different kinds of dish from around the world and fuse them into vegan dishes, so you can enjoy healthy meals. Moreover, our staff is carefully trained in providing you the best service while you dinning in Vegreen. We want you to relax and enjoy.
            <br/>
            VeGreen is also an environmental awareness group. All of our carry out boxes are made out of recyclable materials, but we still want you to dine in the restaurant and enjoy the positive atmosphere that we have created. We want you to feel the positive energy and understand the benefit to dining as vegan. More importantly, knowing what one person can do to change the world. To become a vegan or even partial vegan is more than just healthy, you can also save many lives by just switching one meal a week to vegan. Browse our web site. We’re here to help you understand more of what vegan is all about and all of the benefits that come with a vegan lifestyle.
          </p>
        </div>

        <div className="iCol-12"><div className="iCol-6"><img src={this.state.longLogo} alt="footer_img"/></div></div>
      </div>
    )
  }
};

export default Mission;
