import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import PropertyList from '../containers/property_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Milwaukee Property Search</h1>
        <p>A website that allows filtering by some attributes from Milwaukee's Master Property Record</p>
        <SearchBar />
        <PropertyList />
      </div>
    );
  }
}
