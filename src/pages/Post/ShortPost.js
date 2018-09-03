import React, { Component } from 'react';
import './ShortPost.css';
import 'font-awesome/css/font-awesome.min.css';
import avatar from '../images/avatar.png';
import {Link} from 'react-router';


export default class ShortPost extends Component{
    constructor(props){
        super(props);
        this.state={
                post:this.props.post,
                
        }
    }

    render(){
        return(
            
            <div className='short-post-container'>
                <div className='user-avatar'>
                    <img src={this.props.post && this.props.post.authorAvatar ? this.props.post.authorAvatar : avatar} alt="avatar"/>
                </div>

                <div className='short-description'>
                    <p className='username'><a href='/profile'>{this.state.post.authorName}</a></p>
                    <div className='main-hashtag'>
                        {
                            // this.state.post.hashtags.map(hashtag=>{
                            //     return(
                            //         <span className='hashtag'><a>{hashtag}</a></span>
                            //     )
                            // })
                        }
                    </div>
                    <div className='post-title'>
                        <Link to={{pathname:`/post/${this.props.post.postId}`}} >{this.state.post.title}</Link>
                    </div>
                    <div className='user-interact'>
                    <i className="fa fa-thumbs-o-up" style={{fontSize:'15px', marginRight: '5px'}}> </i>
                    <span>{this.props.post.total_likes}</span>
                    <i className="fa fa-comment-o" style={{fontSize:'15px', marginLeft:'10px', marginRight: '5px'}}></i>
                    <span>{this.props.post.total_comments}</span>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
