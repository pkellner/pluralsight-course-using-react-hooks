import React, { useState, useReducer } from "react";
import useInterval from "./useInterval";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";

function EmailValidatingForm() {
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const [emailValid, setEmailValid] = useState(false);
  const reducer = (state, action) => {
    state = action;
    setEmailValid(validateEmail(state));
    return action;
  };
  const [email, setEmail] = useReducer(reducer, "");
  const secondsFormValidFor = 30;
  const [count, setCount] = useState(secondsFormValidFor);
  useInterval(
    () => {
      setCount(count - 1);
    },
    count > 0 ? 1000 : null
  );

  return (
    <div className="container">
      <br />
      <div>
        <div className="content">
          <input
            disabled={count <= 0}
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            type="email"
            name="email"
            required
          />
          &nbsp;&nbsp;&nbsp;
          <button
            disabled={!emailValid || count <= 0}
            onClick={() => alert(`button clicked with email ${email}`)}
            className="btn-lg"
            type="submit"
          >
            PRESS ME!
          </button>
          <div>
            {count > 0
              ? `You Have ${count} Seconds To Enter Your Email`
              : "Times Up"}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmailValidatingForm;