import React, { Component } from 'react'
import '../HomePage/HomePage.css'

export default class Weekly extends Component {
    render() {
        return (
            <div>
            <div className='bar-content'>
            <ul>
            {
                // this.state.activities.map((date,activity)=>{
                //   return(
                //     <li>{date} - {activity}</li>
                //   )
                // })
            }
            </ul>
              No activities yet.
          </div>
          {/* <a href='/event'>Detail>></a> */}
            </div>
        );
    }
};
