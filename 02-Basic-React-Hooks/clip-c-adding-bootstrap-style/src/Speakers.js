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

  const speakerList = [
    {
      id: 1124,
      firstName: "Douglas",
      lastName: "Crockford",
      sat: true,
      sun: false
    },
    {
      id: 8367,
      firstName: "Gayle",
      lastName: "Laakmann McDowell",
      sat: false,
      sun: true
    },
    { id: 823, firstName: "Kevin", lastName: "Nilson", sat: true, sun: true },
    {
      id: 8590,
      firstName: "Chris",
      lastName: "Richardson",
      sat: false,
      sun: true
    }
  ];

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
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
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerList
              .filter(({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun))
              .map(({ id, firstName, lastName }) => {
                return (
                  <div
                    className="card col-4 cardmin margintopbottom20"
                    key={id}
                  >
                    <img
                      className="card-img-top"
                      src={`/static/speakers/Speaker-${id}.jpg`}
                      alt="{firstName} {lastName}"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {firstName} {lastName}
                      </h4>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
