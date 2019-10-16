import React from 'react';
import './App.css';

import { FormattedMessage } from 'react-intl';

import { useModule, getLanguageState } from './store/language'

import { locales } from './locales/index'

import LocaleBtn from './components/LocaleBtn'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroList from './components/HeroList'

const App: React.FC = () => {
  // load epic and reducer
  useModule();

  // get state from store
  const { language } = getLanguageState.useState();

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <HeroList />
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
      <Footer />
      <LocaleBtn />
    </div>
  );
}

export default App;
