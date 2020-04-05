import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainNav from './components/navigation/MainNav'
import PostsContainer from './containers/PostsContainer'
import SectionsContainer from './containers/SectionsContainer'

class App extends Component {
  
  render() {

    return (
      <>
      <BrowserRouter>
        <MainNav/>
        <SectionsContainer/>
        <PostsContainer/>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
