import React, { Component } from 'react';
import './Textbook.css';
import Header from './../header/Header';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ShortPost from './../Post/ShortPost';
import Menu from './../Menu/Menu';
import {connect} from 'react-redux'
import { fetchPosts } from '../../reducers/post/actions'

class Textbook extends Component {
  constructor(props){
    super(props);
      this.state={
        posts:[],
        total_pages : 0,
        page : 0
      }
  }
  
  componentWillMount(){
    this.props.fetchPosts(0).then(() => {
      const {posts, total_pages, page} = this.props.posts;
      this.setState({posts, total_pages, page})
    })
    
  }
  
  render() {
    return (
      <div style={{ backgroundColor: '#f2f2f2' }}>
        <Header />

        <Menu/>


        <div className='textbook-container'>

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
            {
              // this.state.activities.map((date,activity)=>{
              //   return(
              //     <li>{date} - {activity}</li>
              //   )
              // })
          }
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
  console.log(state.post.posts)
  return({
      posts : state.post.posts
  })
}
const mapDispatchToProps = {
  fetchPosts : fetchPosts
};


export default connect(mapStateToProps,mapDispatchToProps)(Textbook);