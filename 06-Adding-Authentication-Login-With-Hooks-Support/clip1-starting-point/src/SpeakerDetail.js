import ImageToggleOnScroll from "./ImageToggleOnScroll";
const SpeakerDetail = React.memo(
  ({ id, firstName, lastName, sat, sun, favorite, bio, onHeartFavoriteHandler }) => {
    return (
      <div className="card col-4 cardmin">
        <ImageToggleOnScroll
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
              onClick={e => {
                onHeartFavoriteHandler(e, {
                  id,
                  firstName,
                  lastName,
                  favorite,
                  bio,
                  sat,
                  sun
                });
              }}
            />
            <span>
              {firstName} {lastName}
            </span>
          </h4>

          <span>{bio}</span>
        </div>
      </div>
    );
  }
);

export default SpeakerDetail;
