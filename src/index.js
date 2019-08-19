import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const root = <App />;

const mountNode = document.getElementById('root');

ReactDOM.render(root, mountNode);

serviceWorker.unregister();
