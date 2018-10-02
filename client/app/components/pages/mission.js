import React, {Component} from 'react';

class Mission extends Component {
  constructor(props){
    super(props);
      this.state = {
        vegreenImg: ""
      }
  }


  render(){
    return(
      <div className="body_container">
        <div className="col-3"><img src="" alt=""/></div>
        <div className="mission_page s-iCol-10 col-6">
          <img alt="vegreen_mission_img" src={this.state.vegreenImg}/>
          <h1 className="">OUR MISSION</h1>
          <p className="mission_p">
            Because of our busy lifestyles, many people have forgotten how important it is to eat healthy. VeGreen wants to play the role in helping you balance both physical and mental health. We gather many different kinds of dish from around the world and fuse them into vegetarian dishes, so you can enjoy healthy meals. Moreover, our staff is carefully trained in providing you the best service while you dinning in Vegreen. We want you to relax and enjoy.
            <br/>
            VeGreen is also an environmental awareness group. All of our carry out boxes are made out of recyclable materials, but we still want you to dine in the restaurant and enjoy the positive atmosphere that we have created. We want you to feel the positive energy and understand the benefit to dining as vegetarian. More importantly, knowing what one person can do to change the world. To become a vegetarian or even partial vegetarian is more than just healthy, you can also save many lives by just switching one meal a week to vegetarian. Browse our web site. We’re here to help you understand more of what vegetarian is all about and all of the benefits that come with a vegetarian lifestyle.
          </p>
        </div>
        <div className="col-12"><img src={this.state.vegreenImg} alt="footer_img"/></div>
      </div>
    )
  }
};

export default Mission;
