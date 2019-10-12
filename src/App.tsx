import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { FormattedMessage } from 'react-intl';

import { useActions } from 'typeless';
import { useModule, LanguageActions, getLanguageState } from './store/language'

import { locales, locale_list } from './locales/index'

const App: React.FC = () => {
  // load epic and reducer
  useModule();

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
        <p>
          <FormattedMessage
            id="welcome"
            defaultMessage={locales[language].hello}
            values={{ name: <b>かす</b>, unreadCount: 134 }}
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
      <div className="dropdown is-hoverable is-right is-up" style={{ position: 'fixed', right: '50px', bottom: '50px' }}>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
            <span>{language}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content">
            {locale_list.map((locale) => {
              return <a onClick={ff} key={locale} className={locale === language ? 'dropdown-item is-active' : 'dropdown-item'}>{locale}</a>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
