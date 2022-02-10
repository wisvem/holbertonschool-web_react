import logo from "./holberton_logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils.js";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">Email: </label>
          <input type="email" name="email" id="email"></input>
          <label for="password">Password: </label>
          <input type="password" name="password" id="password"></input>
          <button>OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
