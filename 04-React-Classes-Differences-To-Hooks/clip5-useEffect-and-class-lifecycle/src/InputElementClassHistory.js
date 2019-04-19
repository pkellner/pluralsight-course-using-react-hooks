class InputElementClassHistory extends
    React.Component {
  state = {
    inputText: "",
    historyList: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState(previousState => {
      return {
        inputText: value,
        historyList: [...previousState.historyList, value]
      };
    });
  };

  render() {
    return (
      <div>
        <input placeholder="Enter Some Text"
               onChange={this.handleChange} />
        <br />
        {this.state.inputText}
        <hr />
        <br />
        <ul>
          {this.state.historyList.map(rec => {
            return <div>{rec}</div>;
          })}
        </ul>
      </div>
    );
  }
}

export default InputElementClassHistory;
