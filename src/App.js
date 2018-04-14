import React from 'react';
import PropertyIndex from './PropertyIndex';
import PropertyShow from './PropertyShow';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div className="App container">
      <Route exact path="/" component={PropertyIndex} />
      <Route path="/properties/:id" component={PropertyShow} />
    </div>
  </Router>

)

export default App;
