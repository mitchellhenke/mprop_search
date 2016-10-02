import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProperties } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '', minBedrooms: 1, maxBedrooms: 1, minBathrooms: 1, maxBathrooms: 1,
      latitude: 42.9994092, longitude: -87.9005463, radius: 800,
      zipcode: "", land_use: "", parking_type: ""
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({[event.target.id]: event.target.value}, () => {
      this.props.fetchProperties(this.state)
    });
  }

  onFormSubmit(event) {
    this.props.fetchProperties(this.state);
    // this.setState({term: ''});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} submit>
        <div className="form-group row">
          <label className="col-xs-2 col-form-label" for="minBathrooms">Min Bath</label>
          <div className="col-xs-2">
            <input id="minBathrooms" type="number" className="form-control" value={this.state.minBathrooms} onChange={this.onInputChange} />
          </div>
          <label className="col-xs-2 col-form-label" for="maxBathrooms">Max Bath</label>
          <div className="col-xs-2">
            <input id="maxBathrooms" type="number" className="form-control" value={this.state.maxBathrooms} onChange={this.onInputChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-2 col-form-label" for="minBedrooms">Min Bedrooms</label>
          <div className="col-xs-2">
            <input id="minBedrooms" type="number" className="form-control" value={this.state.minBedrooms} onChange={this.onInputChange} />
          </div>
          <label className="col-xs-2 col-form-label" for="maxBedrooms">Max Bedrooms</label>
          <div className="col-xs-2">
            <input id="maxBedrooms" type="number" className="form-control" value={this.state.maxBedrooms} onChange={this.onInputChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-2 col-form-label" for="latitude">Latitude</label>
          <div className="col-xs-2">
            <input id="latitude" type="number" className="form-control" value={this.state.latitude} onChange={this.onInputChange} />
          </div>
          <label className="col-xs-2 col-form-label" for="longitude">Longitude</label>
          <div className="col-xs-2">
            <input id="longitude" type="number" className="form-control" value={this.state.longitude} onChange={this.onInputChange} />
          </div>
          <label className="col-xs-2 col-form-label" for="radius">Radius (m)</label>
          <div className="col-xs-2">
            <input id="radius" type="number" className="form-control" value={this.state.radius} onChange={this.onInputChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xs-2 col-form-label" for="zipcode">Zipcode</label>
          <div className="col-xs-2">
            <input id="zipcode" type="number" className="form-control" value={this.state.zipcode} onChange={this.onInputChange} />
          </div>
          <label className="col-xs-2 col-form-label" for="land_use">Land Use</label>
          <div className="col-xs-2">
            <select id="land_use" className="form-control" value={this.state.land_use} onChange={this.onInputChange}>
              <option value=""></option>
              <option value="8810">Single-Private Households</option>
            </select>
          </div>
          <label className="col-xs-2 col-form-label" for="land_use">Parking Type</label>
          <div className="col-xs-2">
            <select id="parking_type" className="form-control" value={this.state.parking_type} onChange={this.onInputChange}>
              <option value=""></option>
              <option value="A">Attached Garage</option>
              <option value="D">Detached Garage</option>
              <option value="AD">Attached/Detached Garage</option>
            </select>
          </div>
        </div>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function input() {
  return (
    <input
      placeholder="Get a five-day forecast in your favorite cities"
      className="form-control"
      value={this.state.term}
      onChange={this.onInputChange}
    />
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProperties }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
