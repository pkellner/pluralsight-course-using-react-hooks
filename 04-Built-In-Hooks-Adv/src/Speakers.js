import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef
} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/site.css";

import { Header } from "../src/Header";
import { Menu } from "../src/Menu";

import axios from "axios";
import { ConfigContext } from "./App";

import speakersReducer from "./speakersReducer";

import SpeakerDays from "./SpeakerDays";
import SpeakerCardDetail from "./SpeakerCardDetail";

const Speakers = () => {
  const [speakers, dispatch] = useReducer(speakersReducer, []);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const [serverSideFilter, setServerSideFilter] = useState(false);

  const numRendersRef = useRef(1);

  function new1(rec) {
    if (
      (speakingSaturday && rec.speakingSaturday) ||
      (speakingSunday && rec.speakingSunday)
    ) {
      return (
        searchText.length === 0 ||
        `${rec.firstName} ${rec.lastName}`
          .toUpperCase()
          .indexOf(searchText.toUpperCase()) !== -1
      );
    }
    return false;
  }

  useEffect(
    () => {
      numRendersRef.current++;
      console.log(`Speakers.js:numRendersRef:${numRendersRef.current}`);

      let mounted = true;
      let source = axios.CancelToken.source();
      setIsLoading(true);
      axios
        .get("http://localhost:4000/speakers", {
          cancelToken: source.token
        })
        .then(a => {
          if (mounted) {
            if (serverSideFilter) {
              const speakerData = a.data;
              const speakerDataFilter = speakerData.filter(new1);
              setSpeakers(speakerDataFilter);
            } else {
              //setSpeakers(a.data);
              dispatch({
                type: "loadspeakers",
                data: a.data.slice(0, 3)
              });
            }
            setIsLoading(false);
          }
        })
        .catch(e => {
          if (mounted) {
            setIsLoading(false);
            setIsError(true);
            setErrorMessage(e.message);
          }
        });
      return () => {
        mounted = false;
        source.cancel("Cancelling in cleanup");
      };
    },
    serverSideFilter ? [searchText, speakingSaturday] : []
  );

  const context = useContext(ConfigContext);

  const speakingDays = function(
    showSpeakerSpeakingDays,
    speakingSaturday,
    speakingSunday
  ) {
    if (!context.showSpeakerSpeakingDays === true) return null;

    if (speakingSaturday === true && speakingSunday === true)
      return "Speaking Saturday and Sunday";
    if (speakingSaturday === true && !speakingSunday === true)
      return "Speaking Saturday";
    if (!speakingSaturday === true && speakingSunday === true)
      return "Speaking Sunday";
    if (!speakingSaturday === true && !speakingSunday === true)
      return "Not Speaking";
  };

  const filterData = rec => {
    if (
      (speakingSaturday && rec.speakingSaturday) ||
      (speakingSunday && rec.speakingSunday)
    ) {
      return (
        searchText.length === 0 ||
        `${rec.firstName} ${rec.lastName}`
          .toUpperCase()
          .indexOf(searchText.toUpperCase()) !== -1
      );
    }
    return false;
  };

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const heartUnFavoriteHandler = e => {
    e.preventDefault();
    dispatch({
      type: "unfavorite",
      sessionId: parseInt(e.target.attributes["data-sessionid"].value)
    });
  };

  // = useCallback(() =>

  const heartFavoriteHandler = useCallback(e => {
    debugger;
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    e.preventDefault();
    dispatch({
      type: "favorite",
      sessionId
    });
  }, []);

  if (isError)
    return (
      <div>
        Error: {errorMessage} (likely json-server not running. To run: "npm run
        json-server"
      </div>
    );
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
          <div className="text-lg-left">
            <span>
              <i>&nbsp;&nbsp;{isLoading ? "loading..." : ""}&nbsp;&nbsp;</i>
            </span>
          </div>
        </div>
        <div className="row">
          {speakers
              .filter(!serverSideFilter ? new1 : () => true)
              .map(speaker => {
                return (
                    <div>&nbsp;&nbsp;{speaker.favorite === true ? "true " : "false "}</div>
                );
              })}
        </div>
        <div className="row">
          <div className="card-deck">
          {speakers
              .filter(!serverSideFilter ? new1 : () => true)
              .map(speaker => {
                return (
                    <SpeakerCardDetail speaker={speaker} favorite={speaker.favorite}
                                       heartFavorite={heartFavoriteHandler}   />
                );
              })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
