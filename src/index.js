import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const firstReducer = (state = [], action) => {
    const kittyName = action.kittyName;
    if (action.type === 'KITTY') {
        console.log(`First reducer.`);
        console.log(`state: `, state);
        console.log(`action: `, action);
        console.log(`kittyName: `, kittyName);

        return [
                ...state,
                kittyName
            ];
    }

    return [
        ...state
    ];
};

const secondReducer = (state, action) => {
    if (action.type === 'DOGGO') {
        console.log(`Second reducer.`);
        console.log(`state: `, state);
        console.log(`action: `, action);
    }
    return {};
}


const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
