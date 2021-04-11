import logo from "./logo.svg";
import "./App.css";
import Options from "./Components/Option";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";

import React, { useState } from "react";
import MovieSelect from "./Components/MovieSelect";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function AppCopy() {
  
  function handleFriends(name, email) {
    console.log("you picked friends");
    database.ref("users/" + name).set({
      username: name,
      email: email,
    });
  }

  const firebaseApp = firebase.apps[0];
  var database = firebase.database();

  var username = "PTK";
  var email = "ptk@gmail.com";
  function handleAlone() {
    console.log("you picked alone :(");
  }
  return (
    <div className="App" style={{background: "linear-gradient(81deg, rgba(2,0,36,1) 0%, rgba(196,50,194,0.7805497198879552) 0%, rgba(0,174,255,1) 96%)"}}>
      <div className="container">
        <h1 className="title" >Welcome to Stream Team! </h1>
        <h2 className="title2">Pick your experience and enjoy! </h2>
        <div className="row">
          <div className="col">
            <Options
              phrase="Watching with Friends"
              handleClick={() => handleFriends(username, email)}
            />
          </div>
          <div className="col">
            <Options phrase="Find me a Movie Buddy" handleClick={handleAlone} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCopy;