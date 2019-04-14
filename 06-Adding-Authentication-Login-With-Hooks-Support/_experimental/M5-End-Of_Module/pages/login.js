import React, { FunctionComponent, useState } from 'react';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import ls from 'local-storage';

const Login = ({ error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Login</h1>

      <form action="/login" method="POST">
        {/*<form action="http://localhost:11639/rpc/account/LoginMobileApp" method="POST">*/}
        {/*<form onSubmit={onSubmit}>*/}
        {/*<form action="https://www.siliconvalley-codecamp.com/rpc/account/Login" method="POST">*/}
        {/*<input type="hidden" name="redirect" value={pathName} />*/}
        <div className="mb-3">
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

      <span>{error}</span>
    </div>
  );
};

Login.GetMobileAppBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return (
      process.env.LOGINAUTH_URL_PROD ||
      publicRuntimeConfig.LOGINAUTH_URL_DEFAULT
    );
  } else {
    return process.env.LOGINAUTH_URL_DEV;
  }
};

Login.getInitialProps = async ({ req }) => {
  const isServer = !!req;
  if (isServer) {
    return { isServer, user: req.user };
  } else {
    try {
      const user = ls.get('userInfo');
      return { user, isServer };
    } catch (e) {
      return { isServer };
    }
  }
};

export default Login;
