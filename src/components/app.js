import React, { Component } from 'react';
import RowsList from '../containers/rows-list';

export default class App extends Component {
  render() {
    return (
      <div >
        <h1 className="text-center"> Stremio Add-ons with React </h1>        
        <RowsList />
      </div>
    );
  }
}
