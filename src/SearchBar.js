import React, { Component } from 'react';
import Store from './Store'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '', minBedrooms: 1, maxBedrooms: 1, minBathrooms: 1, maxBathrooms: 1,
      latitude: 42.9994092, longitude: -87.9005463, radius: 800,
      zipcode: "", land_use: "", parking_type: "", number_units: "",
      propertiesCallback: this.props.propertiesCallback
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentWillMount() {
    this.fetchProperties();
  }

  fetchProperties() {
    const callback = this.state.propertiesCallback;
    Store.fetchProperties(this.state)
      .then(function(myJson) {
        callback(myJson.data);
        return myJson;
      })
  }


  onInputChange(event) {
    this.setState({[event.target.id]: event.target.value}, () => {
      this.fetchProperties(this.state);
    });
  }

  onFormSubmit(event) {
    // this.props.fetchProperties(this.state);
    // this.setState({term: ''});
    event.preventDefault();
  }

  render() {
    return (
      <form  onSubmit={this.onFormSubmit}>
        <div className="row mb-2">
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="minBathrooms">Min Bath</label>
          <input id="minBathrooms" type="number" className="form-control col-sm-2" value={this.state.minBathrooms} onChange={this.onInputChange} />
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="maxBathrooms">Max Bath</label>
          <input id="maxBathrooms" type="number" className="form-control col-sm-2" value={this.state.maxBathrooms} onChange={this.onInputChange} />
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="number_units">Num Units</label>
          <input id="number_units" type="number" className="form-control col-sm-2" value={this.state.number_units} onChange={this.onInputChange} />
        </div>

        <div className="row mb-2">
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="minBedrooms">Min Beds</label>
          <input id="minBedrooms" type="number" className="form-control col-sm-2" value={this.state.minBedrooms} onChange={this.onInputChange} />
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="maxBedrooms">Max Beds</label>
          <input id="maxBedrooms" type="number" className="form-control col-sm-2" value={this.state.maxBedrooms} onChange={this.onInputChange} />
        </div>
        <div className="row mb-2">
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="latitude">Latitude</label>
          <input id="latitude" type="number" className="form-control col-sm-2" value={this.state.latitude} onChange={this.onInputChange} />
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="longitude">Longitude</label>
          <input id="longitude" type="number" className="form-control col-sm-2" value={this.state.longitude} onChange={this.onInputChange} />
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="radius">Radius (m)</label>
          <input id="radius" type="number" className="form-control col-sm-2" value={this.state.radius} onChange={this.onInputChange} />
        </div>
        <div className="row mb-2">
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="zipcode">Zipcode</label>
          <input id="zipcode" type="number" className="form-control col-sm-2" value={this.state.zipcode} onChange={this.onInputChange} />
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="land_use">Land Use</label>
          <select id="land_use" className="form-control col-sm-2" value={this.state.land_use} onChange={this.onInputChange}>
            <option value=""></option>
            <option value="8810">Single-Private Households</option>
          </select>
          <label className="col-sm-2 justify-content-start form-control-label" htmlFor="parking_type">Parking</label>
          <select id="parking_type" className="form-control col-sm-2" value={this.state.parking_type} onChange={this.onInputChange}>
            <option value=""></option>
            <option value="A">Attached Garage</option>
            <option value="D">Detached Garage</option>
            <option value="AD">Attached/Detached Garage</option>
          </select>
        </div>

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar;
