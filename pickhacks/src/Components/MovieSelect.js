import React, { useState } from "react";

const MovieSelect = () => {
  function movieYes() {
    //add movie name to database (from state?)
    //next movie
    console.log("I liked this movie");
  }

  //   const [movieInfo, setMovie] = useState();

  function movieNo() {
    //next movie
    console.log("I didn't like this one");
  }

  return (
    <div className="">
      <div className="row align-items-center">
        <div className="col-2">
          <div style={{ color: "red" }} onClick={movieNo}>
            <i class="fas fa-thumbs-down fa-10x"></i>
          </div>
        </div>
        <div className="col-8">
          <h1>Zach Snyder's Justice League</h1>
          <img
            style={{ height: "1000px" }}
            src="https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
          />
        </div>
        <div className="col-2">
          <div style={{ color: "green" }} onClick={movieYes}>
            <i class="fas fa-thumbs-up fa-10x"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSelect;
