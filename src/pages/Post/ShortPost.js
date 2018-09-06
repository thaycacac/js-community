import React, { Component } from 'react';
import './ShortPost.css';
import 'font-awesome/css/font-awesome.min.css';
import avatar from '../images/avatar.png';
import {Link} from 'react-router';
import { fetchpostHashtags } from './../../reducers/hashtag/actions';
import { connect } from 'react-redux';
import {addLike} from '../../reducers/postInteraction/actions'
class ShortPost extends Component{
    constructor(props){
        super(props);
        this.state={
                post:this.props.post,
                hashtags:[]
        }
    }
    componentWillMount(){
        this.props.fetchpostHashtags(this.props.post.postId)
        .then(() =>{
            const hashtags = this.props.hashtags;
            this.setState({hashtags})
        })
    }
    render(){
        const isLiked = this.props.liked && this.props.liked.includes(this.state.post.postId);
        return(
            
            <div className='short-post-container'>
                <div className='user-avatar'>
                    <img src={this.props.post && this.props.post.authorAvatar ? this.props.post.authorAvatar : avatar} alt="avatar"/>
                </div>

                <div className='short-description'>
                    <p className='username'><a href='/profile'>{this.state.post.authorName}</a></p>
                    <div className='main-hashtag'>
                        {
                            this.state.hashtags.map(hashtag=>{
                                return(
                                    <span key={Math.random()}className='hashtag'><a>{hashtag.hashtag}</a></span>
                                )
                            })
                        }
                    </div>
                    <div className='post-title'>
                        <Link to={{pathname:`/post/${this.props.post.postId}`}} >{this.state.post.title}</Link>
                    </div>
                    <div className='short-user-interact' style={{fontSize:'18px'}}>
                        <i className="fa fa-thumbs-o-up" style={{fontSize:'18px', marginRight: '5px', color: isLiked && '#3578E5'}}
                        > </i>
                        <span style={{color: isLiked && '#3578E5'}}>{this.props.post.total_likes}</span>
                        <i className="fa fa-comment-o" style={{fontSize:'18px', marginLeft:'10px', marginRight: '5px'}}></i>
                        <span>{this.props.post.total_comments}</span>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log('state',state)
    return({
        hashtags:state.hashtags.postHashtags.hashtagResult
    })
}
const mapDispatchToProps={
    fetchpostHashtags: fetchpostHashtags,
    addLike: addLike
}

export default connect(mapStateToProps,mapDispatchToProps)(ShortPost)