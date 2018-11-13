(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(46)},38:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),s=a.n(r),o=(a(36),a(38),a(4)),c=a(5),m=a(9),i=a(8),u=a(10),h=a(21),d=a(7),p="https://salty-beach-73298.herokuapp.com",b=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"fetchProperties",value:function(e){var t="".concat(p,"?latitude=").concat(e.latitude,"&longitude=").concat(e.longitude,"&radius=").concat(e.radius,"&minBathrooms=").concat(e.minBathrooms,"&maxBathrooms=").concat(e.maxBathrooms,"&minBedrooms=").concat(e.minBedrooms,"&maxBedrooms=").concat(e.maxBedrooms,"&zipcode=").concat(e.zipcode,"&land_use=").concat(e.land_use,"&parking_type=").concat(e.parking_type,"&number_units=").concat(e.number_units,"&textSearch=").concat(e.textSearch);return fetch(t).then(function(e){return e.json()})}},{key:"fetchProperty",value:function(e){var t="".concat(p,"/assessments/").concat(e);return fetch(t).then(function(e){return e.json()})}}]),e}(),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={term:"",minBedrooms:1,maxBedrooms:4,minBathrooms:1,maxBathrooms:2,latitude:a.props.latitude,longitude:a.props.longitude,radius:"",zipcode:"",land_use:"",parking_type:"",number_units:"",propertiesCallback:a.props.propertiesCallback,textSearch:"",latLngCallback:a.props.latLngCallback},a.onInputChange=a.onInputChange.bind(Object(d.a)(Object(d.a)(a))),a.onFormSubmit=a.onFormSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.fetchProperties()}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=this.state.radius;""!==e.latitude&&""!==e.longitude&&""===a&&(a="500"),this.state.latitude===e.latitude&&this.state.longitude===e.longitude&&this.state.radius===a||this.setState({latitude:e.latitude,longitude:e.longitude,radius:a},function(){t.fetchProperties()})}},{key:"fetchProperties",value:function(){var e=this.state.propertiesCallback;b.fetchProperties(this.state).then(function(t){return e(t.data),t})}},{key:"onInputChange",value:function(e){var t=this;this.setState(Object(h.a)({},e.target.id,e.target.value),function(){t.fetchProperties(t.state)})}},{key:"onFormSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.onFormSubmit},l.a.createElement("div",{className:"row mb-2"},l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"textSearch"},"Address Search"),l.a.createElement("input",{id:"textSearch",type:"search",className:"form-control col-sm-10",value:this.state.textSearch,onChange:this.onInputChange})),l.a.createElement("div",{className:"row mb-2"},l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"minBathrooms"},"Min Bath"),l.a.createElement("input",{id:"minBathrooms",type:"number",className:"form-control col-sm-2",value:this.state.minBathrooms,onChange:this.onInputChange}),l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"maxBathrooms"},"Max Bath"),l.a.createElement("input",{id:"maxBathrooms",type:"number",className:"form-control col-sm-2",value:this.state.maxBathrooms,onChange:this.onInputChange}),l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"number_units"},"Num Units"),l.a.createElement("input",{id:"number_units",type:"number",className:"form-control col-sm-2",value:this.state.number_units,onChange:this.onInputChange})),l.a.createElement("div",{className:"row mb-2"},l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"minBedrooms"},"Min Beds"),l.a.createElement("input",{id:"minBedrooms",type:"number",className:"form-control col-sm-2",value:this.state.minBedrooms,onChange:this.onInputChange}),l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"maxBedrooms"},"Max Beds"),l.a.createElement("input",{id:"maxBedrooms",type:"number",className:"form-control col-sm-2",value:this.state.maxBedrooms,onChange:this.onInputChange})),l.a.createElement("div",{className:"row mb-2"},l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"latitude"},"Latitude"),l.a.createElement("input",{id:"latitude",type:"number",step:"any",className:"form-control col-sm-2",value:this.state.latitude,onChange:function(t){e.state.latLngCallback(t.target.value,e.state.longitude)}}),l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"longitude"},"Longitude"),l.a.createElement("input",{id:"longitude",type:"number",step:"any",className:"form-control col-sm-2",value:this.state.longitude,onChange:function(t){e.state.latLngCallback(e.state.latitude,t.target.value)}}),l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"radius"},"Radius (m)"),l.a.createElement("input",{id:"radius",type:"number",step:"1",className:"form-control col-sm-2",value:this.state.radius,onChange:this.onInputChange})),l.a.createElement("div",{className:"row mb-2"},l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"zipcode"},"Zipcode"),l.a.createElement("input",{id:"zipcode",type:"number",className:"form-control col-sm-2",value:this.state.zipcode,onChange:this.onInputChange}),l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"land_use"},"Land Use"),l.a.createElement("select",{id:"land_use",className:"form-control col-sm-2",value:this.state.land_use,onChange:this.onInputChange},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"8810"},"Single-Private Households")),l.a.createElement("label",{className:"col-sm-2 justify-content-start form-control-label",htmlFor:"parking_type"},"Parking"),l.a.createElement("select",{id:"parking_type",className:"form-control col-sm-2",value:this.state.parking_type,onChange:this.onInputChange},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"A"},"Attached Garage"),l.a.createElement("option",{value:"D"},"Detached Garage"),l.a.createElement("option",{value:"AD"},"Attached/Detached Garage"))),l.a.createElement("span",{className:"input-group-btn"},l.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Submit")))}}]),t}(n.Component),f=a(11),g=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"numberWithCommas",value:function(e){return e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e}}]),e}(),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).renderProperty=function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,l.a.createElement(f.b,{target:"_blank",rel:"noopener noreferrer",to:"properties/"+e.id},e.tax_key)),l.a.createElement("td",null,e.address),l.a.createElement("td",null,e.bedrooms),l.a.createElement("td",null,e.bathrooms),l.a.createElement("td",null,g.numberWithCommas(e.lot_area)),l.a.createElement("td",null,g.numberWithCommas(e.building_area)),l.a.createElement("td",null,e.parking_type),l.a.createElement("td",null,l.a.createElement("a",{href:"http://assessments.milwaukee.gov/remast.asp?taxkey=".concat(e.tax_key),rel:"noopener noreferrer",target:"_blank"},"Link")),l.a.createElement("td",null,l.a.createElement("span",{className:"input-group-btn"},l.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return a.searchNearMeClicked(e.latitude,e.longitude)}},"Search Near Me"))),l.a.createElement("td",null,"$",g.numberWithCommas(e.last_assessment_amount)))},a.state={latLngCallback:a.props.latLngCallback},a.searchNearMeClicked=a.searchNearMeClicked.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"searchNearMeClicked",value:function(e,t){this.state.latLngCallback(e,t)}},{key:"render",value:function(){return l.a.createElement("table",{className:"table table-hover mt-2"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Tax Key"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Bedrooms"),l.a.createElement("th",null,"Bathrooms"),l.a.createElement("th",null,"Lot Area"),l.a.createElement("th",null,"Property Area"),l.a.createElement("th",null,"Parking Type"),l.a.createElement("th",null,"Link"),l.a.createElement("th",null,"Search Near Me"),l.a.createElement("th",null,"Assessment"))),l.a.createElement("tbody",null,this.props.properties.map(this.renderProperty)))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).propertiesCallback=function(e){a.setState({properties:e})},a.latLngCallback=function(e,t){a.setState({latitude:e,longitude:t})},a.state={properties:[],latitude:"",longitude:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Milwaukee Property Search"),l.a.createElement("p",null,"A website that allows filtering by some attributes from Milwaukee's ",l.a.createElement("a",{href:"http://city.milwaukee.gov/DownloadTabularData3496.htm?docid=3496"},"Master Property Record")),l.a.createElement(E,{propertiesCallback:this.propertiesCallback,latitude:this.state.latitude,longitude:this.state.longitude,latLngCallback:this.latLngCallback}),l.a.createElement(y,{properties:this.state.properties,latLngCallback:this.latLngCallback}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={property:null,id:a.props.match.params.id},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.fetchProperty()}},{key:"fetchProperty",value:function(){b.fetchProperty(this.state.id).then(function(e){this.setState({property:e})}.bind(this))}},{key:"renderSales",value:function(e){var t=this,a=e.sort(function(e,t){return Date.parse(t.date_time)-Date.parse(e.date_time)});return l.a.createElement("ul",{className:"list-group"},a.map(function(e){return l.a.createElement("li",{className:"list-group-item",key:e.id},"".concat(t.dateFormat(new Date(e.date_time)),": $").concat(g.numberWithCommas(e.amount)))}))}},{key:"renderOtherAssessments",value:function(e){var t=e.sort(function(e,t){return t.year-e.year});return l.a.createElement("ul",{className:"list-group"},t.map(function(e){return l.a.createElement("li",{className:"list-group-item",key:e.id},"".concat(e.year,": $").concat(g.numberWithCommas(e.last_assessment_amount)))}))}},{key:"dateFormat",value:function(e){return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())}},{key:"render",value:function(){if(!this.state.property)return l.a.createElement("div",null,"Loading...");var e=this.state.property;return l.a.createElement("div",null,l.a.createElement(f.b,{to:"/"},"Back to Search"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Tax Key:")," ",e.tax_key),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Address:")," ",e.address),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Bedrooms:")," ",e.bedrooms)),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Bathrooms:")," ",e.bathrooms),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Lot Area:")," ",g.numberWithCommas(e.lot_area)),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Building Area:")," ",g.numberWithCommas(e.building_area))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Air Conditioning:")," ","1"===e.air_conditioning?"Yes":"No"),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Attic")," ",e.attic),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Basement:")," ",e.basement)),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Parking Type:")," ",e.parking_type?e.parking_type:"None"),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Link"),l.a.createElement("a",{href:"http://assessments.milwaukee.gov/remast.asp?taxkey=".concat(e.tax_key),rel:"noopener noreferrer",target:"_blank"},"MPROP")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",null,"Assessment:")," $",g.numberWithCommas(e.last_assessment_amount))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("img",{alt:"house",className:"mx-auto",src:"https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/geojson(%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B"+e.longitude+"%2C"+e.latitude+"%5D%7D)/"+e.longitude+","+e.latitude+",14/500x300?access_token=pk.eyJ1IjoibWl0Y2hlbGxoZW5rZSIsImEiOiJjam5ybXN5ZnQwOXpkM3BwYXo3ZDY4aHJzIn0.ktVRbqOVQpj75MqJPZueCA"})),l.a.createElement("hr",null),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h3",null,"Sales"),this.renderSales(e.sales)),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h3",null,"Assessments"),this.renderOtherAssessments(e.other_assessments))))}}]),t}(n.Component),N=(a(44),function(){return l.a.createElement(f.a,null,l.a.createElement("div",{className:"App container"},l.a.createElement(f.c,{exact:!0,path:"/",component:v}),l.a.createElement(f.c,{path:"/properties/:id",component:k})))});s.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.9bdbd59c.chunk.js.map