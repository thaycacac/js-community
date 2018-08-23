import React, { Component } from 'react';
// Require Editor JS files.

import './WritePost.css';
import Header from './../header/Header';
import Menu from './../Menu/Menu';
import Editor1 from './Editor1';
import Editor2 from './Editor2';

export default class WritePost extends Component {
    constructor(props){
        super(props);
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

                        <button className='btn btn-primary btn-post'>
                            <i class="fa fa-paper-plane-o"></i> Post
                        </button>
                    </div>


                    <div className='writing-title'>
                        <form>
                            <input className='title-input' type='text' placeholder='Title'/>
                        </form>
                    </div>
                    <div className='writing-content'>
                    <Editor2/>
                    </div>
                    
                    <div className='writing-hint'>
                        <code>ctrl B</code> - <strong>bold</strong><br/>
                        <code>ctrl I</code> - <i>italy</i><br/>
                        <code>ctrl U</code> - <u>underline</u><br/>
                        <code>ctrl `</code> - <code>code</code><br/>
                        <i>You must select the text before editing link</i><br/>

                    </div>
                    </div>
                </div>
            
        )
    }

    
};
