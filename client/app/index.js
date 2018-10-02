import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './styles/newstyle.scss';

import Header from './components/core/header.js';
import Footer from './components/core/footer.js';

import Home from './components/pages/home';
// import VeWorld from './components/pages/veworld';
import Menus from './components/pages/menus';
import FindUs from './components/pages/findUs';
import Mission from './components/pages/mission';


render((
  <Router>
    <div>
        <Route path="/" component = { Header } />
          <Route exact path="/" component = { Home } />
          <Route exact path="/menu" component = { Menus } />
          <Route exact path="/find-us" component = { FindUs } />
          <Route exact path="/mission" component = { Mission } />
        <Route path="/" component = { Footer } />
    </div>
  </Router>
), document.getElementById('app'));
