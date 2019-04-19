import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/headercomponent/header.js';

import SideNav from './components/sidenavcomponent/sidenav.js';

import Footer from './components/footercomponent/footer.js';

import Homepage from './components/Pages/homepage.js';

import AboutUs from './components/Pages/AboutUs.js';

import ContactUs from './components/Pages/ContactUs.js';

import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
        <div className="Row">
          <div className="column1">
          <Route exact path='/' component={Homepage} />
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/ContactUs' component={ContactUs} />
           
          </div>
          <div className="column2">
            <SideNav />
          </div>
        </div>
        <div className="footer">  

          <Footer />

          </div>
        </div>
      </Router>

    );
  }
}

export default App;
