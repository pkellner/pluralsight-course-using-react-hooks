import * as React from "react";

class ImageToggleOnScrollCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inView: false,
      isLoading: true
    };
    this.imageRef = React.createRef();
  }

  isInView = () => {
    if (this.imageRef.current) {
      const rect = this.imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  scrollHandler = () => {
    this.setState({
      inView: this.isInView()
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.isLoading !== prevProps.isLoading) {
      //console.log("componentDidUpdate");
      //this.fetchData(this.props.userID);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", scrollHandler);
  }

  componentDidMount() {
    //console.log("cdm called");

    console.log(`cdm:imageRef:${this.imageRef ? "true" : "false"}`);

    console.log(`cdm:isInView():${this.isInView()}`);

    this.setState({
      inView: this.isInView(),
      isLoading: false
    });

    window.addEventListener("scroll", this.scrollHandler);
    // debugger;
    // const isInViewNow = this.isInView();
    // this.setState(previousState => {
    //   return {
    //     inView: isInViewNow,
    //     isLoading: false
    //   };
    // });
  }

  render() {
    console.log(`this.state.isLoading:${this.state.isLoading}`);
    // if (this.state.isLoading === true) {
    //   return <div>isLoading true</div>;
    // } else {

    return (
      <div>
        <i>ImageToggleOnScrollCC - Class Component</i>
        <br />
        <img
          src={
            this.state.inView ? this.props.secondaryImg : this.props.primaryImg
          }
          alt=""
          ref={this.imageRef}
          width="200"
          height="200"
        />
      </div>
    );
    //}

    // return this.state.isLoading === false ? (
    //   <div>Loading...</div>
    // ) : (
    return (
      <div>
        <i>ImageToggleOnScrollCC - Class Component</i>
        <br />
        <img
          src={
            this.state.inView ? this.props.secondaryImg : this.props.primaryImg
          }
          alt=""
          ref={this.imageRef}
          width="200"
          height="200"
        />
      </div>
    );
  }
}

export default ImageToggleOnScrollCC;

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
