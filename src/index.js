import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'; // provides store for the entire application. Hence app component is wrapped around the Provider
import {createStore} from 'redux';
import navApp from './reducer/index'

const store = createStore(navApp);

ReactDOM.render (
<Provider store={store}> 
    <App />
</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
// Since any react component in a Redux app can be connected, most apps will render <Provider /> at the top level, with the entire apps component
//       tree inside of it.

// Normally you cant use a connected component unless it is nested inside of a <Provider />
