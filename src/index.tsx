import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { useModule, LanguageActions, getLanguageState } from './store/language'
import getLanguage from './locales/index'

import { IntlProvider } from 'react-intl'
import { DefaultTypelessProvider } from 'typeless';

ReactDOM.render(
    <DefaultTypelessProvider>
        <IntlProvider locale='' messages={{}}>
            <App />
        </IntlProvider>
    </DefaultTypelessProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
