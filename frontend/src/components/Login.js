import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const Login = ({ startLogin }) => {
  const [loginid, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const credentials = {
      loginid,
      password,
    };

    startLogin(credentials);

    setLoginId('');
    setPassword('');
  };

  return (
    <div>
    <h1 class="cool-heading">Welcome To The Login Screen!</h1>
    <div className="login-container">
      <form onSubmit={handleLogin} id="loginform" className="login-form">
        <h2>LOGIN</h2>
        <div className="form-group">
          <label htmlFor="loginid">LOGIN ID: </label>
          <input
            className="form-control"
            type="text"
            name="loginid"
            id="loginid"
            placeholder="ENTER YOUR LOGIN ID"
            value={loginid}
            onChange={(event) => setLoginId(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="ENTER YOUR PASSWORD"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button className="styled-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
