import React, { Component } from 'react'
import { connect } from 'react-redux';
import Row from '../components/row';
import { bindActionCreators } from 'redux';
import { getResults } from '../actions/index';

// This class is a container because it has direct connection to the redux state
class RowsList extends Component {
    constructor(props) {
        super(props);
        this.props.getResults();
    }

    render() {
        if (!this.props.rows.data) {
            return (
                <p> Loading... </p>
            )
        }
        return (
            <ul>
                {this.props.rows.data.map((row, i) => <Row key={i} row={row} />)}
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