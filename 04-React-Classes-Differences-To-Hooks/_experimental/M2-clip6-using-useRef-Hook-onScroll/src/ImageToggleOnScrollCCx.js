class MyComp extends React.Component {
  componentDidMount() {
    console.log("mounting");
  }
  componentDidUpdate(prevProps,
                     prevState) {
    console.log("dependency-chk");
  }

  componentWillUnmount() {
    console.log("dismounting");
  }


  render() {
    if (this.state.isLoading === true) {
      return null;
    } else {
      return (
        <div>
          <i>ImageToggleOnScrollCC - Class Component</i>
          <br />
          <img
            src={
              this.state.inView
                ? this.props.secondaryImg
                : this.props.primaryImg
            }
            alt=""
            ref={this.imgRef}
            width="200"
            height="200"
          />
        </div>
      );
    }
  }
}

export default ImageToggleOnScrollCC;
