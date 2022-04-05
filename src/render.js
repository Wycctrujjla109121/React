import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {addPost, update} from './redux/state'

export let rerenderEntierTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
    <App state={ state } update={update} addPost={ addPost }/>
  </React.StrictMode>,
  document.getElementById('root')
  );
}

reportWebVitals();