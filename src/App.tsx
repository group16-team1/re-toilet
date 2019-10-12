import React from 'react';
import logo from './logo.svg';
import './App.css';

import { FormattedMessage } from 'react-intl';

import { useActions } from 'typeless';
import { useModule, LanguageActions, getLanguageState } from './store/language'

import locales from './locales/index'

const App: React.FC = () => {
  // load epic and reducer
  useModule();

  const state = {
    name: 'Eric',
    unreadCount: 1000,
  }
  const { name, unreadCount } = state;

  // wrap actions with `dispatch`
  const { changeLanguage } = useActions(LanguageActions);
  const ff = () => {
    if (language === 'ja') {
      changeLanguage('en')
    } else {
      changeLanguage('ja')
    }
  }
  // get state from store
  const { language } = getLanguageState.useState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <button className="button" onClick={ff}>
            {language === 'en' ? 'change Ja' : '英語にする'}
          </button>
          <div>language: {language}</div>
        </div>
        <p>
          <FormattedMessage
            id="welcome"
            defaultMessage={locales[language].hello}
            values={{ name: <b>{name}</b>, unreadCount }}
          />
        </p>
        <p>
          <FormattedMessage
            id='hello_name'
            description='say hello to wang.'
            defaultMessage={locales[language].hello_name}
            values={{ my_name: 'かす' }}
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
