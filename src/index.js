import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import RootReducer from './Reducer/RootReducer'
import {Provider} from 'react-redux'
import { I18n } from 'react-i18nify-lite';

I18n.setTranslations({
    en: {
        application: {
            title: 'Hola Gev',
            hello: 'Hello'
        },
    },
    arm: {
        application: {
            title: 'esincha',
            hello: 'Բարև'
        },
    }
});

I18n.setLocale('arm');

const store = createStore(RootReducer);
window.store = store;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


