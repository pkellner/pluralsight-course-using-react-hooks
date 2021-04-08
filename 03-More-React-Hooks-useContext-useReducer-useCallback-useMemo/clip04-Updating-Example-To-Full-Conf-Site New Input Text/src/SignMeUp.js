import React, { useState } from 'react';

const SignMeUp = ({ signupCallback }) => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  return (
    <div className="container">
      <div>
        <div className="content">
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailValid(e.target.value.includes('@'));
            }}
          />
          &nbsp;
          <button
            onClick={() => {
              signupCallback(email);
              setEmail('');
              alert('confirmed');
            }}
            className="btn"
            type="submit"
            disabled={!emailValid}
          >
            Get Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignMeUp;
