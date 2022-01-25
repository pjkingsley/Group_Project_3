import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

<<<<<<< HEAD
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./pages/Header";
import NavBar from "./pages/NavBar";
=======
//main components---------------------->
import Header from './components/ui/Header'
import NavBar from './components/ui/Nav-Bar'
import Main from './components/ui/Main'

class App extends Component { 
  render(){
    return (    
    <div className="body-container">
        <Header/>
        <NavBar/>
        <div id="main-body"> 
            <Main/>
        </div>
    </div>)

}
}
export default App;
>>>>>>> 020c915ab5140875da92cc4f4a817286164e55ef

// Construct our Main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router> 
      
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <NavBar />
        
          <div className="container">
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </div>
        </div>
     
       
      </Router>
      
    </ApolloProvider>
  );
}

export default App;
