class ImageToggleOnMouseOverClass extends React.Component {
  render() {
    const imageRef = React.createRef();
    return (
      <div>
        <i>ImageToggleOnMouseOver - Class Component</i>
        <br />
        <img
          onMouseOver={() => {
            imageRef.current.src = this.props.secondaryImg;
          }}
          onMouseOut={() => {
            imageRef.current.src = this.props.primaryImg;
          }}
          src={this.props.primaryImg}
          alt=""
          ref={imageRef}
        />
      </div>
    );
  }
}

export default ImageToggleOnMouseOverClass;
