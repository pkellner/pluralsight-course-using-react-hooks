class MyComp
  extends React.Component {
  render() {
    const imageRef = React.createRef();
    return <img src="x.png" ref={imageRef} />;
  }
}

export default ImageToggleOnMouseOverCC;
