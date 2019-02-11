import React, {Component} from 'react';

class Footer extends Component {
  constructor(props){
    super(props);
      this.state={
        fbLogo : "/api/image/fb-icon.png",
        inLogo : "/api/image/in-icon.png",
        gplusLogo : "/api/image/Gplus-icon.png",
        tweetLogo : "/api/image/tw-icon.png",
        fb : "https://www.facebook.com/vegreenfusion",
        in : "https://www.instagram.com/vegreenfusion/",
        gplus : "www.gplus.com",
        tweet : "https://twitter.com/vegreenfusion"
      }
  }


  render(){
    return(
      <footer>
        <div className="col-4 s-col-6 float-left footerLeft">
          <div className="col-12 footer_p">
            <h2>ADDRESS:</h2>
            <p>
              3780 Old Norcross Rd,<br/>
              Suite 106<br/>
              Duluth, GA, 30096
            </p>
          </div>
          <div className="col-12 footer_p">
            <h2>PHONE:</h2>
            <p> (770)495-8828 </p>
          </div>
          <p className="footer__copyright">© 2016 by VeGreen. vegan Fusion Restaurant</p>
        </div>
        <div className="col-4 float-left footer-mid">.</div>
        <div className="col-4 s-col-6 float-left footerRight">
          <div className="col-12 s-col-12 footer_p">
            <h2>HOURS:</h2>
            <ul className="hoursClass">
              <li>Mon: 11AM to 9PM</li>
              <li>Tue: 11AM to 9PM</li>
              <li>Wed: Temporary Closed</li>
              <li>Thur: 11AM to 9PM</li>
              <li>Fri: 11AM to 10PM</li>
              <li>Sat: 11AM to 10PM</li>
              <li>Sun: 11AM to 9PM</li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
};

export default Footer;

// <table className="tableHour">
//   <tr>
//     <td className="td1">Mon:</td>
//     <td className="td2">11AM to 9PM</td>
//   </tr>
//   <tr>
//     <td className="td1">Tue:</td>
//     <td className="td2">11AM to 9PM</td>
//   </tr>
//   <tr>
//     <td className="td1">Wed:</td>
//     <td className="td2">Temporary Closed</td>
//   </tr>
//   <tr>
//     <td className="td1">Thur:</td>
//     <td className="td2">11AM to 9PM</td>
//   </tr>
//   <tr>
//     <td className="td1">Fri:</td>
//     <td className="td2">11AM to 10PM</td>
//   </tr>
//   <tr>
//     <td className="td1">Sat:</td>
//     <td className="td2">11AM to 10PM</td>
//   </tr>
//   <tr>
//     <td className="td1">Sun:</td>
//     <td className="td2">11AM to 9PM</td>
//   </tr>
// </table>
