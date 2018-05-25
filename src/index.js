import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import Client from './containers/Client';
import Footer from './containers/Footer';
import Freelancer from './containers/Freelancer';
import Header from './containers/Header';
import Home from './containers/Home';
import Login from './containers/Login';
import Main from './containers/Main';
import Register from './containers/Register';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();


export {
  App,
  Client,
  Footer,
  Freelancer,
  Header,
  Home,
  Login,
  Main,
  Register
}