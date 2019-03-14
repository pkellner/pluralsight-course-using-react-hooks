import React, { useState, useRef, useEffect } from "react";
import SpeakerData from "../src/SpeakerData";
import ImageToggler from "../src/ImageToggler";

const ImageChange = () => {
  const imageRef = useRef();

  // const submitButton = () => {
  //     setName(nameRef.current.value);
  // };

  useEffect(() => {
    // const id = document.getElementById("imgid");
    // id.addEventListener("select", () => {
    //   console.log("onmouseover getElementById");
    // });
    // imageRef.current.addEventListener("onmouseover", () => {
    //   console.log("onmouseover");
    // });
    // return () => {
    //   imageRef.current.removeEventListener("onmouseover");
    // };
    // return () => {
    //   console.log("cleanup");
    // };
  }, []);

  // function changePictureOnMouseOver() {
  //   console.log("changePictureOnMouseOver");
  // }
  //
  // function changePictureOnMouseOut() {
  //   console.log("changePictureOnMouseOut");
  // }

  // onMouseOver={changePictureOnMouseOver}
  // onMouseOut={changePictureOnMouseOut}





  return (
    <div>
      <ImageToggler
        primaryImg="/static/speakers/bw/Speaker-1124.jpg"
        mouseOverImg="/static/speakers/Speaker-1124.jpg"
      />
        &nbsp;&nbsp;&nbsp;
        <ImageToggler
            primaryImg="/static/speakers/bw/Speaker-187.jpg"
            mouseOverImg="/static/speakers/Speaker-187.jpg"
        />
    </div>
  );
};

export default ImageChange;

// import React,{useRef} from 'react';
//
// function TextInput(){
//     //creating the ref by passing initial value null
//     const nameRef = useRef(null);
//
//     function handleFocus(){
//         //current is pointing to input element when component is mounts to dom
//         nameRef.current.focus()
//     }
//     return(
//         <div>
//             <input ref={nameRef} placeholder="name" />
//             <button onClick={handleFocus}>Focus</button>
//         </div>
//     )
//
// }
