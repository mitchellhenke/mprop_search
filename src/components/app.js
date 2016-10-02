import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import PropertyList from '../containers/property_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Milwaukee Property Search</h1>
        <p>A website that allows filtering by some attributes from Milwaukee's <a href='http://city.milwaukee.gov/DownloadTabularData3496.htm?docid=3496'>Master Property Record</a></p>
        <SearchBar />
        <PropertyList />
      </div>
    );
  }
}
