import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(value) {
    this.setState({ text: value })
    // console.log('text',this.state.text)
    localStorage.setItem('text',this.state.text)
  }
  render() {
    return (
      <ReactQuill value={this.state.text}
        onChange={this.handleChange} 
        style={{height:'555px'}}/>
    );
  }

};


