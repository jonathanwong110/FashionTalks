import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import PostsContainer from './containers/PostsContainer'
import Login from './components/Login'
import Signup from './components/Signup'
import MainNav from './components/navigation/MainNav'

class App extends Component {

  render() {

    return (
      <>
        <BrowserRouter>
        <MainNav/>
          <Route exact path="/"> <PostsContainer /> </Route>
          <Route exact path="/login"> <Login/> </Route>
          <Route exact path="/signup"> <Signup/> </Route>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
