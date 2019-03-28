import React, { useState } from "react";


function SignMeUp() {
  const [email, setEmail] = useState("");

  const buttonText = "Get Updates"

  return (
    <div className='container'>
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
