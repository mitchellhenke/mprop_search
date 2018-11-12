import React, { Component } from 'react';
import SearchBar from './SearchBar'
import PropertyList from './PropertyList'

class PropertyIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { properties: [], latitude: "", longitude: "" };
  }

  propertiesCallback = (properties) => {
    this.setState({properties: properties})
  }

  latLngCallback = (lat, lng) => {
    this.setState({latitude: lat, longitude: lng})
  }

  render() {
    return (
      <div>
        <h1>Milwaukee Property Search</h1>
        <p>A website that allows filtering by some attributes from Milwaukee's <a href='http://city.milwaukee.gov/DownloadTabularData3496.htm?docid=3496'>Master Property Record</a></p>
        <SearchBar propertiesCallback={this.propertiesCallback} latitude={this.state.latitude} longitude={this.state.longitude} latLngCallback={this.latLngCallback}/>
        <PropertyList properties={this.state.properties} latLngCallback={this.latLngCallback} />
      </div>
    );
  }
}

export default PropertyIndex;
