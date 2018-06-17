import React, { Component } from 'react'
import { connect } from 'react-redux';
import Row from '../components/row';
import { bindActionCreators } from 'redux';
import { getResults } from '../actions/index';
import io from 'socket.io-client';
import { setTimeout } from 'timers';

const SOCKET_URL = `http://localhost:3000`;

const socket = io.connect(SOCKET_URL);

// This class is a container because it has direct connection to the redux state
class RowsList extends Component {
    constructor(props) {
        super(props);
        // this.props.getResults();

        socket.on('rows', (rows) => {
            this.props.getResults(rows);
        })
    }

    render() {
        if (!this.props.rows) {
            return (
                <p> Loading... </p>
            )
        }
        return (
            <ul>
                {this.props.rows.map((row, i) => <Row key={i} row={row} />)}
            </ul>
        );
    }
}

// Used for applying items from state to the container props
function mapStateToProps(state) {
    return {
        rows: state.rows
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getResults}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RowsList);