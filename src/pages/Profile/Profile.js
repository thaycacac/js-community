import React, { Component } from 'react';
import Header from './../header/Header';
import './Profile.css';
// import ShortPost from './../Post/ShortPost';
// import avatar from '../images/avatar.png';
import Menu from './../Menu/Menu';
import { fetchRank } from '../../reducers/profile/actions';
import { connect } from 'react-redux';

class Profile extends Component{
  constructor(props){
    super(props);
      this.state={
        posts:[],
        rank: {},
        // userId: localStorage.getItem('userId')
      }
  }

  componentWillMount() {
      this.props.fetchRank(localStorage.getItem('userId')).then(() => {
        const rank = this.props.rank;
        // const userId = rank.userId;
        // const name = rank.name;
        // const avatar = rank.avatar;
        // const total_votes = rank.total_votes;
        // const top = rank.top;
        // console.log(rank);
        this.setState({ rank })
      })
  }

    render(){
        return(
        <div style={{ backgroundColor: '#e6f2f2f2e6e6' }}>
        <Header />
          <Menu/>
        <div className='profile-container'>

          <div className='profile'>
            <div className='avatar'><img src={this.state.rank.avatar} alt="avatar" style={{borderRadius: '100px'}}/></div>
            <div className='bar-content'>
            <div className='username-profile'>{this.state.rank.name}</div>
            <div className='public-profile'>
              <table className='table-profile'>
              <tbody> 
                <tr>
                  <td>Total posts:</td>
                  <td>null</td>
                </tr>
                <tr>
                  <td>Total votes:</td>
                  <td>{this.state.rank.total_votes}</td>
                </tr>
                <tr>
                  <td>Top ranking:</td>
                  <td>{this.state.rank.top}</td>
                </tr>
              </tbody>
              </table>
            </div>
            </div>
          </div>

          <div className='profile-main-content'>
          <span style={{margin:'40px' }}>You have no post yet</span>
          {
            // this.state.posts.map(post=>{
            //     console.log('username',post.username)
            //     return (
                  // <ShortPost id={post.id} username={post.username} title={post.title} hashtag={post.hashtag}  like={post.like} comment={post.comment}/>
            //     )
            //   })
            
            
          }
          </div>
          </div>
        </div>
      
        )
    }
}

function mapStateToProps(state) {
  // console.log('state',state)
  return ({
    posts : state.posts,
    rank: state.profileRank.profileRank.rank
  })
}

const mapDispatchToProps = {
  fetchRank:fetchRank
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);