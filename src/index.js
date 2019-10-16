import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Form from './Form';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ProductCatalog from './ProductCatalog.js';

ReactDOM.render(<ProductCatalog />, document.getElementById('form'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
