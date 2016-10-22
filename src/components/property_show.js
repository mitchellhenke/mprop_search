import React, { Component } from 'react';
import { fetchProperty } from '../actions/index';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class PropertyShow extends Component {
  componentWillMount() {
    this.props.fetchProperty(this.props.params.id)
  }

  render() {
    const { property } = this.props;
    if(!property) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back to Search</Link>
        <div className="row">
          <div className="col-sm-4">
            <h4>Tax Key:</h4> {property.tax_key}
          </div>
          <div className="col-sm-4">
            <h4>Address:</h4> {property.address}
          </div>
          <div className="col-sm-4">
            <h4>Bedrooms:</h4> {property.bedrooms}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h4>Bathrooms:</h4> {property.bathrooms}
          </div>
          <div className="col-sm-4">
            <h4>Lot Area:</h4> {property.lot_area}
          </div>
          <div className="col-sm-4">
            <h4>Building Area:</h4> {property.building_area}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h4>Air Conditioning:</h4> {property.air_conditioning == '1' ? "Yes" : "No"}
          </div>
          <div className="col-sm-4">
            <h4>Attic</h4> {property.attic}
          </div>
          <div className="col-sm-4">
            <h4>Basement:</h4> {property.basement}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h4>Parking Type:</h4> {property.parking_type ? property.parking_type : "None"}
          </div>
          <div className="col-sm-4">
            <h4>Link</h4>
            <a href={`http://assessments.milwaukee.gov/remast.asp?taxkey=${property.tax_key}`} target='_blank'>MPROP</a>
          </div>
          <div className="col-sm-4">
            <h4>Assessment:</h4> ${property.last_assessment_amount}
          </div>
        </div>
        <div className="row">
          <img src={"https://maps.googleapis.com/maps/api/streetview?size=600x300&location="+ property.address +"&key=AIzaSyCFjpF6SL7Ea9qcY3va2Vihqdqj6bMhGi8"} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { property: state.properties.property };
}

export default connect(mapStateToProps, { fetchProperty })(PropertyShow)