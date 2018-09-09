import React, { Component } from "react";
import "./Post.css";
import Header from "./../header/Header";
// import { Navbar, Nav, NavItem } from 'react-bootstrap'
import avatar from "../images/avatar.png";
import Comment from "./Comment";
import Menu from "./../Menu/Menu";
import { Link } from "react-router";
import {
  fetchPostContent,
  fetchLikeHistory
} from "../../reducers/post/actions";
import { connect } from "react-redux";
import Rank from "./../sidebars/Rank";
import Hashtags from "./../sidebars/Hashtags";
import SavedPost from "./../sidebars/SavedPost";
import Weekly from "./../sidebars/Weekly";
import { fetchPostLike, fetchPostComment } from "../../reducers/post/actions";
import { addComment, addLike } from "../../reducers/postInteraction/actions";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // postId: 0,
      // authorId: 0,
      // authorName: '',
      // authorAvatar: null,
      // authorDescription: '',
      // title: '',
      // content: '',
      // created_at: '',
      // type: '',
      total_comments: 0,
      total_likes: 0,
      post: {},
      newComment: "",
      liked: false,
      likes: [],
      comments: [],
      listLiked: []
    };
  }

  componentWillMount() {
    this.props.fetchPostContent(this.props.params.postId).then(() => {
      const post = this.props.post;
      const total_likes = post.total_likes;
      const total_comments = post.total_comments;
      this.setState({ post, total_likes, total_comments });
    });
    this.props.fetchPostComment(this.props.params.postId).then(() => {
      const comments = this.props.comments.comments;
      this.setState({ comments });
    });
    this.props.fetchPostLike(this.props.params.postId).then(() => {
      const likes = this.props.likes.likes;
      this.setState({ likes });
    });
    this.props
      .fetchLikeHistory()
      .then(() => {
        const list = this.props.liked.map(element => element && element.postId);
        this.setState({ listLiked: list });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderComments() {
    if (this.state.comments.length > 0) {
      return this.state.comments.map(comment => (
        <Comment
          username={comment.userName}
          content={comment.content}
          userAvatar={comment.userAvatar}
          key={Math.random()}
        />
      ));
    } else {
      return <i style={{ margin: "30px" }}>No comment yet</i>;
    }
  }

  render() {
    const isLiked =
      this.state.listLiked &&
      this.state.listLiked.includes(this.state.post.postId);
    return (
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <Header />

        <Menu />

        <div className="newfeed-container">
          <div className="side-bar-left">
            <div className="saved-post-bar">
              <div className="bar-title">Saved post</div>
              <div className="bar-content">
                <SavedPost />
              </div>
            </div>

            <div className="hashtag-bar">
              <div className="bar-title">#Hashtag</div>

              <div className="bar-content">
                <Hashtags />
              </div>
            </div>
          </div>

          <div className="content-1">
            <div className="main-post-content">
              <div className="user-avatar">
                <img
                  src={
                    this.state.post.authorAvatar === null
                      ? avatar
                      : this.state.post.authorAvatar
                  }
                  alt="avatar"
                />
              </div>

              <div className="short-description">
                <div className="post-title">{this.state.post.title}</div>
                <p className="username">
                  <Link to={`/profile/${this.state.post.authorId}`}>
                    {this.state.post.authorName}
                  </Link>
                </p>

                <div className="user-interact" style={{ fontSize: "18px" }}>
                  <div className="main-hashtag">
                    {
                      // this.state.post.hashtags.map(hashtag=>{
                      //     return(
                      //         <span className='hashtag'><a>{hashtag}</a></span>
                      //     )
                      // })
                    }
                  </div>
                  <i
                    className="fa fa-comment-o"
                    style={{ fontSize: "14px", marginLeft: "10px" }}
                  >
                    {this.state.total_comments}
                  </i>
                  <i
                    className="fa fa-thumbs-o-up"
                    style={{ fontSize: "14px", color: isLiked && "#3578E5" }}
                  >
                    {" "}
                    {this.state.total_likes}
                  </i>
                </div>
              </div>

              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: this.state.post.content }}
              />
              {isLiked ? (
                <button
                  className="btn btn-sm btn-primary"
                  style={{
                    width: "60px",
                    float: "right",
                    marginRight: "10px",
                    marginBottom: "20px"
                  }}
                  disabled
                >
                  Liked
                </button>
              ) : (
                <button
                  className="btn btn-sm btn-primary"
                  style={{
                    width: "60px",
                    float: "right",
                    marginRight: "10px",
                    marginBottom: "20px"
                  }}
                  onClick={async () => {
                    if (!this.state.liked) {
                      this.setState({
                        total_likes: this.state.total_likes + 1,
                        liked: true
                      });
                      this.props
                        .addLike(
                          this.props.params.postId,
                          localStorage.getItem("userId")
                        )
                        .then(async () => {
                          // console.log(this.props.params.postId);
                          this.props
                            .fetchLikeHistory()
                            .then(async () => {
                              const list = await this.props.liked.map(
                                element => element && element.postId
                              );
                              await this.setState({ listLiked: list });
                              // console.log(this.state.listLiked)
                            })
                            .catch(err => {
                              console.log(err);
                            });
                        });
                    } else {
                      this.setState({
                        total_likes: this.state.total_likes - 1,
                        liked: false
                      });
                    }
                  }}
                >
                  <i
                    className="fa fa-thumbs-o-up"
                    style={{ fontSize: "16px",marginRight:'5px' }}
                  />
                   Like
                </button>
              )}
            </div>

            <div className="interaction">
              <div className="add-comment">
                <h4>Comment</h4>
                <textarea
                  placeholder="Add comment here..."
                  onChange={event => {
                    this.setState({ newComment: event.target.value });
                  }}
                />
                <button
                  className="btn btn-primary"
                  style={{ float: "right", width: "70px" }}
                  onClick={() => {
                    this.props.addComment(
                      this.props.params.postId,
                      localStorage.getItem("userId"),
                      this.state.newComment
                    );
                    this.props
                      .fetchPostComment(this.props.params.postId)
                      .then(() => {
                        const comments = this.props.comments.comments;
                        this.setState({ comments });
                        window.location.reload();
                      });
                  }}
                >
                  Post
                </button>
              </div>
              <div className="view-comment">{this.renderComments()}</div>
            </div>
          </div>

          <div className="side-bar-right">
            <div className="weekly-bar">
              <div className="bar-title">Weekly</div>
              <Weekly />
            </div>

            <div className="ranking-bar">
              <div className="bar-title">Ranking</div>
              <div className="bar-content">
                <Rank />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post.post.post,
    likes: state.post.likes,
    comments: state.post.comments,
    liked: state.post.posts.liked
  };
}

const mapDispatchToProps = {
  fetchPostContent: fetchPostContent,
  fetchPostLike: fetchPostLike,
  fetchPostComment: fetchPostComment,
  addComment: addComment,
  addLike: addLike,
  fetchLikeHistory: fetchLikeHistory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
