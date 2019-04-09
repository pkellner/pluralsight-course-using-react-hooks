import React, { useState, useContext, useCallback } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";
import SpeakerDetail from "./SpeakerDetail";
import { ConfigContext } from "./App";
import useAxiosFetch from "./useAxiosFetch";
import axios from "axios";

const SpeakersWithAxios = () => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const context = useContext(ConfigContext);

  const {
    data,
    isLoading,
    hasErrored,
    errorMessage,
    updateDataRecord
  } = useAxiosFetch("http://localhost:4000/speakers", []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   new Promise(function(resolve) {
  //     setTimeout(function() {
  //       resolve();
  //     }, 1000);
  //   }).then(() => {
  //     setIsLoading(false);
  //     const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
  //       return (speakingSaturday && sat) || (speakingSunday && sun);
  //     });
  //     dispatch({
  //       type: "setSpeakerList",
  //       data: speakerListServerFilter
  //     });
  //   });
  //   return () => {
  //     console.log("cleanup");
  //   };
  // }, []); // [speakingSunday, speakingSaturday]);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };
  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };
  const heartFavoriteHandler = useCallback((e, speakerRec) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    const toggledRec = { ...speakerRec, favorite: !speakerRec.favorite };

    // do the axios PUT then updateDataRecord on success
    axios.put(`http://localhost:4000/speakers/${speakerRec.id}`, toggledRec)
      .then(function(response) {
        updateDataRecord(toggledRec);
      })
      .catch(function(error) {
        console.log(error);
      });


  }, []);

  const newSpeakerList = data
    .filter(
      ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
    )
    .sort(function(a, b) {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    });

  const speakerListFiltered = isLoading ? [] : newSpeakerList;

  if (hasErrored === true) return <div>Error Loading {errorMessage}...</div>
  if (isLoading === true) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showSpeakerSpeakingDays === false ? null : (
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
            {!speakerListFiltered
              ? []
              : speakerListFiltered.map(
                  ({ id, firstName, lastName, sat, sun, bio, favorite }) => {
                    return (
                      <SpeakerDetail
                        key={id}
                        id={id}
                        favorite={favorite}
                        onHeartFavoriteHandler={heartFavoriteHandler}
                        firstName={firstName}
                        lastName={lastName}
                        bio={bio}
                        sat={sat}
                        sun={sun}
                      />
                    );
                  }
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersWithAxios;
