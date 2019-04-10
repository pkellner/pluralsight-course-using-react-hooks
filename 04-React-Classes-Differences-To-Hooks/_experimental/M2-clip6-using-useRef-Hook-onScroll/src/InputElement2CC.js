    class InputElement1CC extends React.Component {
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
            <a href="/">home</a>
            <h1>InputElement1CC - Class Component</h1>
            <input placeholder="Enter Some Text" onChange={this.handleChange} />
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

    export default InputElement1CC;
