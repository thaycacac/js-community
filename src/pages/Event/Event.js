import React, { Component } from 'react';
import './Event.css';
import Header from './../header/Header';
import Menu from './../Menu/Menu';
import Activity from './Activity';

export default class Event extends Component {
    render(){
        return (
            <div style={{ backgroundColor: '#f2f2f2' }}>
                <Header />

                <Menu />

                <div className='post-container'>

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
                        {
                            // this.state.hashtags.map((hashtag)=>{
                            //   return(<a>{hashtag}</a> )
                              
                            // })
                        }
                            <a>#android</a>
                            <a>#web</a>
                            <a>#machineLearning</a>
                            <a>#iOS</a>
                            <a>#AI</a>
                            <a>#tricks</a>
                            <a>#share</a>
                        </div>
                    </div>

                    <div className='event-main-content'>
                        <Activity/>
                        <Activity/>
                    </div>

                    <div className='weekly-bar'>
                        <div className='bar-title'>
                            Weekly
          </div>
                        <div className='bar-content'>
                        {
                            // this.state.activities.map((date,activity)=>{
                            //   return(
                            //     <li>{date} - {activity}</li>
                            //   )
                            // })
                        }
                            No activities yet.
          </div>
          <a href='/event'>Detail>></a>
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
                                {
                                    // this.state.ranking.map((rank,username,votes)=>{
                                    //   return(
                                    //     <tr>
                                    //     <td>{rank}</td>
                                    //     <td>{username}</td>
                                    //     <td>{votes}</td>
                                    //     </tr>
                                    //   )
                                    // })
                                  }
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
};
