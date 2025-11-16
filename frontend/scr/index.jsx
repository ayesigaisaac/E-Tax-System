// src/main.jsx (or index.jsx)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // <-- Import Provider
import App from './App.jsx';
import './index.css';
import { store } from './redux/store'; // <-- Import the store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap App with Provider and pass the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);