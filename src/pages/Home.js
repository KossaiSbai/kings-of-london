import React, { Component } from 'react';

import { Button } from 'reactstrap';

import NavBar from '../components/Navbar'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBar/>
      </div>
    );
  }
}

export default Home;
