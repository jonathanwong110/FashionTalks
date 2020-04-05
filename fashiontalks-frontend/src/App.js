import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainNav from './components/navigation/MainNav'
import PostsContainer from './containers/PostsContainer'

class App extends Component {
  
  render() {

    return (
      <>
      <BrowserRouter>
        <MainNav/>
        <PostsContainer/>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
