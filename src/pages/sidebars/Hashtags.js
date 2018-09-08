import React, { Component } from "react";
import { fetchAllHashtags } from "../../reducers/hashtag/actions";
import { connect } from "react-redux";

class Hashtags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtags: []
    };
  }

  componentWillMount() {
    this.props.fetchAllHashtags().then(() => {
      const hashtags = this.props.hashtags;
      this.setState({ hashtags });
      console.log("hashtags", hashtags);
    });
  }

  renderHashtags() {
    return this.state.hashtags.map(hashtag => {
      return (
        <a
          style={{
            marginLeft: "5px",
            border: "1px solid #5bc0de",
            padding: "3px",
            borderRadius: "4px",

            textDecoration: "none",
            color: "#5bc0de",
            cursor: "pointer"
          }}
        >
          {hashtag.hashtag}
        </a>
      );
    });
  }
  render() {
    return <div>{this.renderHashtags()}</div>;
  }
}

function mapStateToProps(state) {
  // console.log('state',state)
  return {
    hashtags: state.hashtags.allHashtags.hashTags
  };
}
const mapDispatchToProps = {
  fetchAllHashtags: fetchAllHashtags
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hashtags);
