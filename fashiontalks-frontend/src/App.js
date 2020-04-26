import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import PostsContainer from './containers/PostsContainer'
import Login from './components/Login'

class App extends Component {

  render() {

    return (
      <>
        <BrowserRouter>
          <Route exact path="/"> <PostsContainer /> </Route>
          <Route exact path="/login"> <Login /> </Route>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
