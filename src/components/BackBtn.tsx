import React from 'react'

import { getLanguageState } from '../store/language'

import { locale_btn } from '../locales/locale_btn'
import {back_button} from '../assets'


const BackBtn: React.FC = () => {
  // get state from store
  const { language } = getLanguageState.useState();

  return (
    <div className="dropdown is-hoverable is-right is-up" style={{ position: 'fixed', right: '45%', bottom: '40px' }}>
      <div className="dropdown-trigger">
        <button className="button is-medium" style={{ borderRadius: '10px', borderWidth: '0' }} onClick={() => { window.history.back() }} >
          <span className="icon is-small" style={{ paddingRight: '10px' }}>
            <img src={back_button} className="App-logo" alt="logo" />
          </span>
          <span>戻る</span>
        </button>
      </div>
    </div>
  )
}

export default BackBtn