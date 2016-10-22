import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PropertyIndex from './components/property_index'
import PropertyShow from './components/property_show'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PropertyIndex} />
    <Route path="properties/:id" component={PropertyShow} />
  </Route>
)

