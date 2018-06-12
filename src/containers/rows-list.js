import React, { Component } from 'react'
import { connect } from 'react-redux';

class RowsList extends Component {
    renderThumbnail(items) {
        return items.map((item) => {
            return (
                <div>
                    <img src={item.thumbnail} />
                    <div>{item.name}</div>
                </div>
            );
        })
    }

    renderList() {
        return this.props.rows.map((row) => {
            return (
                <li key={row.type}>
                    {row.type}
                    {this.renderThumbnail(row.items)}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        rows: state.rows
    };
}

export default connect(mapStateToProps)(RowsList);