import React from "react";
import axios from "axios";
import SessionCard from "../src/sessionCard";
import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Sessions extends React.Component {
  static GetSessionsUrl() {
    //return 'https://www.siliconvalley-codecamp.com/rest/sessions/ps';
    return "http://localhost:4000/sessions";
  }
  static async getInitialProps() {
    var promise = axios
      .get(Sessions.GetSessionsUrl())
      .then(response => {
        return {
          hasErrored: false,
          sessionData: response.data
        };
      })
      .catch(error => {
        return {
          hasErrored: true,
          message: error.message
        };
      });
    return promise;
  }

  constructor(props) {
    super(props);
    this.state = {
      hasErrored: props.hasErrored,
      message: props.message,
      sessionData: props.sessionData
    };
  }

  render() {
    if (this.state.hasErrored)
      return <div>REST Call errored. likely need to 'npm run json-server'</div>;

    return (
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {this.state.sessionData.map(session => (
              <div
                className="card col-4 cardmin margintopbottom"
                key={session.id}
              >
                <SessionCard session={session} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Sessions;
