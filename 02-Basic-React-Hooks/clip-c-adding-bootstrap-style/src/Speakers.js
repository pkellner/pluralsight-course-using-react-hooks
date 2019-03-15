import React, { useState, useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";
import SpeakerData from "./SpeakerData";
import ImageToggler from "./ImageToggler";
import { ConfigContext } from "./App";

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const [speakerList, setSpeakerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 2000);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
        return (speakingSaturday && sat) || (speakingSunday && sun);
      });
      setSpeakerList(speakerListServerFilter);
    });
    return () => {
      console.log("cleanup");
    };
  }, [speakingSunday, speakingSaturday]);

  const handleChangeSaturday = () => {
    console.log("Speaker.js:handleChangeSaturday called");
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    console.log("Speaker.js:handleChangeSunday called");
    setSpeakingSunday(!speakingSunday);
  };

  //const hideSpeakerSessionDays = context.showSpeakerSpeakingDays ? "" : "hide";

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showSpeakerSpeakingDays === false ? (
            null
          ) : (
            <div className="hide">
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
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerList
              // .filter(
              //   ({ sat, sun }) =>
              //     (speakingSaturday && sat) || (speakingSunday && sun)
              // )
              .map(({ id, firstName, lastName }) => {
                return (
                  <div
                    className="card col-4 cardmin margintopbottom20"
                    key={id}
                  >
                    <ImageToggler
                      className="card-img-top"
                      primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
                      mouseOverImg={`/static/speakers/Speaker-${id}.jpg`}
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
