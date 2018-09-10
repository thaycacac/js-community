import React, { Component } from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
// import login from '../images/login.png';
import { Link } from 'react-router';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      email: (this.props.auth && this.props.auth.email) || '',
      username: (this.props.auth && this.props.auth.name) || 'Linh'
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentWillMount(){
    const username = this.props.auth.name.split(/[ ]+/).pop();
    this.setState({username})
  }
  showMenu() {
    if(this.state.showMenu===false) this.setState({showMenu:true})
    else this.setState({showMenu:false})
  }

  closeMenu(event) {
    if ( this.dropdownMenu && !this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }

  }

  signOut = () => {
    localStorage.clear();
  }
  render() {
    return (
      <div className='user'>
        <button className='user-button' onClick={this.showMenu}>
        <img alt="avatar" src={localStorage.getItem('avatar')} style={{width: '30px',
        height: '30px',
        marginRight:'5px',
        borderRadius: '100px',
        overflow: 'hidden'}}/>Hi, {this.state.username} <i className="fa fa-angle-down" style={{ fontSize: '15px', color: 'white', marginLeft: '5px' }}></i>
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
                  <Link to={{pathname:`/profile/${localStorage.getItem('userId')}`}}>View profile</Link><br />
                  <Link onClick={() => {
                    this.signOut()
                  }} to='/login'> Sign out </Link>

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