import React, { Component } from 'react';
import './Comment.css';
import avatar from '../images/avatar.png';

export default class Comment extends Component {
    constructor(props){
        super(props);
        this.state={
            username:this.props.username,
            content:this.props.content
        }
    }
    render(){
        return(
            <div className='comment-container'>
                <div className='comment-user-avatar'><img src={avatar}/></div>
                <div className='comment-content'>
                    <div className='username'><a href=''>{this.state.username}</a></div>
                    <div className='comment-text'>
                        {this.state.content}
                    </div>
                </div>
            </div>
        )
    }
};
