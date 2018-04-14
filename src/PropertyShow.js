import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Store from './Store'

class PropertyShow extends Component {
  constructor(props) {
    super(props);

    this.state = { property: null, id: this.props.match.params.id };
  }
  componentWillMount() {
    this.fetchProperty();
  }

  fetchProperty() {
    Store.fetchProperty(this.state.id)
      .then(function(myJson) {
        this.setState({property: myJson})
      }.bind(this))
  }

  renderSales(sales) {
    const sorted = sales.sort((a, b) => { return Date.parse(b.date_time) - Date.parse(a.date_time) })
    return (
      <ul>
        {sorted.map((sale) => { return (<li key={sale.id}>{`${this.dateFormat(new Date(sale.date_time))}: $${sale.amount}`}</li>) })}
      </ul>
    )
  }

  renderOtherAssessments(other_assessments) {
    const sorted = other_assessments.sort((a, b) => { return b.year - a.year })
    return (
      <ul>
        {sorted.map((other_assessment) => { return (<li key={other_assessment.id}>{`${other_assessment.year}: $${other_assessment.last_assessment_amount}`}</li>) })}
      </ul>
    )
  }

  dateFormat(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  render() {
    if(!this.state.property) {
      return (<div>Loading...</div>);
    }

    const property = this.state.property;

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
            <h4>Air Conditioning:</h4> {property.air_conditioning === '1' ? "Yes" : "No"}
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
          <img alt='house' src={"https://maps.googleapis.com/maps/api/streetview?size=600x300&location="+ property.address +"&key=AIzaSyCFjpF6SL7Ea9qcY3va2Vihqdqj6bMhGi8"} />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h3>Sales</h3>
            {this.renderSales(property.sales)}
          </div>
          <div className="col-sm-6">
            <h3>Assessments</h3>
            {this.renderOtherAssessments(property.other_assessments)}
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyShow;
