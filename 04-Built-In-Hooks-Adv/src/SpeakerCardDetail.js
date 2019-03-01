import React, { useContext } from "react";
import SpeakerDays from "./Speakers";
import { ConfigContext } from "./App";

function SpeakerCardDetail({ speaker }, heartFavoriteHandler) {
  const context = useContext(ConfigContext);

  const heartFavorite = function() {
    heartFavoriteHandler(1);
  };

  const heartUnFavorite = function() {
    heartFavoriteHandler(0);
  };

  return (
    <div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
      <img
        className="card-img-top"
        src={`/static/speakers/Speaker-${speaker.id}.jpg`}
      />
      <div className="card-body">
        <h4 className="card-title">
          <div className="clearfix">
            <p className="float-left">
              {speaker.firstName} {speaker.lastName}{" "}
            </p>

            <p className="float-right">
              {speaker.favorite ? (
              <button
              data-sessionid={speaker.id}
              className="heartredbutton"
              onClick={heartUnFavorite}
              />
              ) : (
              <button
              data-sessionid={speaker.id}
              className="heartdarkbutton"
              onClick={heartFavorite}
              />
              )}
            </p>
          </div>
        </h4>
        <p className="card-text">{speaker.bioShort}</p>
        <p>
          <i>
            {/*{speakingDays(context.showSpeakerSpeakingDays, speaker.speakingSaturday,speaker.speakingSunday)}*/}
            <SpeakerDays
              show={context.showSpeakerSpeakingDays}
              saturday={speaker.speakingSaturday}
              sunday={speaker.speakingSunday}
            />
          </i>
        </p>
      </div>
    </div>
  );
}

export default SpeakerCardDetail;
