import React, { Component } from 'react';
import './Question.css';
import Header from './../header/Header';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ShortPost from './../Post/ShortPost';
import Menu from './../Menu/Menu';
import {connect} from 'react-redux'
import { fetchPosts, fetchMorePosts } from '../../reducers/post/actions'
import Rank from './../sidebars/Rank'
import Hashtags from './../sidebars/Hashtags'
import SavedPost from './../sidebars/SavedPost'
import Weekly from './../sidebars/Weekly'
import InfiniteScroll from 'react-infinite-scroller';
class Question extends Component {
  constructor(props){
    super(props);
      this.state={
        posts:[],
        total_pages : 0,
        page : 0,
        hasMore : true
      }
  }
  
  loadFunc = () => {
    this.props.fetchMorePosts(this.state.page ).then(() => {
      const { posts, total_pages, page } = this.props.posts;
      this.setState({ posts, total_pages, page, hasMore : parseInt(page) + 1 < total_pages });
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


          <div className='question-main-content'>
          <InfiniteScroll
              pageStart={0}
              loadMore={() => {this.loadFunc()}}
              hasMore={this.state.hasMore}
              loader={<div className="loader center" key={0}>Đang tải thêm...</div>}
          >
            {
              this.state.posts.map(post => {
                if(post.type==='QA'){return <ShortPost post={post} key={Math.random()}/>}
                return null;
              })
            }
          </InfiniteScroll>
            
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

function mapStateToProps(state){
  return({
      posts : state.post.posts
  })
}
const mapDispatchToProps = {
  fetchPosts : fetchPosts,
  fetchMorePosts : fetchMorePosts
};


export default connect(mapStateToProps,mapDispatchToProps)(Question);