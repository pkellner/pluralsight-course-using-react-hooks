import React from 'react';
import useEmailValidation from './useEmailValidation';

function EmailValidatingForm() {
  const { setEmail, count, email, emailValid, setCount } = useEmailValidation(
    30,
  );

  return (
    <div className="container">
      <br />
      <div>
        <div className="content">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={count <= 0}
            value={email}
            placeholder="Enter Email"
            type="email"
            name="email"
            required
          />
          &nbsp;&nbsp;&nbsp;
          <button
            disabled={!emailValid || count <= 0}
            onClick={() => {
              setCount(0);
              alert(`button clicked with email ${email}`);
            }}
            className="btn-lg"
            type="submit"
          >
            PRESS ME!
          </button>
          <div>
            {count > 0
              ? `You Have ${count} Seconds To Enter Your Email`
              : 'Email Entered or Time Expired'}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmailValidatingForm;
