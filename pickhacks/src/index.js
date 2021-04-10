import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDXzIjZWmelWl_ZmpIWGK6QXETYafWULFE",
  authDomain: "pickhacks-91a97.firebaseapp.com",
  projectId: "pickhacks-91a97",
  storageBucket: "pickhacks-91a97.appspot.com",
  messagingSenderId: "653766672377",
  appId: "1:653766672377:web:256092378407cb062c0728",
  measurementId: "G-570D6CWLD8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
