import React, { Component } from 'react';
import './Textbook.css';
import Header from './../header/Header';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ShortPost from './../Post/ShortPost';
import Menu from './../Menu/Menu';
import {connect} from 'react-redux'
import { fetchPosts } from '../../reducers/post/actions'
import Rank from './../sidebars/Rank'
import Hashtags from './../sidebars/Hashtags'
import SavedPost from './../sidebars/SavedPost'
import Weekly from './../sidebars/Weekly'

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

        <div className='newfeed-container'>

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
              <Hashtags/>
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
            <Weekly/>
          </div>

          <div className='ranking-bar'>
            <div className='bar-title'>
              Ranking
          </div>
            <div className='bar-content'>
              <Rank/>
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