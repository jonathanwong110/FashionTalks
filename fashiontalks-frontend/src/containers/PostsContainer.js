import React, { Component } from 'react'
import Posts from '../components/posts/Posts'
import MainNav from '../components/navigation/MainNav'
import { connect } from 'react-redux'
import { loadPosts } from '../actions/postsActions'

class PostsContainer extends Component {

    constructor() {
        super()
        this.state = {
          filterBy: ""
        }
      }
    
      filterBy = section => {
        this.setState({
          filterBy: section === this.state.filterBy ? "" : section
        })
      }
    

    render() {
        return (
            <>
            <MainNav filterBy={this.filterBy}/>
            <Posts loadPosts={this.props.loadPosts} posts={this.props.posts}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadPosts: () => dispatch(loadPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)