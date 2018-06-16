import React, { Component } from 'react';
import Item from './item';

class Row extends Component {
    constructor(props) {
        super(props);
        this.id = 0;
        this.row = this.props.row.addon.manifest;
        this.state = {startingIndex: 0, page: 1};
        this.itemsPerPage = 3;
        this.maxPages = Math.ceil(this.props.row.response.metas.length / this.itemsPerPage);
    }

    nextPage() {
        this.setState({
            startingIndex: this.state.startingIndex + 3,
            page: this.state.page + 1
        })
    }

    prevPage() {        
        this.setState({
            startingIndex: this.state.startingIndex - 3,
            page: this.state.page - 1
        })
    }

    renderItems() {
        return this.props.row.response.metas.slice(this.state.startingIndex, this.state.startingIndex + this.itemsPerPage).map((item, i) => {
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
                    <button disabled={this.state.page === 1} onClick={() => this.prevPage()} className="btn btn-primary previous-button">Previous</button>
                    <button disabled={this.state.page === this.maxPages} onClick={() => this.nextPage()} className="btn btn-primary next-button">Next</button>
                    <p> Page {this.state.page}/{this.maxPages}</p>                
                </div>                                       
            </div>
        );
    }
};

export default Row;