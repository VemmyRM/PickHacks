import React, { useState } from "react";
import Movie from "./Movie";
import firebase from "firebase";

const MovieSelect = (props) => {
  const [name, setName] = useState("Ptk");
  const [movie, setMovie] = useState({
    name: "Justice League",
    url: "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
  });
  const [currentNumber, setCurrentNumber] =useState(0);

  var database = firebase.database();

  function setUserName(event) {
    setName(event.target.value);
  }

  function movieYes() {
    console.log("I liked this movie");
    var currentId = props.match.params.id;
    database.ref(`id/${currentId}/${name}`).set({
    });

    var postListRef = database.ref(`id/${currentId}/${name}/movies`);
    var newPostRef = postListRef.push();
    newPostRef.set(movie);

    setCurrentNumber(currentNumber+1);
    nextMovie();
  }

  function nextMovie() {
    var getMoviesRef = firebase.database().ref(`movies/${currentNumber}`);
    getMoviesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log("data from db: "+data.name);

    var currentMovie = {
      name: data.name,
      url: data.image
    };
    setMovie(currentMovie);
    console.log("movie name: "+movie.name);
});
  }

  return (
    <div className="">
      <div className="form-group">
        <label className="form-control-label" for="name">
          What's your name?
          </label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="Prime Video"
          onChange={setUserName}
        />
      </div>
      <div className="row align-items-center">
        <div className="col-2">
          <div
            className="movieReaction"
            style={{ color: "red" }}
            onClick={nextMovie}
          >
            <i className="fas fa-thumbs-down fa-10x" />
          </div>
        </div>
        <div className="col-8">
          <Movie
            name={movie.name}
            image={movie.url}
          />
        </div>
        <div className="col-2">
          <div
            className="movieReaction"
            style={{ color: "green" }}
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
