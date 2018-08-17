import React, { Component } from 'react';
import './Post.css';
import Header from './../header/Header';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import avatar from '../images/avatar.png';
import Comment from './Comment';
import Menu from './../Menu/Menu';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            username:'',
            author: 'Nguyễn Quang Linh',
            title: 'Các loại bootstrap trong RxSwift',
            postHashtags: ['iOS', 'Swift'],
            like: '17',
            numberOfComment: '32',
            content:'Incididunt dolor laboris dolor et cupidatat magna labore veniam enim aute consequat. Amet consectetur id magna dolor et laboris anim excepteur. Velit elit veniam aliquip amet irure ipsum officia mollit ea ut minim quis mollit anim.',
            ranking:[
              {
                username:'',
                votes:''
              }
            ],
            hashtags:[],
            activities:[
              {
                date:'',
                activity:''
              }
            ],
            comments:[
                {
                    username:'Vu Phan',
                    content:'Nice!'
                },
                {
                    username:'The Uranus',
                    content:'I love you <3'
                }
            ],
            newComment:'',
        }
    }
    render() {
        return (
            <div style={{ backgroundColor: '#e6e6e6' }}>
                <Header />

                <Menu />

                <div className='post-container'>

                    <div className='saved-post-bar'>
                        <div className='bar-title'>
                            Saved post
        </div>
                        <div className='bar-content'>
                            No saved post.
        </div>
                    </div>

                    <div className='hashtag-bar'>
                        <div className='bar-title'>
                            #Hashtag
          </div>

                        <div className='bar-content'>
                        {
                            // this.state.hashtags.map((hashtag)=>{
                            //   return(<a>{hashtag}</a> )
                              
                            // })
                        }
                            <a>#android</a>
                            <a>#web</a>
                            <a>#machineLearning</a>
                            <a>#iOS</a>
                            <a>#AI</a>
                            <a>#tricks</a>
                            <a>#share</a>
                        </div>
                    </div>

                    <div className='main-content'>
                        <div className='user-avatar'>
                            <img src={avatar} />
                        </div>

                        <div className='short-description'>
                            <div className='post-title'>
                                {this.state.title}
                            </div>
                            <p className='username'><a href='/profile'>{this.state.author}</a></p>


                            <div className='user-interact'>
                                <div className='main-hashtag'>
                                    {
                                        this.state.postHashtags.map(hashtag=>{
                                            return(
                                                <span className='hashtag'><a>{hashtag}</a></span>
                                            )
                                        })
                                    }
                                </div>
                                <i class="fa fa-comment-o" style={{ fontSize: '15px', marginLeft: '10px' }}>{this.state.numberOfComment}</i>
                                <i class="fa fa-thumbs-o-up" style={{ fontSize: '15px' }}>{this.state.like} </i>
                                
                            </div>
                        </div>

                        <div className='post-content'>
                            {this.state.content}
                        </div>
                        <button className='btn btn-sm btn-primary' style={{width:'60px',float:'right',marginRight:'10px'}}><i class="fa fa-thumbs-o-up" style={{ fontSize: '15px' }}></i> Like</button>
                    </div>

                    <div className='interaction'>
                        <div className='add-comment'>
                            <h4>Comment</h4>
                            <textarea placeholder='Add comment here...' onChange={event=>{this.setState(this.state.newComment=event.target.value)}}></textarea>
                            <button className='btn btn-primary' 
                                style={{ float: 'right', width: '70px' }}
                                   
                            >
                            Post
                            </button>
                        </div>
                        <div className='view-comment'>
                        {
                            this.state.comments.map((comment)=>{
                                return(
                                    <Comment username={comment.username} content={comment.content} />
                                )
                            })
                        }
                            
                        </div>
                    </div>
                    <div className='weekly-bar'>
                        <div className='bar-title'>
                            Weekly
          </div>
                        <div className='bar-content'>
                        {
                            // this.state.activities.map((date,activity)=>{
                            //   return(
                            //     <li>{date} - {activity}</li>
                            //   )
                            // })
                        }
                            No activities yet.
          </div>
                    </div>

                    <div className='ranking-bar'>
                        <div className='bar-title'>
                            Ranking
          </div>
                        <div className='bar-content'>
                            <table className='ranking-table' >

                                <tr>
                                    <th>#</th>
                                    <th>User</th>
                                    <th>Votes</th>
                                </tr>
                                {
                                    // this.state.ranking.map((rank,username,votes)=>{
                                    //   return(
                                    //     <tr>
                                    //     <td>{rank}</td>
                                    //     <td>{username}</td>
                                    //     <td>{votes}</td>
                                    //     </tr>
                                    //   )
                                    // })
                                  }
                                <tr>
                                    <td>1</td>
                                    <td>Wasd</td>
                                    <td>696</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Vũ Phan</td>
                                    <td>569</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>The Uranus</td>
                                    <td>496</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Hoàng Hải</td>
                                    <td>369</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
