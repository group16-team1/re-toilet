import React from 'react'

import { useActions } from 'typeless';
import { useModule, LanguageActions, getLanguageState } from '../store/language'

import { locales } from '../locales/index'
import { locale_list } from '../locales/index'
import language_icon from '../language.svg'


const LocaleBtn: React.FC = () => {
    // load epic and reducer
    useModule();

    // get state from store
    const { language } = getLanguageState.useState();

    // wrap actions with `dispatch`
    const { changeLanguage } = useActions(LanguageActions);

    const ff = () => {
        if (language === 'ja') {
            changeLanguage('en')
        } else {
            changeLanguage('ja')
        }
    }

    return (
        <div className="dropdown is-hoverable is-right is-up" style={{ position: 'fixed', right: '30px', bottom: '30px' }}>
            <div className="dropdown-trigger">
                <button className="button is-medium" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span style={{ paddingRight: '10px' }}>{locales[language].locale}</span>
                    <span className="icon is-small">
                        <img src={language_icon} className="App-logo" alt="logo" />
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                    {locale_list.map((item) => {
                        return <a href="#none" onClick={ff} key={item.locale} className={item.locale === language ? 'dropdown-item is-active' : 'dropdown-item'}>{item.language}</a>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default LocaleBtn