import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {
  
  componentDidMount() {
    this.props.loadPosts()
  }

  render() {
    return(
      <ul>
        <div>{console.log(this.props.posts)}</div>
        {this.props.posts.map(post => 
          <Post key={post.id} post={post}/>
        )}
      </ul>
    );
  }
};

export default Posts;