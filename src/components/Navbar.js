import React from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import image from '../assets/Logo.png';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu stackable>
        <Menu.Item name='logo'>
          <img src={image} />
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Kings of London
        </Menu.Item>

        <Menu.Item
          name='transactions'
          active={activeItem === 'transactions'}
          onClick={this.handleItemClick}
        >
          Transactions
        </Menu.Item>

        <Menu.Item
          position='right'
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}>
          Sign-in
        </Menu.Item>
      </Menu>
    );
  }
}
