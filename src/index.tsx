import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

declare global {
  interface Window { perspective: any; }
}

/**
 * React App attaches the DOM to the DOM element #root in public/index.html
 */
const root = createRoot(document.getElementById('root')!);
root.render(<App />);
