import React, { Component } from 'react';
import './Comment.css';
import avatar from '../images/avatar.png';
import {Link} from 'react-router';

export default class Comment extends Component {
    constructor(props){
        super(props);
        this.state={
            username:this.props.username,
            content:this.props.content,
            userAvatar: this.props.userAvatar
        }
    }
    
    render(){
        return(
            <div className='comment-container'>
                <div className='comment-user-avatar'><img style={{borderRadius:'100px'}}
                 src={this.state.userAvatar ? this.state.userAvatar : avatar} alt="avatar"/></div>
                <div className='comment-content'>
                    <div className='username'><Link to={{pathname:`/profile/53`}}>{this.state.username}</Link></div>
                    <div className='comment-text'>
                        {this.state.content}
                    </div>
                </div>
            </div>
        )
    }
};
