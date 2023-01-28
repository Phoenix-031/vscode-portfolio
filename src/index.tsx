import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import { AdminContextProvider } from './context/AdminContext';
import {  TabContextProvider } from './context/TabContext';
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: "https://portfoliobackend-production-b6e9.up.railway.app/graphql",
  uri: "https://portfoliobackend-552r.onrender.com/graphql",
  // uri:"http://localhost:8967/graphql",
  cache: new InMemoryCache()
})

const root  = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ApolloProvider client={client}>
    <AdminContextProvider>
      <TabContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TabContextProvider>
    </AdminContextProvider>
  </ApolloProvider>
);

