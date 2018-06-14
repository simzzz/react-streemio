import React, { Component } from 'react';
import Item from './item';

class Row extends Component {

    // Returns array so we can directly call it inside our <ul> in render 
    // We can access rows thanks to applying the redux state to the RowsList container and passing the rows here
    renderList() {
        if (!this.props.rows) {
            return <p>Loading...</p>;
        }
        return this.props.rows.map((row) => { 
            return (
                <div key={row.addon.manifest.id} className="single-row"> 
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container items-group row-container">
                            <h1 className="display-4">{row.addon.manifest.name}</h1>
                            <p className="lead">{row.addon.manifest.description}</p>
                            <a href="#" className="carousel-control-prev"></a>
                            <div className="row">
                                <Item items={row.response.metas} />
                            </div>
                            <a href="#" className="carousel-control-next"></a>                            
                        </div>
                    </div>                                       
                </div>
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