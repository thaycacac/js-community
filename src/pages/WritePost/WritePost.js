
import React, { Component } from 'react';
// Require Editor JS files.

import './WritePost.css';
import Header from './../header/Header';
import Menu from './../Menu/Menu';
import Editor1 from './Editor1';
import Editor2 from './Editor2';
import initialValue from './value.json'
import { Value } from 'slate';

export default class WritePost extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            hashtagString:'',
            hashtags:[],
            content:''
        }
    }
    
    
  
    render() {
        return (
            <div >
                <Header/>
                <Menu/>
                <div className='writing-container'>


                    <div className='writing-navigation'>
                        <div className='turn-back' >
                            <a href='/home'><i class="fa fa-chevron-left"></i> Back</a>
                        </div>

                        <button className='btn btn-primary btn-post'
                            onClick={() =>{
                                this.setState({content:localStorage.getItem('text')})
                                const res=this.state.hashtagString.split('/');
                                this.setState({hashtags:res});
                            }}
                        >
                            <i class="fa fa-paper-plane-o"></i> Post
                        </button>
                    </div>


                    <div className='writing-title'>
                        <form>
                            <input className='title-input' type='text' placeholder='Title'
                            onChange={event=>{
                                this.setState({title:event.target.value})
                            }}
                            />
                            <input className='hashtag-input' type='text' placeholder='hashtag : web/android/...'
                            onChange={event=>{
                                this.state.hashtagString = event.target.value;
                            }}
                            />
                        </form>
                    </div>
                    <div className='writing-content'>
                    <Editor2/>
                    {console.log('hashtags',this.state.hashtags)}
                    </div>
                    
                    <div className='writing-hint'>
                        <code>ctrl B</code> - <strong>bold</strong><br/>
                        <code>ctrl I</code> - <i>italy</i><br/>
                        <code>ctrl U</code> - <u>underline</u><br/>
                        <code>ctrl `</code> - <code>code</code><br/>
                        <i>- You must select the text before editing link</i><br/>
                        <i>- You can drag and drop images to the editor</i><br/>
                    </div>
                    </div>
                </div>

            
         )
     }  
};

