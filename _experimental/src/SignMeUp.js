import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function SignMeUp() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
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
              setEmailValid(validateEmail(e.target.value));
              return setEmail(e.target.value);
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
