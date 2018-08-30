import React, { Component } from 'react';
import './Header.css';
import Card from './Card';
import logoJS from '../images/logoJS.png';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
class Header extends Component{
    async componentWillMount () {
        let token = await localStorage.getItem('accessToken');
        if (!token) {
           await browserHistory.push('/login')
        }
    }
    render(){
        return( 
            <div className="header-container">
                <div className="title col-sm-3">
                    <a href='/home'>
                    <img src={logoJS} alt="logo JS" style={{height:'40px'}}/> JS Community
                    </a> 
                 
                 </div>
                <input className="form-control search col-sm-3" type='text' placeholder='Search...'/>
                <div className='write-a-post col-sm-2'>
                <a href='/writepost'>
                    <i className="fa fa-pencil-square-o"></i> Write a post 
                </a> 
                </div>
                <Card auth = {this.props.auth}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const auth = state.auth.reducer;
    return { auth }
}

export default connect(mapStateToProps, null)(Header)