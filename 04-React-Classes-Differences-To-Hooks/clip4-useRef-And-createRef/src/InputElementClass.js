class InputElementClass extends
  React.Component {

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
        <input onChange={this.handleChange} />
        <br />
        {this.state.inputText}
      </div>
    );
  }
}

export default InputElementClass;
