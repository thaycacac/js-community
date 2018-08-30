import React, { Component } from 'react';
import './WritePost.css';
import { Editor } from 'slate-react';
import { Value } from 'slate';


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
        if (!event.ctrlKey || event.key !== key) return
        event.preventDefault()
        change.toggleMark(type)
        return true
      },
    }
  }

export default class Editor1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: initialValue,
        }
    }
    onChange = ({ value }) => {
        // Check to see if the document has changed before saving.
        if (value.document !== this.state.value.document) {
          const content = JSON.stringify(value.toJSON())
          localStorage.setItem('content', content)
        }
        this.setState({ value })
      }
    render(){
        return(
            <div className='writing-content'>
                    <Editor 
                    plugins={plugins}
                    value={this.state.value}
                    onChange={this.onChange}
                    renderMark={this.renderMark}
                    placeholder='Enter content here...'
                    />
                    </div>
        )
    }
    renderNode = props => {
        switch (props.node.type) {
          case 'code':
            return <CodeNode {...props} />
          default:
            return null;
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
          default: 
            return null;
        }
      }
};
