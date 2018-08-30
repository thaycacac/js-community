import React, { Component } from 'react'
import { browserHistory } from 'react-router';
export default class PageLayout extends Component {
  componentWillMount() {
    let accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      browserHistory.push("/login");
    }else {
      browserHistory.push("/home");
    }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
