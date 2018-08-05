import React, { Component } from 'react';

import NavBar from '../components/Navbar';
import MasonaryImageController from '../components/MasonaryImageController';

import { Container } from 'semantic-ui-react';

import KCL from '../assets/KCL.jpg';
import ICL from '../assets/ICL.jpg';
import LSE from '../assets/LSE.jpg';
import UCL from '../assets/UCL.jpg';

class Home extends Component {
  render() {
    var data = [
      [KCL, 3],
      [KCL, 4],
      [KCL, 5],
      [KCL, 3],
      [KCL, 3],
      [KCL, 7],
      [KCL, 7],
      [ICL, 7],
      [LSE, 15],
      [UCL, 3]
    ];
    return (
      <div className="Home">
        <Container>
          <NavBar />
        </Container>
        <MasonaryImageController
          images={data}
        />
      </div>
    );
  }
}

export default Home;
