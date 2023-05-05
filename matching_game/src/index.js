import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// import JSConfetti from 'js-confetti';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const jsConfetti = new JSConfetti();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
