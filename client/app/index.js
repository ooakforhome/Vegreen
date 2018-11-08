import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/styles.scss";

import Header from './components/core/header.js';
import Footer from './components/core/footer.js';

//pages
import Home from './components/pages/home';
import Menus from './components/pages/menus';
import FindUs from './components/pages/findUs';
import Mission from './components/pages/mission';
import Lunch from './components/pages/lunch';
import Dinner from './components/pages/dinner';

//parts
import Gall from './components/pages/parts/imageGallery';
import Upload from './components/pages/parts/imageUpload';
import AddNewProduct from './components/pages/parts/add_new_product';

// TEST
import ImgSlide from './components/pages/imageSlide/imgSlide';
import Mailbox from './components/pages/mailBox/mail';

render((
  <Router>
    <div className="index-body">
      <Route path="/" component = { Header } />
        <Route exact path="/" component = { Home } />
        <Route exact path="/menu" component = { Menus } />
          <Route exact path="/menu/lunch" component = { Lunch } />
          <Route exact path="/menu/regular" component = { Dinner } />
        <Route exact path="/find-us" component = { FindUs } />
        <Route exact path="/mission" component = { Mission } />
        <Route exact path="/gal" component = { Gall } />
        <Route exact path="/upload" component = { Upload } />
        <Route exact path="/slide" component = { ImgSlide } />
        <Route exact path="/mailin" component = { Mailbox } />
      <Route path="/" component = { Footer } />
    </div>
  </Router>
), document.getElementById('app'));
