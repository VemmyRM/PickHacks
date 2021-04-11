import React, { useState } from "react";
import Movie from "./Movie";
import firebase from "firebase";
import DisplayMatch from "./DisplayMatch";
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form'

const MovieSelect = (props) => {
  const [name, setName] = useState("Ptk");
  const [movie, setMovie] = useState({
    name: "Justice League",
    url: "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
  });
  const [currentNumber, setCurrentNumber] = useState(0);
  const [arrayOfMovies, setArray] = useState({});
  const [check, setCheck] = useState(false);
  const [matches, setMatches] = useState([]);
  var commonList = ["Godzilla", "The Godfather", "Avengers: Infinity War", "Interstellar"];
  const history = useHistory();
  var database = firebase.database();

  function setUserName(event) {
    setName(event.target.value);
  }

  function addToArray() {
    var tempArray = arrayOfMovies;
    tempArray[currentNumber] = movie.name;
    setArray(tempArray);

  }

  function movieYes() {
    console.log("I liked this movie");
    var currentId = props.match.params.id;
    database.ref(`id/${currentId}/${name}`).set({
    });

    addToArray();

    var postListRef = database.ref(`id/${currentId}/${name}/movies`);
    var newPostRef = postListRef.push();
    newPostRef.set(arrayOfMovies);

    setCurrentNumber(currentNumber + 1);
    if (currentNumber === 9)
      findingMatch(currentId);
    nextMovie();
  }
  function movieNo() {
    console.log("I did not like this movie");
    var currentId = props.match.params.id;

    setCurrentNumber(currentNumber + 1);
    if (currentNumber === 9)
      findingMatch(currentId);
    nextMovie();
  }

  function nextMovie() {
    var getMoviesRef = firebase.database().ref(`movies/${currentNumber}`);
    getMoviesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log("data from db: " + data.name);

      var currentMovie = {
        name: data.name,
        url: data.image
      };
      setMovie(currentMovie);
      console.log("movie name: " + movie.name);
    });
  }

  function findingMatch(currentId) {
    var getMoviesEachUser = firebase.database().ref(`id/${currentId}`);
    getMoviesEachUser.on('value', (snapshot) => {
      const data = snapshot.val();
      var users = Object.keys(data);
      console.log(users);
      var somethingElse = [[]];

      users.forEach(user => {
        var moviesEachUser = [];
        console.log("User: " + data[user]);
        var userKey = Object.keys(data[user].movies);
        console.log("UserKey: " + userKey);
        moviesEachUser.push(Object.values(data[user].movies[userKey]));
        console.log("moviesEachUser: " + moviesEachUser);
        somethingElse.push(moviesEachUser);
        console.log("somethingElse: " + somethingElse);
      });


      displayCommonMovie(somethingElse, users);
    });
  }

  function displayCommonMovie(somethingElse, users) {
    var match = [];
    var counts = {};
    somethingElse.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    Object.keys(counts).forEach(x => {
      if (counts[x] === users.length) {
        match.push(x);
      }
    });

    console.log("match" + match);
    setMatches(match);
    setCheck(true);
  }

  return (
    check ? <DisplayMatch match={commonList} /> :

      <div className="">
        <Form.Group style={{ paddingTop: "40px" }}>
          <center>
            <Form.Control size="lg" type="text" placeholder="What's your name?" onChange={setUserName}
              style={{ backgroundColor: "transparent", border: "2px solid black", width: "500px", marginBottom: "35px", color: "black", alignItems: 'center' }} />
          </center>
        </Form.Group>
        <div className="row align-items-center">
          <div className="col-3">
            <div
              className="movieReaction"
              style={{ color: "rgba(196,50,194,0.7805497198879552)", paddingLeft: "150px", }}
              onClick={movieNo}
            >
              <i className="fas fa-thumbs-down fa-10x" />
            </div>
          </div>
          <div className="col-6">
            <center>
              <Movie
                name={movie.name}
                image={movie.url}
              />
            </center>
          </div>
          <div className="col-3">
            <div
              className="movieReaction"
              style={{ color: "rgba(0,145,255,1)", paddingRight: "50000px" }}
              onClick={movieYes}
            >
              <i class="fas fa-thumbs-up fa-10x"></i>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MovieSelect;