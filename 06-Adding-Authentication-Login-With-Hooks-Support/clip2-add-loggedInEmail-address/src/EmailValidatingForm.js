import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import useEmailValidation from "./useEmailValidation";

function EmailValidatingForm() {

  const { count, email, setEmail, emailValid } = useEmailValidation(10);

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