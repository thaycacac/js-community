import React, { Component } from 'react';
import './Blog.css';
import Header from './../header/Header';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ShortPost from './../Post/ShortPost';
import Menu from './../Menu/Menu';

export default class Blog extends Component {
  constructor(props){
    super(props);
      this.state={
        email:'',
        username:'user',
        posts:[
          {
            id:'1',
            author:'Nguyễn Quang Linh',
            title:'Các loại bootstrap trong RxSwift',
            like:'17',
            comment:'32'
          },
          {
            id:'2',
            author:'Phan Xuân Vũ',
            title:'Bootstrapping trong AngularJS',
            like:'45',
            comment:'35'
          },
          {
            id:'3',
            author:'Nguyễn Thái Bảo',
            title:'Class method: Một số vấn đề về Coding Standard',
            like:'1',
            comment:'0'
          },
          {
            id:'4',
            author:'Nguyễn Hoàng Hải',
            title:'hướng dẫn debug trong react native',
            like:'97',
            comment:'58'
          },
          {
            id:'5',
            author:'Wasd',
            title:'Vài ghi chép về V8 và Garbage Collection',
            like:'25',
            comment:'45'
          }
          ],
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
          ]
      }
  }

  render() {
    return (
      <div style={{ backgroundColor: '#f2f2f2' }}>
        <Header />

        <Menu/>


        <div className='blog-container'>

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
            {
              this.state.posts.map(post=>{
                  console.log('username',post.username)
                  return (
                    <ShortPost id={post.id} username={post.username} title={post.title} hashtag={post.hashtag}  like={post.like} comment={post.comment}/>
                  )
                })
              
              
            }

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
