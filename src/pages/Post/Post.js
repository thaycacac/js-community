import React, { Component } from 'react'
import './Post.css'
import Header from './../header/Header'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import avatar from '../images/avatar.png'
import Comment from './Comment'
import Menu from './../Menu/Menu'
import { Link } from 'react-router'
import { fetchPostContent } from '../../reducers/post/actions'
import { connect } from 'react-redux'
import Rank from './../sidebars/Rank'
import Hashtags from './../sidebars/Hashtags'
import SavedPost from './../sidebars/SavedPost'
import Weekly from './../sidebars/Weekly'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // postId: 0,
            // authorId: 0,
            // authorName: '',
            // authorAvatar: null,
            // authorDescription: '',
            // title: '',
            // content: '',
            // created_at: '',
            // type: '',
            // total_comments: 0,
            // total_likes: 0,
            post: {},
            newComment: '',
        }
    }

    componentWillMount() {
        // console.log('this.props.post.post',this.props.post.post)
        this.props.fetchPostContent(this.props.params.postId).then(() => {
            const post = this.props.post;
            this.setState({ post })
            // console.log('post',this.state.post)
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: '#f2f2f2' }}>
                <Header />

                <Menu />

                <div className='newfeed-container'>
                    <div className='side-bar-left'>
                        <div className='saved-post-bar'>
                            <div className='bar-title'>
                                Saved post
            </div>
                            <div className='bar-content'>
                                <SavedPost />
                            </div>
                        </div>

                        <div className='hashtag-bar'>
                            <div className='bar-title'>
                                #Hashtag
              </div>

                            <div className='bar-content'>
                                <Hashtags />
                            </div>
                        </div>
                    </div>

                    <div className='content-1'>
                        <div className='main-post-content'>
                            <div className='user-avatar'>
                                <img src={this.state.post.authorAvatar === null ? avatar : this.state.post.authorAvatar} />
                            </div>

                            <div className='short-description'>
                                <div className='post-title'>
                                    {this.state.post.title}
                                </div>
                                <p className='username'><Link to='/profile' >{this.state.post.authorName}</Link></p>


                                <div className='user-interact'>
                                    <div className='main-hashtag'>
                                        {
                                            // this.state.post.hashtags.map(hashtag=>{
                                            //     return(
                                            //         <span className='hashtag'><a>{hashtag}</a></span>
                                            //     )
                                            // })
                                        }
                                    </div>
                                    <i class="fa fa-comment-o" style={{ fontSize: '15px', marginLeft: '10px' }}>{this.state.post.total_comments}</i>
                                    <i class="fa fa-thumbs-o-up" style={{ fontSize: '15px' }}> {this.state.post.total_likes}</i>

                                </div>
                            </div>

                            <div className='post-content'>
                                {this.state.post.content}
                            </div>
                            <button className='btn btn-sm btn-primary' style={{ width: '60px', float: 'right', marginRight: '10px', marginBottom:'20px' }}><i class="fa fa-thumbs-o-up" style={{ fontSize: '15px' }}></i> Like</button>
                        </div>

                        <div className='interaction'>
                            <div className='add-comment'>
                                <h4>Comment</h4>
                                <textarea placeholder='Add comment here...' onChange={event => { this.setState(this.state.newComment = event.target.value) }}></textarea>
                                <button className='btn btn-primary'
                                    style={{ float: 'right', width: '70px' }}

                                >
                                    Post
                            </button>
                            </div>
                            <div className='view-comment'>
                                {
                                    // this.state.comments.map((comment)=>{
                                    //     return(
                                    //         <Comment username={comment.username} content={comment.content} />
                                    //     )
                                    // })
                                }

                            </div>
                        </div>
                    </div>

                    <div className='side-bar-right'>
                        <div className='weekly-bar'>
                            <div className='bar-title'>
                                Weekly
          </div>
                            <Weekly />
                        </div>

                        <div className='ranking-bar'>
                            <div className='bar-title'>
                                Ranking
          </div>
                            <div className='bar-content'>
                                <Rank />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('state.post',state.post.post.post)
    return ({
        post: state.post.post.post
    })
}

const mapDispatchToProps = {
    fetchPostContent: fetchPostContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
