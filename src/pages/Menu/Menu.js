import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Menu extends Component {
    render(){
        return(
            <div className='menu-bar'>
          <Navbar>
            <Nav>
              <NavItem eventKey={1} href='/home'> New Feed</NavItem>
              <NavItem eventKey={1} href='/blog'> Blog</NavItem>
              <NavItem eventKey={1} href='/question'> Q/A</NavItem>
              <NavItem eventKey={1} href='textbook'> Textbook</NavItem>
            </Nav>
          </Navbar>
        </div>
        )
    }
};
