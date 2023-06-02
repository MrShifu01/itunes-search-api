import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./store/store"

// Create a root React component to render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application wrapped in the Provider component to provide the Redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Report web vitals (performance metrics) to the console
reportWebVitals();
