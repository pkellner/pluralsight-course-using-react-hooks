class ImageToggleOnScrollClass extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      inView: false,
      isLoading: true,
    };
  }

  isInView = () => {
    const rect = this.imgRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  scrollHandler = () => {
    this.setState({
      inView: this.isInView(),
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // nothing to do hear since changes
    //   happen on scrolling and
    //  we already have a listener for that.
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
    this.setState({
      inView: this.isInView(),
      isLoading: false,
    });
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <img
          src={
            this.state.isLoading
              ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
              : inView
              ? secondaryImg
              : primaryImg
          }
          alt=""
          ref={this.imgRef}
          width="200"
          height="200"
        />
      );
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
