import React, { Component } from 'react'
import Posts from '../components/posts/Posts'
import { connect } from 'react-redux'
import { loadPosts } from '../actions/postsActions'

class PostsContainer extends Component {
    render() {
        return (
            <Posts loadPosts={this.props.loadPosts} posts={this.props.posts}/>
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