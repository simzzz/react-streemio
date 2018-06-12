import React, { Component } from 'react';

class Item extends Component {
    // For each item renders its picture and name
    renderThumbnailAndTitle(items) {
        return items.map((item) => {
            return (
                <div>
                    <img src={item.thumbnail} />
                    <div>{item.name}</div>
                </div>
            );
        });
    }

    render() {
        return (
            this.renderThumbnailAndTitle(this.props.items)
        );
    }
};

export default Item;