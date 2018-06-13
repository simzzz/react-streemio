import React, { Component } from 'react';

class Item extends Component {
    // For each item renders its picture and name
    renderThumbnailAndTitle(items) {
        return items.map((item) => {
            return (
                <div class="col-sm-4">
                    <img src={item.thumbnail} height="240px" />
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