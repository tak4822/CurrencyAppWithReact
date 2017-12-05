import './css/materialize.min.css';
import './css/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const startApp = () => {
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
}

if(!window.cordova) {
  startApp()
} else {
  document.addEventListener('deviceready', startApp, false)
}
