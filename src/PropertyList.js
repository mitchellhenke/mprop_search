import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PropertyList extends Component {
  renderProperty(property) {
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
          {property.lot_area}
        </td>
        <td>
          {property.building_area}
        </td>
        <td>
          {property.parking_type}
        </td>
        <td>
          <a href={`http://assessments.milwaukee.gov/remast.asp?taxkey=${property.tax_key}`} target='_blank'>Link</a>
        </td>
        <td>
          {property.last_assessment_amount}
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
          {this.props.properties.map(this.renderProperty) }
        </tbody>
      </table>
    );
  }
}

export default PropertyList;
