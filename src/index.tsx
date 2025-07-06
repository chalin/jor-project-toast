import React from 'react';
import ReactDOM from 'react-dom/client';

import './global-styles.css';
import App from './components/App/App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
