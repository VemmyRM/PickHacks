import React, { useState } from "react";
import MovieSelect from "./Components/MovieSelect";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppCopy from "./AppCopy";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={AppCopy} />
      <Route exact path="/movies/:id" component={MovieSelect} />
    </div>
  </Router>
);

export default App;