import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo
} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";
import SpeakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";
import { ConfigContext } from "./App";
import speakersReducer from "./speakersReducer";
import axios from "axios";

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const [speakerList, dispatch] = useReducer(speakersReducer, []);

  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4000/speakers")
      .then(function(response) {
        setIsLoading(false);
        dispatch({
          type: "setSpeakerList",
          data: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    return () => {
      console.log("cleanup");
    };
  }, []); // [speakingSunday, speakingSaturday]);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };
  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };
  const heartFavoriteHandler = useCallback((e, speakerRec) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    const speakerRecUpdate = { ...speakerRec, favorite: !speakerRec.favorite };

    dispatch({
      type: "favoritechanging",
      sessionId
    });
    axios
      .put(`http://localhost:4000/speakers/${speakerRec.id}`, speakerRecUpdate)
      .then(function(response) {
        console.log(response);
        dispatch({
          type: speakerRecUpdate.favorite === true ? "favorite" : "unfavorite",
          sessionId
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  // const newSpeakerList = useMemo(
  //   () =>
  //     speakerList
  //       .filter(
  //         ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
  //       )
  //       .sort(function(a, b) {
  //         if (a.firstName < b.firstName) {
  //           return -1;
  //         }
  //         if (a.firstName > b.firstName) {
  //           return 1;
  //         }
  //         return 0;
  //       }),
  //   [speakingSaturday, speakingSunday, speakerList]
  // );

  const newSpeakerList = speakerList
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

  if (isLoading) return <div>Loading...</div>;

  console.log("SpeakersWithaxios rendering:cnt:" + speakerListFiltered.length);

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
            {speakerListFiltered.slice(0, 3).map(speakerRec => {
              return (
                <SpeakerDetail
                  key={speakerRec.id}
                  onHeartFavoriteHandler={heartFavoriteHandler}
                  speakerRec={speakerRec}
                  speakerFavorite={speakerRec.favorite}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
