import React, { Component } from 'react';

class Item extends Component {
    // For each item renders its picture and name
    renderThumbnailAndTitle(items) {
        return items.map((item) => {
            return (
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src={item.poster} alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                        </div>
                    </div>
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