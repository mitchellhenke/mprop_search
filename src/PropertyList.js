import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Util from './Util';

class PropertyList extends Component {
  constructor(props) {
    super(props);

    this.state = { latLngCallback: this.props.latLngCallback }
    this.searchNearMeClicked = this.searchNearMeClicked.bind(this)
  }

  searchNearMeClicked(latitude, longitude) {
    this.state.latLngCallback(latitude, longitude)
  }

  renderProperty = (property) => {
    return (
      <tr key={property.id}>
        <td>
          {<Link target="_blank" to={"properties/" + property.id}>
            {property.tax_key}
          </Link>}
        </td>
        <td>
          {property.address}
        </td>
        <td>
          {property.bedrooms}
        </td>
        <td>
          {property.bathrooms}
        </td>
        <td>
          {Util.numberWithCommas(property.lot_area)}
        </td>
        <td>
          {Util.numberWithCommas(property.building_area)}
        </td>
        <td>
          {property.parking_type}
        </td>
        <td>
          <a href={`http://assessments.milwaukee.gov/remast.asp?taxkey=${property.tax_key}`} target='_blank'>Link</a>
        </td>
        <td>
          <span className="input-group-btn">
            <button className="btn btn-secondary" onClick={() => this.searchNearMeClicked(property.latitude, property.longitude)}>Search Near Me</button>
          </span>
        </td>
        <td>
          ${Util.numberWithCommas(property.last_assessment_amount)}
        </td>
      </tr>
    );
  }
  render () {
    return (
      <table className="table table-hover mt-2">
        <thead>
          <tr>
            <th>Tax Key</th>
            <th>Address</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Lot Area</th>
            <th>Property Area</th>
            <th>Parking Type</th>
            <th>Link</th>
            <th>Search Near Me</th>
            <th>Assessment</th>
          </tr>
        </thead>
        <tbody>
          {this.props.properties.map(this.renderProperty) }
        </tbody>
      </table>
    );
  }
}

export default PropertyList;
