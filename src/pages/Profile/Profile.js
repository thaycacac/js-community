import React, { Component } from 'react';
import Header from './../header/Header';
import './Profile.css';
import ShortPost from './../Post/ShortPost';
import avatar from '../images/avatar.png';
import Menu from './../Menu/Menu';

export default class Profile extends Component{
  constructor(props){
    super(props);
      this.state={
        posts:[
          {
            id:'1',
            username:'Nguyễn Quang Linh',
            title:'Các loại bootstrap trong RxSwift',
            hashtag:['Swift','iOS'],
            like:'17',
            comment:'32'
          },
          {
            id:'2',
            username:'Phan Xuân Vũ',
            title:'Bootstrapping trong AngularJS',
            like:'45',
            comment:'35'
          },
          {
            id:'3',
            username:'Nguyễn Thái Bảo',
            title:'Class method: Một số vấn đề về Coding Standard',
            like:'1',
            comment:'0'
          },
          {
            id:'4',
            username:'Nguyễn Hoàng Hải',
            title:'hướng dẫn debug trong react native',
            like:'97',
            comment:'58'
          },
          {
            id:'5',
            username:'Wasd',
            title:'Vài ghi chép về V8 và Garbage Collection',
            like:'25',
            comment:'45'
          }
          ]
      }
  }
    render(){
        return(
        <div style={{ backgroundColor: '#e6e6e6' }}>
        <Header />
          <Menu/>
        <div className='profile-container'>

          <div className='profile'>
            <div className='avatar'><img src={avatar}/></div>
            <div className='bar-content'>
            <div className='username-profile'>Nguyễn Quang Linh</div>
            <div className='public-profile'>
              <table className='table-profile'>
                <tr>
                  <td>Date of birth:</td>
                  <td>13/04/1998</td>
                </tr>
                <tr>
                  <td>Total posts:</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Total votes:</td>
                  <td>54</td>
                </tr>
                <tr>
                  <td>Ranking:</td>
                  <td>#1</td>
                </tr>
              </table>
            </div>
            </div>
          </div>

          <div className='main-content'>
          {
            this.state.posts.map(post=>{
                console.log('username',post.username)
                return (
                  <ShortPost id={post.id} username={post.username} title={post.title} hashtag={post.hashtag}  like={post.like} comment={post.comment}/>
                )
              })
            
            
          }
          </div>
          </div>
        </div>
      
        )
    }
}