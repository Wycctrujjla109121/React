import state, { subscribe, addPost, update } from './redux/state'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rerenderEntierTree = () => {
  ReactDOM.render(
    <React.StrictMode>
    <App state={ state } update={update} addPost={ addPost }/>
  </React.StrictMode>,
  document.getElementById('root')
  );
}

rerenderEntierTree();

subscribe(rerenderEntierTree)

reportWebVitals();