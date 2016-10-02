import React, { Component } from 'react';
import { connect } from 'react-redux';

class PropertyList extends Component {

  renderProperty(house) {
    return (
      <tr key={house.id}>
        <td>
          {house.tax_key}
        </td>
        <td>
          {house.address}
        </td>
        <td>
          {house.bedrooms}
        </td>
        <td>
          {house.bathrooms}
        </td>
        <td>
          {house.lot_area}
        </td>
        <td>
          {house.building_area}
        </td>
        <td>
          {house.parking_type}
        </td>
        <td>
          <a href={`http://assessments.milwaukee.gov/remast.asp?taxkey=${house.tax_key}`} target='_blank'>Link</a>
        </td>
        <td>
          {house.last_assessment_amount}
        </td>
      </tr>
    );
  }
  render () {
    return (
      <table className="table table-hover">
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
            <th>Assessment</th>
          </tr>
        </thead>
        <tbody>
          {this.props.properties.map(this.renderProperty)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ properties }) {
  return { properties };
}

export default connect(mapStateToProps)(PropertyList)
