import React, { Component } from 'react'
import { connect } from 'react-redux';
import Row from '../components/row';

// This class is a container because it has direct connection to the redux state
class RowsList extends Component {
    render() {
        return (

            <ul>
                <Row rows={this.props.rows} />
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

export default connect(mapStateToProps)(RowsList);