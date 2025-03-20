import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // CSSを別途用意する場合
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
