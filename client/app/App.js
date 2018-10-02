import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Home page Link
import Home from './components/core/header.js';


const App = () =>
  <Router>
    <div>
        <Route exact path="/" component = { Home } />
    </div>
  </Router>;

export default App;
