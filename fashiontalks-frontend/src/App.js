import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import PostsContainer from './containers/PostsContainer'

class App extends Component {

  render() {

    return (
      <>
        <BrowserRouter>
          <PostsContainer />
        </BrowserRouter>
      </>
    )
  }
}

export default App;
