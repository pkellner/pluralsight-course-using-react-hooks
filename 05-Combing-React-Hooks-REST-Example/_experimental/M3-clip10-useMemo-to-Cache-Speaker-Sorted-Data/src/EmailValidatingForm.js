import React, { useState, useEffect } from "react";
import useInterval from "./useInterval";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";

function EmailValidatingForm() {
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const [email, setEmail] = useState();
  const [emailValid, setEmailValid] = useState(false);
  const [count, setCount] = useState(7);

  useInterval(
    () => {
      setCount(count - 1);
    },
    count > 0 ? 1000 : null
  );

  return (
    <div className="container">
      <div>
        <div className="content">
          <input
            disabled={count <= 0}
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
          &nbsp;&nbsp;&nbsp;
          <button
            disabled={!emailValid || count <= 0}
            onClick={() => alert("button clicked")}
            className="btn-lg"
            type="submit"
          >
            PRESS ME!
          </button>
          <div>{ count > 0 ? `You Have ${count} Seconds To Enter Your Email` : "Times Up"}</div>
        </div>
      </div>
    </div>
  );
}

export default EmailValidatingForm;
