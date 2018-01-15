import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import { createStore, combineReducers } from 'redux';
import { features } from './reducers';
import { Provider } from 'react-redux';

const reducers = combineReducers({
    features,
});

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))