import React, { Component } from 'react';
import './Activity.css';

export default class Activity extends Component {
    constructor(props){
        super(props);
        this.state={
            user:this.props.user,
            activity: this.props.activity,
            confirm:[]
        }
    }
    render() {
      return (
        <div className='activity-container'>
        <div className='activity-description'>
            <div className='activity-date'> 1/9/2018
                {
                    // activity.date
                }
            </div>
            <div className='activity-name'> Coding Project 2018
                {
                    // activity.name
                }
            </div>
            </div>
            <div className='activity-confirm'>
                <button className='btn btn-primary'
                    // onClick={
                        // ()=>{this.state.confirm.push(user.userId)}
                    // }
                >
                    Confirm
                </button>
            </div>
        </div>
      )
    }    
};
