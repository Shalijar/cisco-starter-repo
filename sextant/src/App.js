import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          some metrics will be shown here
        </p>
        <a
          className="App-repo"
          href="https://github.com/vagabond-systems/cisco-starter-repo.git"
          target="_top"
          rel="noopener noreferrer"
        >
          project repo
        </a>
      </header>
    </div>
  );
}

export default App;
