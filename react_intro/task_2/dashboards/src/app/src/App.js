import React, { useState } from "react";
import logo from "./logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  const isIndex = true;

  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Event handlers for email and password inputs
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with email and password here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <div className="red-line"></div>
        <p>Login to access the full dashboard</p>
        <div className="App-login">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button type="submit">OK</button>
          </div>
          </form>
          </div>
      </div>
      <footer className="App-footer">
        <div className="red-line"></div>
        &copy; {getFullYear()} - {getFooterCopy(isIndex)}
      </footer>
    </div>
  );
}

export default App;
