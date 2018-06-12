import React, { Component } from 'react'
import { connect } from 'react-redux';
import Item from '../components/item';
import Row from '../components/row';

// This class is a container because it has direct connection to the redux state
class RowsList extends Component {
    // For each item renders its picture and name
    // TODO: Use the Item component
    renderThumbnailAndTitle(items) {
        return items.map((item) => {
            return (
                <div>
                    <img src={item.thumbnail} />
                    <div>{item.name}</div>
                </div>
            );
        })
    }

    // Returns array so we can directly call it inside our <ul> in render 
    // We can access rows thanks to applying the redux state to this container
    // TODO: Use the Row component
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