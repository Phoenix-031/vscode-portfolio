import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {  TabContextProvider } from './context/TabContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TabContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TabContextProvider>
);

