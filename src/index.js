import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import DataCheckBox from './DataCheckBox';
import * as serviceWorker from './serviceWorker';
import DataRadioBox from './DataRadioBox';

ReactDOM.render(<Form />, document.getElementById('userBasicInfo'));
ReactDOM.render(<DataCheckBox />, document.getElementById('data-experience'));
ReactDOM.render(<DataRadioBox />, document.getElementById('position'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
