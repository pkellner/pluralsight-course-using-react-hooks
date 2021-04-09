import React, { useState, useContext } from 'react';
import { ConfigContext } from './App';

const SignMeUp = ({ signupCallback }) => {
  const [email, setEmail] = useState('');
  const context = useContext(ConfigContext);

  return context.showSignMeUp === false ? null : (
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
            }}
          />
          &nbsp;
          <button
            disabled={!email.includes('@')}
            onClick={() => {
              signupCallback(email);
              setEmail('');
              alert('signup confirmed');
            }}
            className="btn"
            type="submit"
          >
            Get Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignMeUp;
