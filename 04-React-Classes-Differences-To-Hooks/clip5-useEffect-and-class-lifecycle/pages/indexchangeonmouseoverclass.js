import ImageToggleOnMouseOverClass from "../src/ImageToggleOnMouseOverClass";

const indexchangeonmouseoverclass = () => {
  return <div>
    <ImageToggleOnMouseOverClass
      primaryImg="/static/speakers/bw/Speaker-187.jpg"
      secondaryImg="/static/speakers/Speaker-187.jpg"
      alt=""
    />
    &nbsp;&nbsp;&nbsp;
    <ImageToggleOnMouseOverClass
      primaryImg="/static/speakers/bw/Speaker-1124.jpg"
      secondaryImg="/static/speakers/Speaker-1124.jpg"
      alt=""
    />
  </div>;
};

export default indexchangeonmouseoverclass;
