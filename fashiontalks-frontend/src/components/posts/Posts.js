import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {

  render() {
    return(
      <ul>
        {this.props.posts.map(post => 
          <Post key={post.id} post={post}/>
        )}
      </ul>
    );
  }
};

export default Posts;