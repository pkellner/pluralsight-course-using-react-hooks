import React, { useState, useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";

import axios from "axios";
import {ConfigContext} from "./App";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const [serverSideFilter, setServerSideFilter] = useState(false);

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
              setSpeakers(a.data);
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

  if (isError)
    return (
      <div>
        Error: {errorMessage} (likely json-server not running. To run: "npm run
        json-server"
      </div>
    );

  const context = useContext(ConfigContext);

  const speakingDays = speaker => {
    if (context.showSpeakerSpeakingDays) {
      if (speaker.speakingSaturday && speaker.speakingSunday)
        return "Speaking Saturday and Sunday";
      if (speaker.speakingSaturday && !speaker.speakingSunday)
        return "Speaking Saturday";
      if (!speaker.speakingSaturday && speaker.speakingSunday)
        return "Speaking Sunday";
      if (!speaker.speakingSaturday && !speaker.speakingSunday)
        return "Not Speaking";
    } else {
      return null;
    }
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

  // THIS DOES NOT WORK RIGHT, NEED TO MAKE SEPARATE LOAD FROM SERVER, LOAD FROM CLIENT WIHTOUT CHECKBOX TOGGLE
  // function handleChangeServerSideFilter() {
  //   setSearchText("");
  //   setSpeakingSaturday(true);
  //   setSpeakingSunday(true);
  //   setServerSideFilter(!serverSideFilter);
  // }

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
          <div className="card-deck">
            {speakers
              .filter(!serverSideFilter ? new1 : () => true)
              .map(speaker => (
                <div
                  className="card col-4 cardmin margintopbottom20"
                  key={speaker.id}
                >
                  <img
                    className="card-img-top"
                    src={`/static/speakers/Speaker-${speaker.id}.jpg`}
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      {speaker.firstName} {speaker.lastName}{" "}
                    </h4>
                    <p className="card-text">{speaker.bioShort}</p>
                    <p>
                      <i>{speakingDays(speaker)}</i>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
