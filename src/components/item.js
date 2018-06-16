import React, { Component } from 'react';
import { isNull } from 'util';

// TODO: Make the images for only the active 3 movies/shows to be shown
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
        <span className="checkmark">
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
        </span>
        )
    }

    render() {
        return (
            <div className="col-sm-4">
                <div className="card">
                    <img onClick={() => {this.togglefavorite(this.props.item.id)}} className="card-img-top" src={this.props.item.poster} alt="Card image cap" />
                    <div className="image-overlay">
                        {this.renderCheckbox(this.props.item.id)}
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.item.name.replace('&#39;', '\'')}</h4>
                    </div>
                </div>
            </div>
        );
    }
};

export default Item;