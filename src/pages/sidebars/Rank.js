import React, { Component } from 'react'
import '../HomePage/HomePage.css'
import { fetchRank } from '../../reducers/rank/actions'
import { connect } from 'react-redux';
import avatar from '../images/avatar.png';

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
            console.log('this.state.ranks', this.state.ranks)
        })
    }
    render() {
        return (
            <table className='ranking-table' >
                <tr>
                <th>Top</th>
                    
                    <th>User</th>
                    <th>Votes</th>
                </tr>

                {
                    this.state.ranks.map(rank => {
                      return(
                        <tr>                       
                        <td><img src={rank && rank.avatar ? rank.avatar : avatar} style={{width:'30px'}}/> </td>
                        <td>{rank.name}</td>
                        <td>{rank.total_votes}</td>
                        </tr>
                      )
                    })
                }
            </table>
        )
    }
};

function mapStateToProps(state) {
    console.log('state.rank.ranks', state.rank.ranks.rank)
    return ({
        ranks: state.rank.ranks.rank
    })
}

const mapDispatchToProps = {
    fetchRank: fetchRank
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank);

