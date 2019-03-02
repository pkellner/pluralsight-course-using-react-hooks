import React, { useContext,useRef,useEffect } from "react";
import SpeakerDays from "./Speakers";
import { ConfigContext } from "./App";


//const SpeakerCardDetail = React.memo(({ speaker, favorite, heartFavorite } ) => {
const SpeakerCardDetail = React.memo(({ speaker, favorite, heartFavorite } ) => {
  const context = useContext(ConfigContext);

  const numRendersRef = useRef(1);

  useEffect(() => {
    numRendersRef.current++;
    console.log(`SpeakerCardDetail.js:numRendersRef:${numRendersRef.current} ${speaker.id} ${Math.random().toString(36).substring(7)}   favorite:${favorite}`);

  });

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

            <div
              show={context.showSpeakerSpeakingDays}
              saturday={speaker.speakingSaturday}
              sunday={speaker.speakingSunday}
            >aaaaa</div>
          </i>
        </p>
      </div>
    </div>
  );
});

export default SpeakerCardDetail;
