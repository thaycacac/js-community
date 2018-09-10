import { Editor, getEventRange, getEventTransfer  } from 'slate-react'
import { Block,Value } from 'slate'
import styled from 'react-emotion'
import { LAST_CHILD_TYPE_INVALID } from 'slate-schema-violations'
import React from 'react'
// import initialValue from './value.json'
import imageExtensions from 'image-extensions'
import isUrl from 'is-url'
import Html from 'slate-html-serializer'
import { isKeyHotkey } from 'is-hotkey'
import { Button, Icon, Toolbar } from '../components'


const BLOCK_TAGS = {
  blockquote: 'quote',
  p: 'paragraph',
  pre: 'code',
}
// Add a dictionary of mark tags.
const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underline',
}
const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()]
      if (type) {
        return {
          object: 'block',
          type: type,
          data: {
            className: el.getAttribute('class'),
          },
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'block') {
        switch (obj.type) {
          case 'code':
            return (
              <pre>
                <code>{children}</code>
              </pre>
            )
          case 'paragraph':
            return <p className={obj.data.get('className')}>{children}</p>
          case 'quote':
            return <blockquote>{children}</blockquote>
          case 'image':
            return <img src={children}/>
        }
      }
    },
  },
  // Add a new rule that handles marks...
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()]
      if (type) {
        return {
          object: 'mark',
          type: type,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>
          case 'italic':
            return <em>{children}</em>
          case 'underline':
            return <u>{children}</u>
        }
      }
    },
  },
]
/**
 * A change helper to standardize wrapping links.
 *
 * @param {Change} change
 * @param {String} href
 */

// Create a new serializer instance with our `rules` from above.
const html = new Html({ rules })
const initialValue = localStorage.getItem('content') || '<p></p>'
function wrapLink(change, href) {
    change.wrapInline({
      type: 'link',
      data: { href },
    })
  
    change.moveToEnd()
  }
  
  /**
   * A change helper to standardize unwrapping links.
   *
   * @param {Change} change
   */
  
  function unwrapLink(change) {
    change.unwrapInline('link')
  }
  
/**
 * Define the default node type.
 *
 * @type {String}
 */

const DEFAULT_NODE = 'paragraph'

/**
 * Define hotkey matchers.
 *
 * @type {Function}
 */

const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')
const isCodeHotkey = isKeyHotkey('mod+`')

/**
 * The rich text example.
 *
 * @type {Component}
 */

 /**
 * A styled image block component.
 *
 * @type {Component}
 */

const Image = styled('img')`
display: block;
max-width: 100%;
max-height: 20em;
box-shadow: ${props => (props.selected ? '0 0 0 2px blue;' : 'none')};
`

/*
* A function to determine whether a URL has an image extension.
*
* @param {String} url
* @return {Boolean}
*/

function isImage(url) {
return !!imageExtensions.find(url.endsWith)
}

/**
* A change function to standardize inserting images.
*
* @param {Change} change
* @param {String} src
* @param {Range} target
*/

function insertImage(change, src, target) {
if (target) {
  change.select(target)
}

change.insertBlock({
  type: 'image',
  isVoid: true,
  data: { src },
})
}

/**
* A schema to enforce that there's always a paragraph as the last block.
*
* @type {Object}
*/

const schema = {
document: {
  last: { type: 'paragraph' },
  normalize: (change, { code, node, child }) => {
    switch (code) {
      case LAST_CHILD_TYPE_INVALID: {
        const paragraph = Block.create('paragraph')
        return change.insertNodeByKey(node.key, node.nodes.size, paragraph)
      }
      default: 
        return null;
    }
  },
},
}


class RichText extends React.Component {
  /**
   * Deserialize the initial editor value.
   *
   * @type {Object}
   */

  state = {
    value:  html.deserialize(initialValue),
  }

  /**
   * Check whether the current selection has a link in it.
   *
   * @return {Boolean} hasLinks
   */

  hasLinks = () => {
    const { value } = this.state
    return value.inlines.some(inline => inline.type === 'link')
  }

  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @param {String} type
   * @return {Boolean}
   */

  hasMark = type => {
    const { value } = this.state
    return value.activeMarks.some(mark => mark.type === type)
  }

  /**
   * Check if the any of the currently selected blocks are of `type`.
   *
   * @param {String} type
   * @return {Boolean}
   */

  hasBlock = type => {
    const { value } = this.state
    return value.blocks.some(node => node.type === type)
  }

  /**
   * Render.
   *
   * @return {Element}
   */

  render() {
    return (
      <div>
        <Toolbar>
          {this.renderMarkButton('bold', <b>B</b>)}
          {this.renderMarkButton('italic', <i>I</i>)}
          {this.renderMarkButton('underlined', <u>U</u>)}
          {this.renderMarkButton('code', '<>')}
          {this.renderBlockButton('heading-one', 'h1')}
          {this.renderBlockButton('heading-two', 'h2')}
          {this.renderBlockButton('block-quote', "quote")}
          {this.renderBlockButton('numbered-list', 'ul')}
          {this.renderBlockButton('bulleted-list', 'ol')}
          <Button onMouseDown={this.onClickImage}>
            <Icon><i className="fa fa-file-image-o"></i></Icon>
          </Button>
          <Button active={this.hasLinks()} onMouseDown={this.onClickLink}>
            <Icon><i className="fa fa-link"></i></Icon>
          </Button>
        </Toolbar>
        <Editor
          spellCheck
          autoFocus
          placeholder="Enter content here..."
          value={this.state.value}
          schema={schema}
          onChange={this.onChange}
          onDrop={this.onDropOrPaste}
          onPaste={this.onDropOrPaste}
          onKeyDown={this.onKeyDown}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
          
        />
      </div>
    )
  }

  /**
   * Render a mark-toggling toolbar button.
   *
   * @param {String} type
   * @param {String} icon
   * @return {Element}
   */

  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type)

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }

  /**
   * Render a block-toggling toolbar button.
   *
   * @param {String} type
   * @param {String} icon
   * @return {Element}
   */

  renderBlockButton = (type, icon) => {
    let isActive = this.hasBlock(type)

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const { value } = this.state
      const parent = value.document.getParent(value.blocks.first().key)
      isActive = this.hasBlock('list-item') && parent && parent.type === type
    }

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickBlock(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }

  /**
   * Render a Slate node.
   *
   * @param {Object} props
   * @return {Element}
   */

  renderNode = props => {
    const { attributes, children, node , isFocused} = props

    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
        case 'image': {
            const src = node.data.get('src')
            return <Image src={src} selected={isFocused} {...attributes} />
          }
          case 'link': {
            const { data } = node
            const href = data.get('href')
            return (
              <a {...attributes} href={href}>
                {children}
              </a>
            )
          }
          default: 
            return null;
    }
  }

  onClickImage = event => {
    event.preventDefault()
    const src = window.prompt('Enter the URL of the image:')
    if (!src) return

    const change = this.state.value.change().call(insertImage, src)

    this.onChange(change)
  }

  /**
   * On drop, insert the image wherever it is dropped.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  onDropOrPaste = (event, change, editor) => {
    const target = getEventRange(event, change.value)
    if (!target && event.type === 'drop') return

    const transfer = getEventTransfer(event)
    const { type, text, files } = transfer

    if (type ==='files') {
      for (const file of files) {
        const reader = new FileReader()
        const [mime] = file.type.split('/')
        if (mime !== 'image') continue

        reader.addEventListener('load', () => {
          editor.change(c => {
            c.call(insertImage, reader.result, target)
          })
        })

        reader.readAsDataURL(file)
      }
    }

    if (type === 'text') {
      if (!isUrl(text)) return
      if (!isImage(text)) return
      change.call(insertImage, text, target)
    }
  }
  
  /**
   * Render a Slate mark.
   *
   * @param {Object} props
   * @return {Element}
   */

  renderMark = props => {
    const { children, mark, attributes } = props

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>
      case 'code':
        return <code {...attributes}>{children}</code>
      case 'italic':
        return <em {...attributes}>{children}</em>
      case 'underlined':
        return <u {...attributes}>{children}</u>
      default:
        return null;
    }
  }

  /**
   * On change, save the new `value`.
   *
   * @param {Change} change
   */

  onChange = ({ value }) => {
    // When the document changes, save the serialized HTML to Local Storage.
    if (value.document != this.state.value.document) {
      const content = html.serialize(value)
      localStorage.setItem('content', content)
      console.log('content',localStorage.getItem('content'))
    }
    this.setState({ value })
  }
  
  /**
   * On key down, if it's a formatting command toggle a mark.
   *
   * @param {Event} event
   * @param {Change} change
   * @return {Change}
   */

  onKeyDown = (event, change) => {
    let mark

    if (isBoldHotkey(event)) {
      mark = 'bold'
    } else if (isItalicHotkey(event)) {
      mark = 'italic'
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined'
    } else if (isCodeHotkey(event)) {
      mark = 'code'
    } else {
      return
    }

    event.preventDefault()
    change.toggleMark(mark)
    return true
  }

  /**
   * When a mark button is clicked, toggle the current mark.
   *
   * @param {Event} event
   * @param {String} type
   */

  onClickMark = (event, type) => {
    event.preventDefault()
    const { value } = this.state
    const change = value.change().toggleMark(type)
    this.onChange(change)
  }

  /**
   * When a block button is clicked, toggle the block type.
   *
   * @param {Event} event
   * @param {String} type
   */

  onClickBlock = (event, type) => {
    event.preventDefault()
    const { value } = this.state
    const change = value.change()
    const { document } = value

    // Handle everything but list buttons.
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type)
      const isList = this.hasBlock('list-item')

      if (isList) {
        change
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else {
        change.setBlocks(isActive ? DEFAULT_NODE : type)
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item')
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type)
      })

      if (isList && isType) {
        change
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else if (isList) {
        change
          .unwrapBlock(
            type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type)
      } else {
        change.setBlocks('list-item').wrapBlock(type)
      }
    }

    this.onChange(change)
  }
  /**
   * When clicking a link, if the selection has a link in it, remove the link.
   * Otherwise, add a new link with an href and text.
   *
   * @param {Event} event
   */

  onClickLink = event => {
    event.preventDefault()
    const { value } = this.state
    const hasLinks = this.hasLinks()
    const change = value.change()

    if (hasLinks) {
      change.call(unwrapLink)
    } else if (value.isExpanded) {
      const href = window.prompt('Enter the URL of the link:')
      change.call(wrapLink, href)
    } else {
      const href = window.prompt('Enter the URL of the link:')
      const text = window.prompt('Enter the text for the link:')

      change
        .insertText(text)
        .extend(0 - text.length)
        .call(wrapLink, href)
    }

    this.onChange(change)
  }

  /**
   * On paste, if the text is a link, wrap the selection in a link.
   *
   * @param {Event} event
   * @param {Change} change
   */

  onPaste = (event, change) => {
    if (change.value.selection.isCollapsed) return

    const transfer = getEventTransfer(event)
    const { type, text } = transfer
    if (type !== 'text' && type !== 'html') return
    if (!isUrl(text)) return

    if (this.hasLinks()) {
      change.call(unwrapLink)
    }

    change.call(wrapLink, text)
    return true
  }
}

/**
 * Export.
 */

export default RichText
