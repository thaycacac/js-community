import React, { Component } from 'react';
import './Textbook.css';
import Header from './../header/Header';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ShortPost from './../Post/ShortPost';
import Menu from './../Menu/Menu';

export default class Textbook extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#e6e6e6' }}>
        <Header />

        <Menu/>


        <div className='textbook-container'>

          <div className='saved-post-bar'>
            <div className='bar-title'>
              Saved post
        </div>
            <div className='bar-content'>
              No saved post.
        </div>
          </div>

          <div className='hashtag-bar'>
            <div className='bar-title'>
              #Hashtag
          </div>

            <div className='bar-content'>
              <a>#android</a> 
              <a>#web</a>
              <a>#machineLearning</a> 
              <a>#iOS</a>
              <a>#AI</a>
              <a>#tricks</a>
              <a>#share</a>
            </div>
          </div>

          <div className='main-content'>
            <ShortPost username='Nguyễn Quang Linh' title='Các loại bootstrap trong RxSwift' />
            <ShortPost username='Phan Xuân Vũ' title='Bootstrapping trong AngularJS'/>
            <ShortPost username='Nguyễn Thái Bảo' title='Class method: Một số vấn đề về Coding Standard'/>
            <ShortPost username='Nguyễn Hoàng Hải' title='hướng dẫn debug trong react native'/>
            <ShortPost username='Wasd' title='Vài ghi chép về V8 và Garbage Collection'/>

          </div>

          <div className='weekly-bar'>
            <div className='bar-title'>
              Weekly
          </div>
            <div className='bar-content'>
              No activities yet.
          </div>
          </div>

          <div className='ranking-bar'>
            <div className='bar-title'>
              Ranking
          </div>
            <div className='bar-content'>
              <table className='ranking-table' >
                  <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Votes</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Wasd</td>
                    <td>696</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Vũ Phan</td>
                    <td>569</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>The Uranus</td>
                    <td>496</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Hoàng Hải</td>
                    <td>369</td>
                  </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
