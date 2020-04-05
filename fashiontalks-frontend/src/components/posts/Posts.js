import React, { Component } from 'react';
import Post from './Post'
import { CardDeck, Container } from 'react-bootstrap'

class Posts extends Component {
  
  componentDidMount() {
    this.props.loadPosts()
  }

  render() {
    return(
      <CardDeck>
        <Container>
          {this.props.posts.map(post => 
            <Post key={post.id} post={post}/>
          )}
        </Container>
      </CardDeck>
    );
  }
};

export default Posts;