import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import { AdminContextProvider } from './context/AdminContext';
import {  TabContextProvider } from './context/TabContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AdminContextProvider>
    <TabContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TabContextProvider>
  </AdminContextProvider>
);

