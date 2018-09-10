import React, { Component } from 'react';
import './Header.css';
import Card from './Card';
import logoJS from '../images/logoJS.png';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {handleSubmitQuery, fetchPostsSuccess} from '../../reducers/post/actions'
class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
    async componentWillMount () {
        let token = await localStorage.getItem('accessToken');
        if (!token) {
           await browserHistory.push('/login')
        }
        this.setState({query : this.props.query});
    }
    onKeyDown = (e) => {
        if (e.keyCode === 13 && this.state.query) {
            this.props.fetchPostsSuccess({
                posts:[],
                total_pages : 0,
                page : 0,
                hasMore : true,
                loadedPage : 0,
                liked : [],
                total : 0
            })
            this.props.handleSubmitQuery(this.state.query, 'search');
            if (browserHistory.getCurrentLocation().pathname !== '/search') {
                setTimeout(() => {browserHistory.push('/search')}, 500);
            }
            
        }
    }
    render(){
        return( 
            <div className="header-container">
                <div className="title col-sm-3">
                    <a href='/home'>
                    <img src={logoJS} alt="logo JS" style={{height:'40px'}}/> JS Community
                    </a> 
                 
                 </div>
                <input className="form-control search col-sm-3" type='text' onKeyDown={this.onKeyDown}
                 placeholder='Search...' onChange={(event) => this.setState({query : event.target.value})}
                 value={this.state.query}/>
                <div className='write-a-post col-sm-2'>
                <a href='/writepost'>
                    <i className="fa fa-pencil-square-o"></i> Write a post 
                </a> 
                </div>
                <Card auth = {this.props.auth}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const auth = state.auth.reducer;
    const query = state.post.posts.query;
    return { auth, query }
}
const mapDispatchToProps = {
    handleSubmitQuery: handleSubmitQuery,
    fetchPostsSuccess: fetchPostsSuccess
  };
export default connect(mapStateToProps, mapDispatchToProps)(Header)