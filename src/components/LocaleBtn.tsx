import React from 'react'

import { useActions } from 'typeless';
import { useModule, LanguageActions, getLanguageState } from '../store/language'

import { locale_btn } from '../locales/locale_btn'
import { locale_list } from '../locales/index'
import language_icon from '../language.svg'


const LocaleBtn: React.FC = () => {
    // load epic and reducer
    useModule();

    // get state from store
    const { language } = getLanguageState.useState();

    // wrap actions with `dispatch`
    const { changeLanguage } = useActions(LanguageActions);

    return (
        <div className="dropdown is-hoverable is-right is-up" style={{ position: 'fixed', right: '30px', bottom: '30px' }}>
            <div className="dropdown-trigger">
                <button className="button is-medium" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span style={{ paddingRight: '10px' }}>{locale_btn[language]}</span>
                    <span className="icon is-small">
                        <img src={language_icon} className="App-logo" alt="logo" />
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                    {locale_list.map((item) => {
                        return <a href="#none" onClick={() => { changeLanguage(item.locale) }} key={item.locale} className={item.locale === language ? 'dropdown-item is-active' : 'dropdown-item'}>{item.language}</a>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default LocaleBtn