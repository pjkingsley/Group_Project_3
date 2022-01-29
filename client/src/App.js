import React, { useContext } from 'react';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/pages/Home.js';
import SignInUp from './components/SignInUp.js';
import './App.css';
import Store from './utils/Store.js';
import { Context } from './utils/Store.js';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token =localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  

  return (
  <Store>
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <NavBar />
          <div id="main-body">
              <Home />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  </Store>
  )
};

export default App;