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
      <IconList />
      <p>
        <FormattedMessage
          id='hello_name'
          description='say hello to wang.'
          defaultMessage={hello[language]}
          values={{ my_name: 'かす' }}
        />
      </p>
    </header>
  )
}

export default Home