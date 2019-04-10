class ImageToggleOnScrollCCTest extends React.Component {
  constructor(props) {
    super(props);
    //console.log("setting this.imageRef...");
    this.imageRef = React.createRef();
    this.state = { img: this.props.secondaryImg };
  }

  isInView = () => {

    if (this.imageRef.current) {
      const rect = this.imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  componentDidMount() {
    console.log(`cdm:imageRef:${this.imageRef ? "true" : "false"}`);
    console.log(`isIn View:${this.isInView()}`);
    this.setState({ img: this.props.primaryImg });
  }

  render() {
    return (
      <img
        src={this.state.img}
        alt="x"
        ref={this.imageRef}
        width="200"
        height="200"
      />
    );
  }
}

export default ImageToggleOnScrollCCTest;
