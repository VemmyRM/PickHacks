import React, { useState } from "react";
import MovieSelect from "./Components/MovieSelect";
import DisplayMatch from "./Components/DisplayMatch";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppCopy from "./AppCopy";

const App = () => (
  <Router>
    <div style={{background: "linear-gradient(81deg, rgba(2,0,36,1) 0%, rgba(196,50,194,0.7805497198879552) 0%, rgba(0,174,255,1) 96%)"}}>
      <Route exact path="/" component={AppCopy} />
      <Route exact path="/movies/:id" component={MovieSelect} />
      <Route exact path="/matches" component={DisplayMatch} />
    </div>
  </Router>
);

export default App;