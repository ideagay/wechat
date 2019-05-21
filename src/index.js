import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import { addNotice } from './actions'
import chatApp from './reducers';
import Socket from './socket';
import * as serviceWorker from './serviceWorker';

const store = createStore(chatApp);

Socket.on('system message', function (notice) {
    store.dispatch(addNotice(notice));
})

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
