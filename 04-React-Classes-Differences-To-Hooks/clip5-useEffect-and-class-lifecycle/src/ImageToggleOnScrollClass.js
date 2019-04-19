class ImageToggleOnScrollClass extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      inView: false,
      isLoading: true
    };
  }

  isInView = () => {
    if (this.imgRef.current) {
      const rect = this.imgRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  scrollHandler = () => {
    this.setState({
      inView: this.isInView()
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoading !== prevState.isLoading) {
      this.setState({
        inView: this.isInView()
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", scrollHandler);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    this.setState({
      inView: this.isInView(),
      isLoading: false
    });
  }

  render() {
    if (this.state.isLoading === true) {
      return null;
    } else {
      return (
        <div>
          <i>ImageToggleOnScrollClass - Class Component</i>
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

export default ImageToggleOnScrollClass;
