import React, { Component } from 'react';
import Posts from './Posts'

class Posts extends Component {

  render() {
    return(
      <ul>
        {this.props.posts.map(post => 
          <post key={post.id} post={post}/>
        )}
      </ul>
    );
  }
};

export default Posts;