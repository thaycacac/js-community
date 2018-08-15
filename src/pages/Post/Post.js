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
            username: 'Nguyễn Quang Linh',
            title: 'Các loại bootstrap trong RxSwift',
            hashtag: ['iOS', 'Swift'],
            like: '',
            comment: ''
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
                            <p className='username'><a href='/profile'>{this.state.username}</a></p>


                            <div className='user-interact'>
                                <div className='main-hashtag'>
                                    <span className='hashtag'><a>Swift</a></span>
                                    <span className='hashtag'><a>iOS</a></span>
                                </div>
                                <i class="fa fa-thumbs-o-up" style={{ fontSize: '15px' }}>17 </i>
                                <i class="fa fa-comment-o" style={{ fontSize: '15px', marginLeft: '10px' }}>32</i>
                            </div>
                        </div>

                        <div className='post-content'>
                            Incididunt dolor laboris dolor et cupidatat magna labore veniam enim aute consequat. Amet consectetur id magna dolor et laboris anim excepteur. Velit elit veniam aliquip amet irure ipsum officia mollit ea ut minim quis mollit anim.
                            Amet occaecat eu amet est tempor cupidatat elit eiusmod ea proident sit esse ex ullamco. Aute sint ut adipisicing adipisicing ad culpa officia reprehenderit ea. Officia est ullamco sunt cillum do exercitation. Nostrud nostrud cupidatat
                            laborum commodo magna esse ipsum est tempor sint incididunt consectetur.
   
                           Quis occaecat Lorem fugiat consectetur occaecat occaecat pariatur velit pariatur adipisicing eu anim ipsum velit. Ipsum sit culpa aliquip non. Nostrud proident labore eu tempor enim laborum exercitation veniam labore deserunt deserunt deserunt.
                           Id do pariatur cupidatat tempor officia duis. Id fugiat nostrud Lorem sunt qui. Cillum enim culpa ipsum non laboris consectetur irure incididunt esse nulla proident.
                        </div>
                    </div>

                    <div className='interaction'>
                        <div className='add-comment'>
                            <h4>Comment</h4>
                            <textarea placeholder='Add comment here...'></textarea>
                            <button className='btn btn-primary' style={{ float: 'right', width: '70px' }}>Post</button>
                        </div>
                        <div className='view-comment'>
                            <Comment username='Vu Phan' content='Nice!' />
                            <Comment username='The Uranus' content='I love you <3' />
                        </div>
                    </div>
                    <div className='weekly-bar'>
                        <div className='bar-title'>
                            Weekly
          </div>
                        <div className='bar-content'>
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
