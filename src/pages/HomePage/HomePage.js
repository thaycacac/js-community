import React, { Component } from 'react'
import './HomePage.css'
import Header from './../header/Header'
import ShortPost from './../Post/ShortPost'
import Menu from './../Menu/Menu'
import { connect } from 'react-redux'
import { fetchPosts, fetchMorePosts } from '../../reducers/post/actions'
import Rank from './../sidebars/Rank'
import Hashtags from './../sidebars/Hashtags'
import SavedPost from './../sidebars/SavedPost'
import Weekly from './../sidebars/Weekly'
import InfiniteScroll from 'react-infinite-scroller';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      total_pages: 0,
      page: 0,
      hasMore : true,
      loadedPage : 0
    }
  }

  loadFunc = async () => {
      if (this.state.page === this.state.loadedPage) {
        await this.setState({loadedPage : this.state.page + 1});
        await this.props.fetchMorePosts(this.state.page ).then(async() => {
          const { posts, total_pages, page } = this.props.posts;
          await this.setState({ posts, total_pages, page : parseInt(page) + 1, hasMore : parseInt(page) + 1 < total_pages })
        })
      }
      
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


          <div className='home-main-content'>
          <InfiniteScroll
              pageStart={0}
              loadMore={() => {this.loadFunc()}}
              hasMore={this.state.hasMore}
              loader={<div className="loader center" key={0}>Đang tải thêm...</div>}
          >
            {
              this.state.posts.map(post => <ShortPost post={post} key={Math.random()}/>)
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

function mapStateToProps(state) {
  return ({
    posts: state.post.posts
  })
}
const mapDispatchToProps = {
  fetchPosts: fetchPosts,
  fetchMorePosts : fetchMorePosts
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);