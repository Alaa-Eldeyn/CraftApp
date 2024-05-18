import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'typeface-roboto';
import './index.css';
import UserTokenProvider from './Context/TokenContext.js';
import ViewContextProvider from './Context/ViewContext.js';
import { QueryClient, QueryClientProvider } from 'react-query';



const root = ReactDOM.createRoot(document.getElementById('root'));

const clint = new QueryClient();
root.render(
<QueryClientProvider client={clint}>
        <UserTokenProvider>
        <ViewContextProvider >
                <App />
        </ViewContextProvider>
        </UserTokenProvider>
</QueryClientProvider>
);

