import React, { useState } from 'react';

const SignMeUp = ({ signupCallback }) => {
  const [email, setEmail] = useState('');

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
            disabled={!email.includes('@')}
          >
            Get Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignMeUp;
