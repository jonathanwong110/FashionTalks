import React, { Component } from 'react';
import Post from './Post'
import { CardDeck, Container } from 'react-bootstrap'
import SearchPosts from './SearchPosts'

class Posts extends Component {

  constructor() {
    super();
    this.state = {
      searchEntry: '',
      searchQuery: '',
      loading: false
    }
  }

  componentDidMount() {
    this.props.loadPosts()
  }

  handleChange = (e) => {
    this.setState({
      searchEntry: e.target.value.toLowerCase(),
      loading: true
    })
  }

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchQuery = this.state.searchEntry
    this.setState({
      searchQuery
    })
  }

  render() {

    const { searchEntry, searchQuery } = this.state;
    let { posts } = this.props
    if (searchQuery.length > 0) { posts = posts.filter(item => item.title.toLowerCase().includes(searchQuery)) }

    return (
      <CardDeck>
        <Container>
          <SearchPosts onKeyPress={this.onKeyPress} {...{ searchEntry, searchQuery }} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          {posts.map(post => {
            return this.props.filterBy === "" || post.section.name === this.props.filterBy ?
              <Post key={post.id} post={post} /> : null
          }
          )}
        </Container>
      </CardDeck>
    );
  }
};

export default Posts;