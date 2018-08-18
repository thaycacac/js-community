import React, { Component } from 'react';
// Require Editor JS files.
import { Editor } from 'slate-react';
import { Value } from 'slate';
import './WritePost.css';
import Header from './../header/Header';
import Menu from './../Menu/Menu';

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: 'A line of text in a paragraph.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
})

function CodeNode(props) {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }

  const boldPlugin = MarkHotkey({
    type: 'bold',
    key: 'b',
  })
// Initialize a plugin for each mark...
  const plugins = [
    MarkHotkey({ key: 'b', type: 'bold' }),
    MarkHotkey({ key: '`', type: 'code' }),
    MarkHotkey({ key: 'i', type: 'italic' }),
    MarkHotkey({ key: '~', type: 'strikethrough' }),
    MarkHotkey({ key: 'u', type: 'underline' }),
]

  function MarkHotkey(options) {
    const { type, key } = options

    return {
      onKeyDown(event, change) {
        if (!event.ctrlKey || event.key != key) return
        event.preventDefault()
        change.toggleMark(type)
        return true
      },
    }
  }
export default class WritePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: initialValue,
        }
    }

    onChange = ({ value }) => {
        this.setState({ value })
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
                    <Editor 
                    plugins={plugins}
                    value={this.state.value}
                    onChange={this.onChange}
                    renderMark={this.renderMark}
                    />
                    </div>

                </div>
            </div>
        )
    }

    renderNode = props => {
        switch (props.node.type) {
          case 'code':
            return <CodeNode {...props} />
        }
      }
    
      renderMark = props => {
        switch (props.mark.type) {
          case 'bold':
            return <strong>{props.children}</strong>
          // Add our new mark renderers...
          case 'code':
            return <code>{props.children}</code>
          case 'italic':
            return <em>{props.children}</em>
          case 'strikethrough':
            return <del>{props.children}</del>
          case 'underline':
            return <u>{props.children}</u>
        }
      }
};
