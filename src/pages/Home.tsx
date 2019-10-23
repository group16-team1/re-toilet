import React from 'react'

import { getLanguageState } from '../store/language'

import { FormattedMessage } from 'react-intl';

import HeroList from '../components/HeroList'
import IconList from '../components/IconList'

import { hello } from '../locales/hello'

const Home: React.FC = () => {
  // get state from store
  const { language } = getLanguageState.useState();

  return (
    <header className="App-header">
      <HeroList />
      <div className="subtitle">
        <FormattedMessage
          id='hello_name'
          description='say hello to wang.'
          defaultMessage={hello[language]}
          values={{ my_name: 'INIAD' }}
        />
      </div>
      <IconList />
    </header>
  )
}

export default Home