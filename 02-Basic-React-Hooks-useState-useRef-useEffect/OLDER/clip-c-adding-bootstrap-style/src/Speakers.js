import React, { useState, useEffect, useContext, useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";
import SpeakerData from "./SpeakerData";
import { ConfigContext } from "./App";
import speakersReducer from "./speakersReducer";
import * as PropTypes from "prop-types";
import SpeakerDetail from "./SpeakerDetail";



SpeakerDetail.propTypes = {
  id: PropTypes.any,
  favorite: PropTypes.any,
  onClick: PropTypes.func,
  firstName: PropTypes.any,
  lastName: PropTypes.any,
  bio: PropTypes.any
};
const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  //const [speakerList, setSpeakerList] = useState([]);
  const [speakerList, dispatch] = useReducer(speakersReducer, []);



  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 500);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
        return (speakingSaturday && sat) || (speakingSunday && sun);
      });

      //setSpeakerList(speakerListServerFilter);
      dispatch({
        type: "loadspeakers",
        data: speakerListServerFilter
      });



    });
    return () => {
      console.log("cleanup");
    };
  }, []); // [speakingSunday, speakingSaturday]);

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

  function heartFavorite(e, favoriteValue) {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId
    });
  }

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
              .filter(
                ({ sat, sun }) =>
                  (speakingSaturday && sat) || (speakingSunday && sun)
              )
              .map(({ id, firstName, lastName,bio,favorite }) => {
                return (
                  <SpeakerDetail key={id} id={id} favorite={favorite} onClick={e => heartFavorite(e, !favorite)}
                                 firstName={firstName} lastName={lastName} bio={bio}/>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
