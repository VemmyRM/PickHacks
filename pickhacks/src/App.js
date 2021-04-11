import React, { useState } from "react";
import MovieSelect from "./Components/MovieSelect";
import DisplayMatch from "./Components/DisplayMatch";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppCopy from "./AppCopy";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={AppCopy} />
      <Route exact path="/movies/:id" component={MovieSelect} />
      <Route exact path="/matches" component={DisplayMatch} />
    </div>
  </Router>
);

export default App;