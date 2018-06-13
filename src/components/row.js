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
            console.log(row)
            return (
                <div key={row.addon.manifest.id} className="row"> 
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">{row.addon.manifest.name}</h1>
                            <p className="lead">{row.addon.manifest.description}</p>
                            {/* <Item items={[row.items]} /> */}
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