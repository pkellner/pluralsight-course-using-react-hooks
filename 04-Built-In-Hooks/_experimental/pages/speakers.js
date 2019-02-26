import React, { useState, useEffect } from "react";
import axios from "axios";
import SpeakerCard from "../src/speakerCard";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  useEffect(() => {
    let mounted = true;
    let source = axios.CancelToken.source();
    axios
      .get("http://localhost:4000/speakers", {
        cancelToken: source.token
      })
      .then(a => {
        if (mounted) {
          setSpeakers(a.data);
          setIsLoading(false);
        }
      })
      .catch(function(e) {
        if (mounted) {
          setIsLoading(false);
          setIsError(true);
          setErrorMessage(e.message);
        }
      });
    return function() {
      mounted = false;
      source.cancel("Cancelling in cleanup");
    };
  }, []);

  if (isError) return <div>Error: {errorMessage}</div>;
  if (isLoading) return <div>loading...</div>;

  function speakingDays(speaker) {
    if (speaker.speakingSaturday && speaker.speakingSunday)
      return "Speaking Saturday and Sunday";
    if (speaker.speakingSaturday && !speaker.speakingSunday)
      return "Speaking Saturday";
    if (!speaker.speakingSaturday && speaker.speakingSunday)
      return "Speaking Sunday";
    if (!speaker.speakingSaturday && !speaker.speakingSunday)
      return "Not Speaking";
  }

  function handleChangeSaturday() {
    setSpeakingSaturday(!speakingSaturday);
  }

  function handleChangeSunday() {
    setSpeakingSunday(!speakingSunday);
  }

  return (
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
          {speakers
            .filter(function(rec) {
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
            })
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
  );
};

export default Speakers;
