import logo from "./logo.svg";
import "./App.css";
import Options from "./Components/Option";
import Modal from "./Components/Modal";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

function App() {
  function handleFriends(name, email) {
    console.log("you picked friends");
    database.ref("users/" + name).set({
      username: name,
      email: email,
    });
  }

  const firebaseApp = firebase.apps[0];
  var database = firebase.database();

  var postListRef = database.ref("movies");
  var newPostRef = postListRef.push();
  var array =
    ({
      movie: "Zack Snyder's Justice League",
      genre: "Action",
      service: "Hulu",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    },
    {
      movie: "Shawshank Redemption",
      genre: "Adevnture",
      service: "Netflix",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    });

  // array.forEach((element) => {
  //   newPostRef.set(element);
  // });

  var username = "PTK";
  var email = "ptk@gmail.com";
  function handleAlone() {
    console.log("you picked alone :(");
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Welcome to THE APP. Pick your experience. </h1>
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

export default App;
