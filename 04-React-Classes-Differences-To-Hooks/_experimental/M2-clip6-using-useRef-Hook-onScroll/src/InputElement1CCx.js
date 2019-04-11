class MyComp extends React.Component {
  state = {
    inputText: ""
  };
  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };
  render() {
    return <input
      onChange=
        {this.handleChange} />;
  }
}

export default InputElement1CC;
