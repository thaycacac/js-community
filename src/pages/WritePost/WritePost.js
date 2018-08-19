import React, { Component } from 'react';
// Require Editor JS files.
import { Editor } from 'slate-react';
import { Value } from 'slate';
import './WritePost.css';
import Header from './../header/Header';
import Menu from './../Menu/Menu';

const existingValue = JSON.parse(localStorage.getItem('content'))
const initialValue = Value.fromJSON(
  existingValue || {
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
                  text: '',
                },
              ],
            },
          ],
        },
      ],
    },
  }
)

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
        // Check to see if the document has changed before saving.
        if (value.document != this.state.value.document) {
          const content = JSON.stringify(value.toJSON())
          localStorage.setItem('content', content)
        }
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
                    placeholder='Enter content here...'
                    />
                    </div>
                    <button 
                    className='btn btn-success btn-clear'
                    onClick={()=>{
                        localStorage.clear();
                        alert('Clear successfully!');
                        window.location.reload();
                    }}
                    >
                    Clear
                    </button>
                    <div className='writing-hint'>
                        <code>ctrl B</code> - <strong>bold</strong><br/>
                        <code>ctrl I</code> - <i>italy</i><br/>
                        <code>ctrl U</code> - <u>underline</u><br/>
                        <code>ctrl `</code> - <code>code</code><br/>
                        <i>The content is saved as draft automatically.</i><br/>
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
