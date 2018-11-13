import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Store from './Store'
import Util from './Util'

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
      <ul className="list-group">
        {sorted.map((sale) => { return (<li className="list-group-item" key={sale.id}>{`${this.dateFormat(new Date(sale.date_time))}: $${Util.numberWithCommas(sale.amount)}`}</li>) })}
      </ul>
    )
  }

  renderOtherAssessments(other_assessments) {
    const sorted = other_assessments.sort((a, b) => { return b.year - a.year })
    return (
      <ul className="list-group">
        {sorted.map((other_assessment) => { return (<li className="list-group-item" key={other_assessment.id}>{`${other_assessment.year}: $${Util.numberWithCommas(other_assessment.last_assessment_amount)}`}</li>) })}
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
        <hr/>
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
        <hr/>
        <div className="row">
          <div className="col-sm-4">
            <h4>Bathrooms:</h4> {property.bathrooms}
          </div>
          <div className="col-sm-4">
            <h4>Lot Area:</h4> {Util.numberWithCommas(property.lot_area)}
          </div>
          <div className="col-sm-4">
            <h4>Building Area:</h4> {Util.numberWithCommas(property.building_area)}
          </div>
        </div>
        <hr/>
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
        <hr/>
        <div className="row">
          <div className="col-sm-4">
            <h4>Parking Type:</h4> {property.parking_type ? property.parking_type : "None"}
          </div>
          <div className="col-sm-4">
            <h4>Link</h4>
            <a href={`http://assessments.milwaukee.gov/remast.asp?taxkey=${property.tax_key}`} rel="noopener noreferrer" target='_blank'>MPROP</a>
          </div>
          <div className="col-sm-4">
            <h4>Assessment:</h4> ${Util.numberWithCommas(property.last_assessment_amount)}
          </div>
        </div>
        <hr/>
        <div className="row">
          <img alt='house' className="mx-auto" src={"https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/geojson(%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B" + property.longitude + "%2C"+property.latitude+ "%5D%7D)/" + property.longitude+ "," + property.latitude +",14/500x300?access_token=pk.eyJ1IjoibWl0Y2hlbGxoZW5rZSIsImEiOiJjam5ybXN5ZnQwOXpkM3BwYXo3ZDY4aHJzIn0.ktVRbqOVQpj75MqJPZueCA"} />
        </div>
        <hr/>
        <div className="row text-center">
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
