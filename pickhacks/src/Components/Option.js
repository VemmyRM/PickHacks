import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import firebase from "firebase";

const Options = ({ phrase }) => {
  const [groupId, setId] = useState(0);
  var database = firebase.database();

  function addIdToDatabase() {
    var random = uuidv4();
    setId(random);
    database.ref("id/" + random).set({
      id: random,
    });
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary option"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        {phrase}
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {/* <div className="form-group">
                  <label for="watcher-name" className="col-form-label">
                    What's your name?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="watcher-name"
                  />
                </div> */}

                <div className="form-group">
                  <p>Which steaming services do you have?</p>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="Netflix"
                      value="Netflix"
                    />
                    <label className="form-check-label" for="Netflix">
                      Netflix
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="Prime Video"
                      value="Prime Video"
                    />
                    <label className="form-check-label" for="Prime Video">
                      Prime Video
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="Hulu"
                      value="Hulu"
                    />
                    <label className="form-check-label" for="inlineRadio3">
                      Hulu
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="Disney Plus"
                      value="Disney Plus"
                    />
                    <label className="form-check-label" for="Disney Plus">
                      Disney Plus
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label for="genreSelect">
                    Which genres are you interested in?
                  </label>
                  <select multiple className="form-control" id="genreSelect">
                    <option>All</option>
                    <option>Action</option>
                    <option>Adventure</option>
                    <option>Romance</option>
                    <option>Comedy</option>
                    <option>Horror</option>
                    <option>Sci-Fi</option>
                  </select>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => addIdToDatabase()}
                    >
                      Get Link!
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="watcher-name"
                    value={
                      groupId ? `http://localhost:3000/movies/${groupId}` : ""
                    }
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
