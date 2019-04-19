import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          Chinmay Joshi's Blog
        </div>
      </header>
    );
  }
}

export default Header;
