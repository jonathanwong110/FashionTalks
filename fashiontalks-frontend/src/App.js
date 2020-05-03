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
          <div className="App">
            <MainNav />
            <Route exact path="/"> <PostsContainer /> </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup"> <Signup /> </Route>
            <Route exact path="/sections/clothing"> <PostsContainer /> </Route>
            <Route exact path="/sections/shoes"> <PostsContainer /> </Route>
            <Route exact path="/sections/entertainment"> <PostsContainer /> </Route>
            <Route exact path="/sections/tech"> <PostsContainer /> </Route>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
