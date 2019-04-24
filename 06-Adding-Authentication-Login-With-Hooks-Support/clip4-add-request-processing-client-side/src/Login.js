import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Header />
      <Menu />

      <div className="container margintopbottom">
        <div className="row">
          <form action="/login" method="POST">
            <div className="mb-3">
              <h3>Login</h3>
              <input
                onChange={e => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="text"
                name="username"
                placeholder="My user ID"
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={e => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                name="password"
                placeholder="My password"
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="text-right mt-2">
              <button
                className="btn btn-primary btn-reversed-borders"
                value="submit"
              >
                Ok
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
