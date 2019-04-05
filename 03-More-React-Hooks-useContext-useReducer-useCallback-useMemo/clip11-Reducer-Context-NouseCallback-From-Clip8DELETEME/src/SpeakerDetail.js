import ImageToggleOnMouseOver from "./ImageToggleOnScroll";

import {StateContext,DispatchContext} from './Speakers'


const  SpeakerDetail = React.memo( ({
                           id,
                           firstName,
                           lastName,
                           favorite,
                           bio
                       }) => {
    console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);


    const appState = React.useContext(StateContext)
    const dispatch = React.useContext(DispatchContext)


    return (
        <div className="card col-4 cardmin">
            <ImageToggleOnMouseOver
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
                            dispatch({
                                type: favorite === true ? "favorite" : "unfavorite",
                                sessionid: id
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
});

export default SpeakerDetail;
