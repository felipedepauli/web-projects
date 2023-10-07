import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './global/resetCSS.css'
import './index.css';
import './global/fonts.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
