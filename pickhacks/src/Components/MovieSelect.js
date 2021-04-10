import React, { useState } from "react";
import Movie from "./Movie";

const MovieSelect = ({ params }) => {
  const [name, setName] = useState("Ptk");

  function movieYes() {
    //add movie name to database (from state?)
    //next movie
    console.log("I liked this movie");
    console.log(params.id);
  }

  //   const [movieInfo, setMovie] = useState();

  function movieNo() {
    //next movie
    console.log("I didn't like this one");
  }

  return (
    <div className="">
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="Prime Video"
                />
                <label className="form-control-label" for="name">
                  What's your name?
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-2">
          <div
            className="movieReaction"
            style={{ color: "red" }}
            onClick={movieNo}
          >
            <i class="fas fa-thumbs-down fa-10x" />
          </div>
        </div>
        <div className="col-8">
          <Movie
            name="Zach Snyder's Justice League"
            image="https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
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
