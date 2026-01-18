
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Initialize the React application by rendering the App component into the root DOM element
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
