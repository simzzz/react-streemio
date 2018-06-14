import React, { Component } from 'react';
import { isNull } from 'util';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    getFavorites() {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if (isNull(favorites)) {
            favorites = {};
        }

        return favorites;
    }

    setFavorites(favorites) {
        favorites = JSON.stringify(favorites);
        localStorage.setItem('favorites', favorites);
    }

    togglefavorite(id) {
        if (this.isIdFavorite(id)) {
            this.removefavorite(id);
        } else {
            this.addfavorite(id);
        }
        this.forceUpdate();      
    }

    addfavorite(id) {
        const favorites = this.getFavorites();
        if (!favorites[id]) {
            favorites[id] = id;
        }
        this.setFavorites(favorites);
    }

    removefavorite(id) {
        const favorites = this.getFavorites();
        if (favorites[id]) {
            delete favorites[id];
        }
        this.setFavorites(favorites);
    }


    isIdFavorite(id) {
        const favorites = this.getFavorites();
        if (favorites[id]) {
            return true;
        } else {
            return false;
        }
    }

    renderCheckbox(id) {
        if (!this.isIdFavorite(id)) {
            return <div></div>
        }
        return (
        <span class="checkmark">
            <div class="checkmark_stem"></div>
            <div class="checkmark_kick"></div>
        </span>
        )
    }

    // For each item renders its picture and name
    renderThumbnailAndTitle(items) {
        return items.map((item) => {
            return (
                <div className="col-sm-4">
                    <div className="card">
                        <img onClick={() => {this.togglefavorite(item.id)}} className="card-img-top" src={item.poster} alt="Card image cap" />
                        <div className="image-overlay">
                            {this.renderCheckbox(item.id)}
                        </div>
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