import React from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>testing 1234</title>
        <meta property="og:title" content="testing 22222" />
        <meta
          property="og:image"
          content="https://heuristic-noyce-d93351.netlify.com/_next/static/images/ok-714bdb599828eddb4ccde6e9d4aaf197.jpg"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://heuristic-noyce-d93351.netlify.com/_next/static/images/ok-714bdb599828eddb4ccde6e9d4aaf197.jpg"
        />
        <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
        <meta
          name="twitter:description"
          content="DESCRIPTION OF PAGE CONTENT"
        />
        <meta name="twitter:site" content="@joao_o" />
        <meta name="twitter:site:id" content="54300137" />
        <meta name="twitter:creator" content="@joao_o" />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
