import React, { useState, useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const handleChangeSaturday = () => {
    console.log("Speaker.js:handleChangeSaturday called");
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    console.log("Speaker.js:handleChangeSunday called");
    setSpeakingSunday(!speakingSunday);
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom ">
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleChangeSaturday}
                checked={speakingSaturday}
              />
              Saturday Speakers
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleChangeSunday}
                checked={speakingSunday}
              />
              Sunday Speakers
            </label>
          </div>

          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text" id="btnGroupAddon">
                @
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              onChange={e => {
                return setSearchText(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="card-deck">
            <div className="card col-4 cardmin margintopbottom20" key={1123}>
              <img
                className="card-img-top"
                src={`/static/speakers/Speaker-1124.jpg`}
              />
              <div className="card-body">
                <h4 className="card-title">Douglas Crockford</h4>
                <p className="card-text">JSON guy</p>
                <p>
                  <i />
                </p>
              </div>
            </div>
            <div className="card col-4 cardmin margintopbottom20" key={8367}>
              <img
                className="card-img-top"
                src={`/static/speakers/Speaker-8367.jpg`}
              />
              <div className="card-body">
                <h4 className="card-title">Gayle Laakmann McDowell</h4>
                <p className="card-text">Author and Speaker</p>
                <p>
                  <i />
                </p>
              </div>
            </div>
            <div className="card col-4 cardmin margintopbottom20" key={8590}>
              <img
                className="card-img-top"
                src={`/static/speakers/Speaker-8590.jpg`}
              />
              <div className="card-body">
                <h4 className="card-title">Chris Richardson</h4>
                <p className="card-text">Microservices Expert</p>
                <p>
                  <i />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
