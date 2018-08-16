import React, { Component } from 'react';
import './ShortPost.css';
import 'font-awesome/css/font-awesome.min.css';
import avatar from '../images/avatar.png';

export default class ShortPost extends Component{
    constructor(props){
        super(props);
        this.state={
            post:{
                id:this.props.id,
                username:this.props.username,
                title:this.props.title,
                hashtag:this.props.hashtag,
                like:this.props.like,
                comment:this.props.comment
            }
            
        }
    }
    render(){
        return(
            
            <div className='short-post-container'>
            {
                console.log('this.state.post',this.state.post)
              }
                <div className='user-avatar'>
                    <img src={avatar}/>
                </div>

                <div className='short-description'>
                    <p className='username'><a href='/profile'>{this.state.post.username}</a></p>
                    <div className='main-hashtag'>

                    </div>
                    <div className='post-title'>
                        <a href='/post'>{this.state.post.title}</a>
                    </div>
                    <div className='user-interact'>
                    <i className="fa fa-thumbs-o-up" style={{fontSize:'15px'}}>{this.state.post.like} </i>
                    <i className="fa fa-comment-o" style={{fontSize:'15px', marginLeft:'10px'}}>{this.state.post.comment}</i>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

