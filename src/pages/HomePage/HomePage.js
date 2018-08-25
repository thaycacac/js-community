import React, { Component } from 'react'
import './HomePage.css'
import Header from './../header/Header'
import ShortPost from './../Post/ShortPost'
import Menu from './../Menu/Menu'
import {} from '../../reducers/auth/actions'
import { fetchPostsWithRedux } from './../../utils/fetch'
import {connect} from 'react-redux'

export default class HomePage extends Component {
  constructor(props){
    super(props);
      this.state={
        posts:[],
      }
  }
  
  componentDidMount(){
    // fetch('https://jscommunity-server.azurewebsites.net/post/get?page=1')
    // .then((res)=>res.json())
    // .then((data) =>{
    //   let posts= data.posts;
    //   this.setState({posts});
    // })

    fetchPostsWithRedux();
    
    console.log('posts',this.state.posts);
  }

  render() {
    return (
      <div style={{ backgroundColor: '#f2f2f2' }}>
        <Header />

        <Menu/>

        <div className='newfeed-container'>

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
              this.state.posts.map(post => <ShortPost post={post}/>)
            }
          </div>

          <div className='weekly-bar'>
            <div className='bar-title'>
            Weekly
          </div>
            <div className='bar-content'>
            <ul>
            {
                // this.state.activities.map((date,activity)=>{
                //   return(
                //     <li>{date} - {activity}</li>
                //   )
                // })
            }
            </ul>
              No activities yet.
          </div>
          <a href='/event'>Detail>></a>
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

function mapStateToProps(state){
  const {posts}=state;
  return{
      posts
  }
}

 connect(mapStateToProps,{fetchPostsWithRedux})(HomePage);