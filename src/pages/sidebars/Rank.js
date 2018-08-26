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
            const { ranks } = this.props.ranks;
            this.setState({ ranks })
            console.log('this.state.ranks', this.state.ranks)
        })
    }
    render() {
        return (
            <table className='ranking-table' >
                <tr>
                    <th></th>
                    <th>#</th>
                    <th>User</th>
                    <th>Votes</th>
                </tr>

                {
                    this.state.ranks.map(rank => {
                      return(
                        <tr>
                        <td><img src={rank && rank.avatar ? rank.avatar : avatar}/></td>
                        <td>{rank.top}</td>
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
    console.log('state.rank.ranks', state.rank.ranks)
    return ({
        ranks: state.rank.ranks
    })
}

const mapDispatchToProps = {
    fetchRank: fetchRank
}

export default connect(mapStateToProps, mapDispatchToProps)(Rank);

