import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'typeface-roboto';
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

