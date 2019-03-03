import React, { useRef, useState } from "react";

// https://github.com/FormidableLabs/react-animations/blob/master/src/pulse.js

function test2() {
  const inputEl = useRef(null);
  const imgEl = useRef(null);
  const svgEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    //inputEl.current.focus();
    imgEl.current.hidden = true;
  };

  const onButtonClickSetButtonColor = () => {
    // `current` points to the mounted text input element
    //inputEl.current.focus();
    //setButtonColor('blue');
    setMyClassName("myclass");
  };

  const onButtonClickSetSvgWidth = () => {
    //svgEl.current.width = 100;
      setSvgWidth(100);
  };

  const [buttonColor, setButtonColor] = useState("orange");
  const [myClassName, setMyClassName] = useState("");

  const [svgWidth,setSvgWidth] = useState(22);

  return (
    <div>
      <style jsx>{`
        .myclass {
          text-decoration: none;
          color: ${buttonColor};
        }
      `}</style>

      <img ref={imgEl} src="/static/heart-red.png" alt="heart" />
      <hr />

      <div className={myClassName}>ABCDE</div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>

      <button onClick={onButtonClickSetButtonColor}>SetButtonColor</button>

      <button onClick={onButtonClickSetSvgWidth}>svg</button>

      <svg
        ref={svgEl}
        viewBox="0 0 645 585"
        width="{svgWidth}"
        height="25"
        fill-opacity="0.9"
        fill="red"
      >
        <animate
          attributeType="CSS"
          attributeName="opacity"
          from="1"
          to="0"
          dur="1s"
          repeatCount="1"
        />
        <defs id="defs4" />
        <g id="layer1">
          <path
            d="M 297.29747,550.86823 C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 L 320.95052,119.66445 L 330.81015,98.079942 C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z"
            id="path2417"
          />
          <g transform="translate(129.28571,-64.285714)" id="g2221" />
        </g>
      </svg>
    </div>
  );
}

export default test2;

// import { scale3d } from './utils';
// import type { Animation } from './types';
//
// const pulse: Animation = {
//     from: {
//         transform: scale3d(1, 1, 1)
//     },
//     '50%': {
//         transform: scale3d(1.05, 1.05, 1.05)
//     },
//     to: {
//         transform: scale3d(1, 1, 1)
//     }
// };
