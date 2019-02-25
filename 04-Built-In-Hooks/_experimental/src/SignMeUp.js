import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function SignMeUp() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [sendProcessing, setSendProcessing] = useState(false);

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const notify = () => toast.info(`You will be notified of upcoming events ${email}`);

  function sendEmailToBackend() {
    setSendProcessing(true);
    new Promise(function(resolve) {
      setTimeout(function() {
        setSendProcessing(false);
        resolve();
        notify()
        //alert(email);
      }, 2000);
    });
  }

  const buttonText = sendProcessing ? "processing..." : "Get Updates";

  return (
    <div className="container">
      <ToastContainer />
      <div className="row marginbottom10">
        <div className="col-sm-2" />
        <div className="col-sm-8">
          <div className="content">
            <div className="input-group">
              <input
                value={email}
                onChange={e => {
                  setEmailValid(validateEmail(e.target.value));
                  return setEmail(e.target.value);
                }}
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
              &nbsp;&nbsp;&nbsp;
              <span className="input-group-btn">
                <button
                  disabled={!emailValid || sendProcessing}
                  className="btn"
                  onClick={sendEmailToBackend}
                  type="submit"
                >
                  {buttonText}
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-2" />
      </div>
    </div>
  );
}

export default SignMeUp;
