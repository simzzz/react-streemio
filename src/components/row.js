import React, { Component } from 'react';
import Item from './item';

class Row extends Component {
    // Returns array so we can directly call it inside our <ul> in render 
    // We can access rows thanks to applying the redux state to the RowsList container and passing the rows here
    renderList() {
        return this.props.rows.map((row) => {
            return (
                <li key={row.type}>
                    {row.type}
                    <Item items={row.items} />
                </li>
            );
        });
    }

    render() {
        return (
            this.renderList()
        );
    }
};

export default Row;