import React, { Component } from "react";
import axios from "axios";
import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Speaker extends Component {
  static GetSpeakerUrl() {
    return "https://www.siliconvalley-codecamp.com/rest/Speaker";
  }
  static async getInitialProps({ query }) {
    var promise = axios
      .get(`${Speaker.GetSpeakerUrl()}/${query.speakerId}`)
      .then(response => {
        return {
          hasErrored: false,
          speakerDataOne: response.data
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
      speakerDataOne: props.speakerDataOne
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="margintopbottom20">
            {this.state.speakerDataOne.firstName}{" "}
            {this.state.speakerDataOne.lastName}
          </h2>
          <p className="margintopbottom20">{this.state.speakerDataOne.bio}</p>
        </div>
      </div>
    );
  }
}

Speaker.propTypes = {};
Speaker.defaultProps = {};

export default Speaker;
