import React, { Component } from 'react';
import './ShortPost.css';
import 'font-awesome/css/font-awesome.min.css';
import avatar from '../images/avatar.png';

export default class ShortPost extends Component{
    constructor(props){
        super(props);
        this.state={
                id:this.props.id,
                username:this.props.username,
                title:this.props.title,
                hashtags:['iOS','Swift'],
                like:this.props.like,
                comment:this.props.comment
            
        }
    }
    render(){
        return(
            
            <div className='short-post-container'>
                <div className='user-avatar'>
                    <img src={avatar}/>
                </div>

                <div className='short-description'>
                    <p className='username'><a href='/profile'>{this.state.username}</a></p>
                    <div className='main-hashtag'>
                        {
                            this.state.hashtags.map(hashtag=>{
                                return(
                                    <span className='hashtag'><a>{hashtag}</a></span>
                                )
                            })
                        }
                    </div>
                    <div className='post-title'>
                        <a href='/post'>{this.state.title}</a>
                    </div>
                    <div className='user-interact'>
                    <i className="fa fa-thumbs-o-up" style={{fontSize:'15px'}}>{this.state.like} </i>
                    <i className="fa fa-comment-o" style={{fontSize:'15px', marginLeft:'10px'}}>{this.state.comment}</i>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

