import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { IntlProvider } from 'react-intl'
import { DefaultTypelessProvider } from 'typeless';

import 'bulma/css/bulma.css'
import 'bulma-modal-fx/dist/css/modal-fx.min.css'
import 'bulma-modal-fx/dist/js/modal-fx.min.js'

ReactDOM.render(
    <DefaultTypelessProvider>
        <IntlProvider locale='en' messages={{}}>
            <App />
        </IntlProvider>
    </DefaultTypelessProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
