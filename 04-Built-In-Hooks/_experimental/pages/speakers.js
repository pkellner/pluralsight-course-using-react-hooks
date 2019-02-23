import React from "react";
import axios from "axios";
import SpeakerCard from "../src/speakerCard";

import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Speakers extends React.Component {
  static GetSpeakersUrl() {
    return "https://www.siliconvalley-codecamp.com/rest/speakers/ps";
  }
  static async getInitialProps({ req }) {
    const isServer = !!req;
    if (isServer) {
      var promise = axios
        .get(Speakers.GetSpeakersUrl())
        .then(response => {
          return {
            isLoading: false,
            hasErrored: false,
            speakerData: response.data
          };
        })
        .catch(error => {
          return {
            hasErrored: true,
            message: error.message
          };
        });
      return promise;
    } else {
      return {
        speakerData: [...Array(5)].map((_, i) => ({
          firstName: "",
          lastName: "",
          id: i
        })),
        isLoading: true
      };
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: props.isLoading,
      hasErrored: props.hasErrored,
      message: props.message,
      speakerData: props.speakerData
    };
  }

  componentDidMount() {
    axios
      .get(Speakers.GetSpeakersUrl())
      .then(response => {
        this.setState({
          hasErrored: false,
          isLoading: false,
          speakerData: response.data
        });
      })
      .catch(error => {
        this.setState({
          hasErrored: true,
          isLoading: false,
          speakerData: []
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {this.state.speakerData.map(speaker => (
              <div
                className="card col-4 cardmin margintopbottom20"
                key={speaker.id}
              >
                <SpeakerCard
                  isLoading={this.state.isLoading}
                  speaker={speaker}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;
