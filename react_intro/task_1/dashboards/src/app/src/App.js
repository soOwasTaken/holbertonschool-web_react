import logo from "./logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  const isIndex = true;

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
        &copy; {getFullYear()} - {getFooterCopy(isIndex)}
      </footer>
    </div>
  );
}

export default App;
