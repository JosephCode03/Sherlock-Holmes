import logo from './logo.svg';
import './App.css';

function App() {

  function message() {
    alert`Hello Sr. Joseph`
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="nav-link App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button type="button" className="btn btn-primary btn-sm mt-4 d-flex gap-2" style={{width:100, fontSize:18}} onClick={message}>
          Click Here
        </button>
      </header>
    </div>
  );
}

export default App;
