const ROOT_URL = 'https://salty-beach-73298.herokuapp.com';
// const ROOT_URL = 'http://localhost:4000';

class Store {
  static fetchProperties(parameters) {
    const url = `${ROOT_URL}?latitude=${parameters.latitude}&longitude=${parameters.longitude}&radius=${parameters.radius}&minBathrooms=${parameters.minBathrooms}&maxBathrooms=${parameters.maxBathrooms}&minBedrooms=${parameters.minBedrooms}&maxBedrooms=${parameters.maxBedrooms}&zipcode=${parameters.zipcode}&land_use=${parameters.land_use}&parking_type=${parameters.parking_type}&number_units=${parameters.number_units}`;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
  }

  static fetchProperty(id) {
    const url = `${ROOT_URL}/assessments/${id}`;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
  }
}

export default Store;
