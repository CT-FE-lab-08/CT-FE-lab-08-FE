import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import Header from './components/Header.jsx';
import './style.css';

render(
  <Router>
    <Header />
    <App />
  </Router>,
  document.getElementById('root')
);
