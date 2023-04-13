import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ContextProvider } from './SocketContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
