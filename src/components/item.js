import React, { Component } from 'react';
import { isNull } from 'util';

// TODO: Make the images for only the active 3 movies/shows to be shown
class Item extends Component {
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
        return this.props.items.map((item) => {
            return (
                <div key={item.id} className="col-sm-4">
                    <div className="card">
                        <img onClick={() => {this.togglefavorite(item.id)}} className="card-img-top" src={item.poster} alt="Card image cap" />
                        <div className="image-overlay">
                            {this.renderCheckbox(item.id)}
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{item.name.replace('&#39;', '\'')}</h4>
                        </div>
                    </div>
                </div>
            );
        });
    }
};

export default Item;