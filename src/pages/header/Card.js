import React, { Component } from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import login from '../images/login.png';
<<<<<<< HEAD
import { Link } from 'react-router';
=======
import {Link} from 'react-router';

>>>>>>> 3d8e1765d9638f5e4a4ad549d5b23c49e1f1876c
export default class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false,
<<<<<<< HEAD
      email: this.props.auth && this.props.auth.email || '',
      username: this.props.auth && this.props.auth.name || 'Linh'
=======
      email:'',
      username: 'user'
>>>>>>> 3d8e1765d9638f5e4a4ad549d5b23c49e1f1876c
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }
  signOut= () => {
    console.log('sign out')
    localStorage.clear();
  }
  render() {
    return (
      <div className='user'>
        <button className='user-button' onClick={this.showMenu}>
          <img src={login} style={{width:'15%',marginRight:'5px'}}/>
          Hi, {this.state.username} <i className="fa fa-angle-down" style={{fontSize:'15px',color:'white',marginLeft:'5px'}}></i>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <div className='user-content'>
<<<<<<< HEAD
                    <Link to='/profile'>View profile</Link><br/>
                    <Link onClick={() => {
                      this.signOut()
                    }}to='/login'> Sign out </Link>
=======
                    <a href='./profile'>View profile</a><br/>
                    <a href=''>Sign out</a>
>>>>>>> 3d8e1765d9638f5e4a4ad549d5b23c49e1f1876c
                </div>
                
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}