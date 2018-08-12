import React, { Component } from 'react'
import './HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        Hello, This is HomePage
        <p>Use FontAwesomeIcon </p>
        <span><i style={{color : 'red'}} className="fa fa-bell"></i></span>
        <span><i style={{color : '#f29'}} className="fa fa-bell"></i></span>
      </div>
    )
  }
}
