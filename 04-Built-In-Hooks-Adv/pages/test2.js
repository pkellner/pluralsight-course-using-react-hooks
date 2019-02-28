import React,{useRef,useState} from 'react';

// https://github.com/FormidableLabs/react-animations/blob/master/src/pulse.js


function test2() {
    const inputEl = useRef(null);
    const imgEl = useRef(null);
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

    const [buttonColor,setButtonColor] = useState("orange")
    const [myClassName,setMyClassName] = useState("");

    return <div>

        <style jsx>{`
          .myclass {
            text-decoration: none;
            color: ${buttonColor};

            



          }`}</style>

        <img ref={imgEl} src="/static/heart-red.png" alt="heart" />
        <hr />

        <div className={myClassName} >ABCDE</div>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>

        <button onClick={onButtonClickSetButtonColor}>SetButtonColor</button>


    </div>;
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
