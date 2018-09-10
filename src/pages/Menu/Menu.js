import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Menu.css';
export default class Menu extends Component {
    render(){
        return(
            <div className='menu-bar'>
          <Navbar style={{backgroundColor: '#f2f2f2',
            borderColor: '#f2f2f2'}}>
            <Nav style={{border: '0'}}>
              <NavItem eventKey={1} href='/home'> New Feed</NavItem>
              <NavItem eventKey={1} href='/blog'> Blog</NavItem>
              <NavItem eventKey={1} href='/qa'> Q/A</NavItem>
              <NavItem eventKey={1} href='/textbook'> Textbook</NavItem>
            </Nav>
          </Navbar>
        </div>
        )
    }
};
