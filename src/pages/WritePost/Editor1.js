import { Editor, getEventRange, getEventTransfer  } from 'slate-react'
import { Block,Value } from 'slate'
import styled from 'react-emotion'
import { LAST_CHILD_TYPE_INVALID } from 'slate-schema-violations'
import React from 'react'
import initialValue from './value.json'
import imageExtensions from 'image-extensions'
import isUrl from 'is-url'

import { isKeyHotkey } from 'is-hotkey'
import { Button, Icon, Toolbar } from '../components'

/**
 * A change helper to standardize wrapping links.
 *
 * @param {Change} change
 * @param {String} href
 */

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


class ReadOnly extends React.Component {
  /**
   * Deserialize the initial editor value.
   *
   * @type {Object}
   */
  constructor(props){
    super(props);
    this.state={
      value:null
    }
  }

  componentWillMount(){
    this.setState({value:JSON.parse(this.props.value)})
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
        <Editor
          value={this.state.value}
          schema={schema}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
          ReadOnly
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
    this.setState({ value })
    const content = JSON.parse(JSON.stringify(this.state.value.toJSON()));
    console.log('content',content);
    // localStorage.setItem('content')
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
}

/**
 * Export.
 */

export default ReadOnly
