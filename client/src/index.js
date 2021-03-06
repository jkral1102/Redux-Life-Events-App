import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

// ReactDOM.render(
//     <App 
//     />, 
// document.getElementById('root'));

const app = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter >
        <Route path="/" component={App}>
        
        </Route>
    </BrowserRouter>,
    app); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
