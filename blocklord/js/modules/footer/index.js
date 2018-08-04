import React from 'react';
import {
    Link
} from 'react-router-dom';
import styled from 'styled-components';

const Footer = styled.div `
  position: absolute;
  height: 20px;
  bottom: 0;
  z-index: 1;
  background: #3329a5;
  width: 160px;
  border-radius: 3px;
  margin: 5px;
  & > a {
    color: white;
    font-size: 0.6em;
    text-decoration: none;
    margin: 5px;
  }
`;

const FooterComponent = () => ( <
    Footer >
    <
    Link to = "/terms" > Terms of Service < /Link> <
    Link to = "/privacy" > Privacy Policy < /Link> <
    /Footer>
);

export default FooterComponent;



// WEBPACK FOOTER //
// ./src/modules/footer/index.js