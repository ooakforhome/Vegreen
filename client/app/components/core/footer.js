import React from 'react';

const Footer = () => (
  <footer>
    <div className="col-4 s-col-6 float-left">
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
      <p className="footer__copyright">© 2016 by VeGreen. Vegetarian Fusion Restaurant</p>
    </div>
    <div className="col-4 float-left footer-mid">.</div>
    <div className="col-4 s-col-6 float-left ">
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
      <div className="ssLarge col-12 s-col-12 footer_p">
        <img className="col-3 ss-icon" alt="fb" src="https://cdn4.iconfinder.com/data/icons/robocat-logo/500/robocat_cat-512.png" />
        <img className="col-3 ss-icon" alt="in" src="https://cdn4.iconfinder.com/data/icons/robocat-logo/500/robocat_cat-512.png" />
        <img className="col-3 ss-icon" alt="gplus" src="https://cdn4.iconfinder.com/data/icons/robocat-logo/500/robocat_cat-512.png" />
        <img className="col-3 ss-icon" alt="tweet" src="https://cdn4.iconfinder.com/data/icons/robocat-logo/500/robocat_cat-512.png" />
      </div>
    </div>
  </footer>
);

export default Footer;
