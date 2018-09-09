import React, { Component } from 'react';
import './Search.css';
import Header from './../header/Header';
import ShortPost from './../Post/ShortPost';
import Menu from './../Menu/Menu';
import {connect} from 'react-redux'
import { fetchPosts, fetchMorePosts, fetchLikeHistory } from '../../reducers/post/actions'
import Rank from './../sidebars/Rank'
import Hashtags from './../sidebars/Hashtags'
import SavedPost from './../sidebars/SavedPost'
import Weekly from './../sidebars/Weekly'
import InfiniteScroll from 'react-infinite-scroller';
class Search extends Component {
  constructor(props){
    super(props);
      this.state={
        posts:[],
        total_pages : 1,
        page : 0,
        hasMore : true,
        loadedPage : 0,
        liked : [],
        query: '',
        total : 0
      }
  }
  componentDidUpdate() {
    const {query} = this.props.posts;
    
    if (query && query !== this.state.query) {
      console.log(query)
      this.setState({query, hasMore : true});
    }

  }
  componentWillMount() {
    const {query} = this.props.posts;
    this.setState({query});
    this.props.fetchLikeHistory().then(() => {
      const list = this.props.liked.map(element => element && element.postId)
      this.setState({liked : list})
    }).catch(err => {console.log(err)})
  }
  loadFunc = async () => {
    // if (this.state.query) {
    //   this.setState({hasMore : true})
    // } else {
    //   this.setState({hasMore : false})
    // }
    if (!this.state.query) {
      this.setState({hasMore : false})
    }
    if (this.state.page === this.state.loadedPage && this.state.page < this.state.total_pages && this.state.query) {
      await this.setState({loadedPage : this.state.page + 1});
      await this.props.fetchMorePosts(this.state.page, `post/search?q=${this.state.query}` ).then(async() => {
        console.log(this.props.posts);
        const { posts, total_pages, page, total } = this.props.posts;
        await this.setState({ posts, total_pages, page : parseInt(page) + 1, hasMore : parseInt(page) + 1 < total_pages, total })
      })
    }
  }
  handleLoadFunction = () => {
    setTimeout(() => {this.loadFunc()}, 2000);
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


          <div className='blog-main-content'>
            <div style={{fontSize:'18px', margin: '5px'}}>
               Có tổng cộng {this.state.total ? this.state.total : 0} kết quả 
               tìm kiếm {this.state.query ? 'cho ' + this.state.query : ' '}
              
            </div>
          <InfiniteScroll
              pageStart={0}
              loadMore={() => {this.handleLoadFunction()}}
              hasMore={this.state.hasMore}
              loader={<div className="loader center" key={0}>Đang tải thêm...</div>}
          >
            {
              this.state.posts && this.state.posts.map(post => (<ShortPost post={post} liked={this.state.liked} key={Math.random()} />))
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
      posts : state.post.posts,
      liked : state.post.posts.liked
  })
}
const mapDispatchToProps = {
  fetchPosts : fetchPosts,
  fetchMorePosts: fetchMorePosts,
  fetchLikeHistory: fetchLikeHistory
};


export default connect(mapStateToProps,mapDispatchToProps)(Search);