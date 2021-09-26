import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import Header from './components/app/header/header.jsx';
import './style.css';

render(
  <Router>
    <Header />
    <App />
  </Router>,
  document.getElementById('root')
);
