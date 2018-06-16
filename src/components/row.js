import React, { Component } from 'react';
import Item from './item';

class Row extends Component {
    constructor(props) {
        super(props);
        this.id = 0;
        this.row = this.props.row.addon.manifest;
    }

    renderItems() {
        return this.props.row.response.metas.map((item, i) => {
            let key = item.id;
            key ? key += i : key = i;
            return <Item key={key} item={item} />
        })

    }

    render() {
        return (
            <div key={this.row.id + this.id++} className="single-row"> 
                <div className="jumbotron jumbotron-fluid">
                    <div className="container items-group row-container">
                        <h1 className="display-4">{this.row.name}</h1>
                        <p className="lead">{this.row.description}</p>
                        <div className="row">
                            {this.renderItems()}
                        </div>
                    </div>
                </div>                                       
            </div>
        );
    }
};

export default Row;