import * as React from "react";

class ImageToggleOnScrollCCSamp extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      inView: false,
      isLoading: true
    };
  }

  isInView = imageRefx => {
    console.log("isInView Called");
    if (this.imgRef.current) {
      console.log("isInView imageRef Good");
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

  // componentDidUpdate(prevProps) {
  //   console.log("componentDidUpdate")
  //   if (this.props.isLoading !== prevProps.isLoading) {
  //     console.log("componentDidUpdate isLoading changed")
  //   }
  // }

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
    console.log(
      `this.state.isLoading:${this.state.isLoading}:inView:${this.state.inView}`
    );
    if (this.state.isLoading === true) {
      return null;
    } else {
      return (
        <div>
          {[1, 2, 3, 4, 5].map(id => {
            return (
              <div key={id}>
                <i>ImageToggleOnScrollCC - Class Component</i>
                <br />
                <img
                  src={
                    this.state.inView
                      ? "https://via.placeholder.com/200x200.png/0000FF/808080?text=ON-SCREEN"
                      : "https://via.placeholder.com/200x200.png?text=OFF-SCREEN"
                  }
                  alt=""
                  ref={this.imgRef}
                  width="200"
                  height="200"
                />
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default ImageToggleOnScrollCCSamp;

// import React, { useRef, useEffect, useState } from "react";
//
// const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {
//   const imageRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);
//
//   useEffect(() => {
//     window.addEventListener("scroll", scrollHandler);
//     setInView(isInView());
//     setIsLoading(false);
//     return () => {
//       window.removeEventListener("scroll", scrollHandler);
//     };
//   }, [isLoading]);
//
//   const [inView, setInView] = useState(false);
//
//   const isInView = () => {
//     if (imageRef.current) {
//       const rect = imageRef.current.getBoundingClientRect();
//       return rect.top >= 0 && rect.bottom <= window.innerHeight;
//     }
//     return false;
//   };
//
//   const scrollHandler = () => {
//     setInView(() => {
//       return isInView();
//     });
//   };
//
//   return isLoading ? null : (
//     <div>
//       <i>ImageToggleOnScroll - Functional Component React Hooks</i>
//       <br />
//       <img
//         src={inView ? secondaryImg : primaryImg}
//         alt=""
//         ref={imageRef}
//         width="200"
//         height="200"
//       />
//     </div>
//   );
// };
//
// export default ImageTogglerOnScroll;

// / Ref.js
// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     // create a ref to store the textInput DOM element
//     this.textInput = React.createRef();
//   }
//   handleSubmit = e => {
//     e.preventDefault();
//
//     console.log(this.textInput.current.value);
//   };
//
//   render() {
//     // tell React that we want to associate the <input> ref
//     // with the `textInput` that we created in the constructor
//     return (
//       <div>
//         <form onSubmit={e => this.handleSubmit(e)}>
//           <input type="text" ref={this.textInput} />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
