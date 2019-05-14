import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const firstReducer = (state = [], action) => {
    if (action.type === 'KITTY') {
        const kittyName = action.kittyName;
        return [
                ...state,
                kittyName
            ];
    }

    return state;
};

const secondReducer = (state = [], action) => {
    if (action.type !== 'DOGGO') {
        return state;
    }

    const {
        dog,
    } = action;

    return [
        ...state,
        dog,
    ];
}

const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
