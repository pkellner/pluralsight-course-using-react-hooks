import React, { useState, useReducer } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import emailReducer from "./emailReducer";

function SignMeUp() {
  // const [email, setEmail] = useState("");
  // const [emailValid, setEmailValid] = useState(false);

  //https://medium.com/crowdbotics/how-to-use-usereducer-in-react-hooks-for-performance-optimization-ecafca9e7bf5

  //const reducer = (state, action) => action;

  // const reducer = (state, action) => {
  //   return action;
  // };



  const reducer = (state, action) => {
    switch (action.type) {
      case "setEmail": {
        return {
          ...state,
          email: action.email,
          emailValid: validateEmail(action.email)
        };
      }
      // case 'decrement': return state - 1;
      // case 'reset': return 0;
      default:
        throw new Error("Unexpected action");
    }
  };

  // const [email, setEmail] = useReducer(reducer, "");
  // const [emailValid, setEmailValid] = useReducer(reducer, false);

  const initialState = {
    email: "",
    emailValid: false
  };

  //const [{ email, emailValid }, dispatch] = useReducer(reducer, initialState);
  const [{ email, emailValid }, dispatch] = useReducer(
    emailReducer,
    initialState
  );

  const [sendProcessing, setSendProcessing] = useState(false);

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const notify = () =>
    toast.info(`You will be notified of upcoming events ${email}`);

  function sendEmailToBackend() {
    setSendProcessing(true);
    new Promise(function(resolve) {
      setTimeout(function() {
        setSendProcessing(false);
        resolve();
        notify();
      }, 2000);
    });
  }

  const buttonText = sendProcessing ? "processing..." : "Get Updates";

  return (
    <div className="container">
      <div>
        <ToastContainer />
        <div className="content">
          <input
            value={email}
            onChange={e => {
              dispatch({ type: "setEmail", email: e.target.value });
              //setEmailValid(validateEmail(e.target.value));
              //return setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            type="email"
            name="email"
            required
          />
          &nbsp;
          <button
            disabled={!emailValid || sendProcessing}
            className="btn"
            onClick={sendEmailToBackend}
            type="submit"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignMeUp;
