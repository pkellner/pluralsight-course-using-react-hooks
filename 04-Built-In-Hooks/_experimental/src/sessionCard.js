import {Component} from "react";
import React from "react";

class SessionCard extends Component {
    render() {
        return (
            <div className="card-body">
                <h4 className="card-title">
                </h4>
                <h6 className="card-title">{this.props.session.speakersNamesCsv}</h6>
                <p className="card-text">{this.props.session.descriptionShort}
                </p>

            </div>

        );
    }
}

export default SessionCard;