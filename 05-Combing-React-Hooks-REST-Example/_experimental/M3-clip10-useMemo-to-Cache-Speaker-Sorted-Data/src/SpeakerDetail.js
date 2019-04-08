import ImageToggleOnScroll from "./ImageToggleOnScroll";

// need to have favoriteSpeaker cause of memo
const SpeakerDetail = React.memo(
  ({ speakerRec, onHeartFavoriteHandler, favoriteSpeaker }) => {
    const { id, firstName, lastName, favorite, bio } = speakerRec;
    console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);

    const favoriteClassName =
      speakerRec.favoriteChanging === true
        ? "heartorangebutton"
        : favorite === true
        ? "heartredbutton"
        : "heartdarkbutton";

    console.log(`SpeakerDetail:favoriteChanging:${speakerRec.favoriteChanging}  favoriteClassName:${favoriteClassName}`);


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
              className={favoriteClassName}
              onClick={e => {
                onHeartFavoriteHandler(e, speakerRec);
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
