import ImageTogglerOnMouseOver from "./ImageTogglerOnMouseOver";

const SpeakerDetail = ({ id, firstName, lastName, favorite, bio, onClick }) => {
    console.log(`SpeakerDetail:${id} ${firstName} ${lastName}`);
  return (
    <div className="card col-4 cardmin">
      <ImageTogglerOnMouseOver
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt="{firstName} {lastName}"
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            data-sessionid={id}
            className={favorite ? "heartredbutton" : "heartdarkbutton"}
            onClick={onClick}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>

        <span>{bio}</span>
      </div>
    </div>
  );
};

export default SpeakerDetail;
