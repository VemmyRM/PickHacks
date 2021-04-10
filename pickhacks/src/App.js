import logo from "./logo.svg";
import "./App.css";
import Options from "./Components/Option";
import Modal from "./Components/Modal";
import firebase from "firebase";

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
