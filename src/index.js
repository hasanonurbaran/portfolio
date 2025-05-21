import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Global nesne - eklenti koruması için
window._REACT_APP_NAMESPACE = window._REACT_APP_NAMESPACE || {};

const preventExtensionConflicts = () => {
  const safeCheck = (obj, prop) => {
    try {
      return obj[prop];
    } catch (e) {
      console.warn(`Erişim engellendi: ${prop}`);
      return null;
    }
  };
  
  window._REACT_APP_NAMESPACE.safeCheck = safeCheck;
};

preventExtensionConflicts();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

reportWebVitals();
