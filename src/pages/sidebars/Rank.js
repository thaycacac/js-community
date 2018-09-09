import React, { Component } from 'react'
import '../HomePage/HomePage.css'
import { fetchRank } from '../../reducers/rank/actions'
import { connect } from 'react-redux';
import avatar from '../images/avatar.png';
import {Link} from 'react-router';

class Rank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ranks: []
        }
    }

    componentWillMount() {
        this.props.fetchRank().then(() => {
            this.setState({ ranks: this.props.ranks })
        })
    }
    render() {
        // console.log('this.rank', this.state.ranks);
        return (
            <table className='ranking-table' >
                <thead>
                    <tr>
                        <th>Top</th>
                        
                        <th>User</th>
                        <th>Votes</th>
                    </tr>
                </thead>    
                <tbody>
                    {
                    this.state.ranks.map(rank => {
                        // console.log(rank.avatar);
                      return(
                        <tr key={Math.random()}>    
                        <td><img src={rank && rank.avatar !== 'undefined' && rank.avatar || avatar} style={{width:'30px',borderRadius: '100px',
                        overflow: 'hidden'}} alt="avatar" className="rank-record"/> </td>
                        <td className="rank-name"><Link to={{pathname:`/profile/${rank.userId}`}}>{rank.name}</Link></td>
                        <td>{rank.total_votes}</td>
                        </tr>
                      )
                    })
                }
                </tbody>
            </table>
        )
    }
};

function mapStateToProps(state) {
    return ({
        ranks: state.rank.ranks.rank
    })
}

const mapDispatchToProps = {
    fetchRank: fetchRank
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank);

