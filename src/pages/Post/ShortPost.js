import React, { Component } from 'react';
import './ShortPost.css';
import 'font-awesome/css/font-awesome.min.css';
import avatar from '../images/avatar.png';

export default class ShortPost extends Component{
    constructor(props){
        super(props);
        this.state={
            username:this.props.username,
            mainHashtag:['iOS','Swift'],
            title:this.props.title,
            like:'',
            comment:''
        }
    }
    render(){
        return(
            <div className='short-post-container'>
                <div className='user-avatar'>
                    <img src={avatar}/>
                </div>

                <div className='short-description'>
                    <p className='username'>{this.state.username}</p>
                    <div className='main-hashtag'>
                        <span className='hashtag'><a>Swift</a></span>
                        <span className='hashtag'><a>iOS</a></span>
                    </div>
                    <div className='post-title'>
                        <a>{this.state.title}</a>
                    </div>
                    <div className='user-interact'>
                    <i class="fa fa-thumbs-o-up" style={{fontSize:'15px'}}>17 </i>
                    <i class="fa fa-comment-o" style={{fontSize:'15px', marginLeft:'10px'}}>32</i>
                    </div>
                </div>
                
                
            </div>
        )
    }
}