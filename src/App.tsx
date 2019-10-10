import React from 'react';
import logo from './logo.svg';
import './App.css';

import { IntlProvider, FormattedMessage } from 'react-intl';

const App: React.FC = () => {
  const state = {
    name: 'Eric',
    unreadCount: 1000,
  }
  const { name, unreadCount } = state;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <FormattedMessage
            id="welcome"
            defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
            values={{ name: <b>{name}</b>, unreadCount }}
          />
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
