import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <div className="red-line"></div>
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <div className="red-line"></div>
        <p>Copyrigth 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
