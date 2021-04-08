import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const SignMeUp = ({signupCallback}) => {

  const [email,setEmail] = useState("");
  const [emailValid,setEmailValid] = useState(false);
  const [sendProcessing, setSendProcessing] = useState(false);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const notify = () => {
    toast.info(`You will be notified of upcoming events ${email}`);
  };

  function sendEmailToBackend() {
    setSendProcessing(true);
    new Promise(function (resolve) {
      setTimeout(function() {
        setSendProcessing(false);
        setEmail('');
        resolve();
      },1000);
    }).then(() => {
      notify();
      signupCallback(email);
      setEmail('');
    });
  }

  const buttonText = sendProcessing ? 'processing...' : 'Get Updates';

  return (
    <div className="container">
      <div>
        <ToastContainer />
        <div className="content">
          <input placeholder="Enter Email" type="email" name="email" value={email}
                 onChange={(e)=>{
                   setEmailValid(validateEmail(e.target.value));
                   return setEmail(e.target.value);
                 }}
                 required />
          &nbsp;
          <button onClick={sendEmailToBackend}
            className="btn" type="submit" disabled={!emailValid || sendProcessing}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default SignMeUp;