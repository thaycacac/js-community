import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize  from 'quill-image-resize-module';
import PropTypes from 'prop-types';

Quill.register("modules/ImageResize", ImageResize);
Quill.register('modules/imageDrop', ImageDrop);

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  modules = {
    toolbar: [
        [{ 'size': [false,'small', 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'align': [] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet'}],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block'],
        [{ 'color': [] }, { 'background': [] }]
    ],
    imageDrop: true,
    ImageResize: {}
  };
  formats = [
    'size', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'script', 'indent', 'direction', 'align', 'list', 'bullet',
    'link', 'image', 'video', 'clean', 'code-block', 'color', 'background'  
  ];

  handleChange(value) {
    this.setState({ text: value })
    console.log('text',this.state.text)
    localStorage.setItem('text',this.state.text)
  }
  render() {
    return (
      <ReactQuill value={this.state.text}
        onChange={this.handleChange}
        modules = {this.modules}
        formats={this.formats} />
    );
  }

};


