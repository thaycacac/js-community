
import React, { Component } from 'react';
// Require Editor JS files.
import './WritePost.css'
import Header from './../header/Header'
import Menu from './../Menu/Menu'
import TextEditor from './Editor1'
// import Editor2 from './Editor2'
// import initialValue from './value.json'
// import { Value } from 'slate'
import {addPost} from '../../reducers/addPost/actions'
import { connect } from 'react-redux'

class WritePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hashtagString: '',
            hashtags: [],
            content: '',
            type:'Blog',
        }
    }
    addPost(){
        const text = localStorage.getItem('text')
        // console.log('text',text);
        // console.log('this.state', this.state.title, localStorage.getItem('text'), this.state.type, this.state.hashtags)
        this.props.addPost(localStorage.getItem('userId'),this.state.title,  text, this.state.type, this.state.hashtags)
    }

    render() {
        return (
            <div >
                <Header />
                <Menu />
                <div className='writing-container'>


                    <div className='writing-navigation'>
                        <div className='turn-back' >
                            <a href='/home'><i className="fa fa-chevron-left"></i> Back</a>
                        </div>

                        <button className='btn btn-primary btn-post'
                            onClick={() => {
                                this.addPost();
                            }}
                        >
                            <i className="fa fa-paper-plane-o"></i> Post
                        </button>
                    </div>


                    <div className='writing-title'>
                        <form>
                            <select className='select-type' onChange={event => {
                                this.setState({type:event.target.value})
                                // console.log('type',this.state.type)
                            }}>
                                <option value='Blog' selected>Blog</option>
                                <option value='QA'>QA</option>
                                <option value='TextBook'>TextBook</option>
                            </select>
                            <input className='title-input' type='text' placeholder='Title'
                                onChange={event => {
                                    this.setState({ title: event.target.value })
                                }}
                            />
                            <input className='hashtag-input' type='text' placeholder='hashtag : web,android,...'
                                onChange={event => {
                                    // this.state.hashtagString = event.target.value;
                                    this.setState({ hashtagString: event.target.value });
                                    const res = this.state.hashtagString.split(',');
                                    this.setState({ hashtags: res });
                                }}
                            />

                        </form>
                    </div>
                    <div className='writing-content'>
                        <TextEditor/>
                        {
                            // console.log('hashtags', this.state.hashtags)
                        }
                    </div>

                    <div className='writing-hint'>
                        <code>ctrl B</code> - <strong>bold</strong><br />
                        <code>ctrl I</code> - <i>italy</i><br />
                        <code>ctrl U</code> - <u>underline</u><br />
                        <code>ctrl `</code> - <code>code</code><br />
                        <i>- You must select the text before editing link</i><br />
                        <i>- You can drag and drop images to the editor</i><br />
                    </div>
                </div>
            </div>


        )
    }
};

const mapDispatchToProps = {
    addPost : addPost
}

export default connect(null,mapDispatchToProps)(WritePost)