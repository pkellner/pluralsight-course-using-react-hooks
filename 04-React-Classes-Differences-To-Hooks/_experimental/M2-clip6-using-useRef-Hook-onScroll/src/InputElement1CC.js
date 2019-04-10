class InputElement1CC extends React.Component {
  state = {
    inputText: ""
  };

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    return (
      <div>
        <a href="/">home</a>
        <h1>InputElement1CC - Class Component</h1>
        <input placeholder="Enter Some Text" onChange={this.handleChange} />
        <br />
        {this.state.inputText}
      </div>
    );
  }
}

export default InputElement1CC;
