import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';  // Импортируем ваш CSS файл с Tailwind директивами
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);