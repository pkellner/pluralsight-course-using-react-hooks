import React, { useContext, useRef, useEffect } from "react";
import SpeakerDays from './SpeakerDays';
import { ConfigContext } from "./App";

//const SpeakerCardDetail = ({ speaker, favorite, heartFavorite }) => {  WITHOUT REACT.MEMO
const SpeakerCardDetail = React.memo(({ id, firstName, lastName,bioShort, speakingSaturday, speakingSunday,  favorite, heartFavorite }) => {

  const context = useContext(ConfigContext);

  const numRendersRef = useRef(1);
  useEffect(() => {
    numRendersRef.current++;
    console.log(
      `SpeakerCardDetail.js:numRendersRef:${numRendersRef.current} ${
        id
      }  ${favorite}     ${Math.random()
        .toString(36)
        .substring(3)}`
    );
  });

  return (
    <div className="card col-4 cardmin margintopbottom20" key={id}>
      <img
        className="card-img-top"
        src={`/static/speakers/Speaker-${id}.jpg`}
      />
      <div className="card-body">
        <h4 className="card-title">
          <div className="clearfix">
            <p className="float-left">
              {firstName} {lastName}{" "}
            </p>

            <p className="float-right">
              {favorite ? (
                <button
                  data-sessionid={id}
                  className="heartredbutton"
                  onClick={(e) => heartFavorite(e,false)}
                />
              ) : (
                <button
                  data-sessionid={id}
                  className="heartdarkbutton"
                  onClick={(e) => heartFavorite(e,true)}
                />
              )}
            </p>
          </div>
        </h4>
        <p className="card-text">{bioShort}</p>
        <p>
          <i>
            <SpeakerDays
              show={context.showSpeakerSpeakingDays}
              saturday={speakingSaturday}
              sunday={speakingSunday}
             />
          </i>
        </p>
      </div>
    </div>
  );
});

export default SpeakerCardDetail;
