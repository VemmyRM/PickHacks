import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

var firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
  
  apiKey: "AIzaSyDXzIjZWmelWl_ZmpIWGK6QXETYafWULFE",
  authDomain: "pickhacks-91a97.firebaseapp.com",
  databaseURL: "https://pickhacks-91a97-default-rtdb.firebaseio.com",
  projectId: "pickhacks-91a97",
  storageBucket: "pickhacks-91a97.appspot.com",
  messagingSenderId: "653766672377",
  appId: "1:653766672377:web:256092378407cb062c0728",
  measurementId: "G-570D6CWLD8"
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
