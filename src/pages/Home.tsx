import React from 'react'

import { useModule, getLanguageState } from '../store/language'

import { FormattedMessage } from 'react-intl';

import HeroList from '../components/HeroList'
import IconList from '../components/IconList'

import { hello } from '../locales/hello'

const Home: React.FC = () => {
  // load epic and reducer
  useModule();

  // get state from store
  const { language } = getLanguageState.useState();

  return (
    <header className="App-header">
      <HeroList />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
        </p>
      <IconList />
      <p>
        <FormattedMessage
          id='hello_name'
          description='say hello to wang.'
          defaultMessage={hello[language]}
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
  )
}

export default Home