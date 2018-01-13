import React from 'react'
import ReactDOM from 'react-dom'
import MainWindow from './mainWindow'
import { Provider } from 'react-redux';
import { store } from './redux';

ReactDOM.render(
    <Provider store={store}>
        <MainWindow />
    </Provider>
    , document.getElementById('app'))