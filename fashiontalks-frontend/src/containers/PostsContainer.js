import React, { Component } from 'react'
import Posts from '../components/posts/Posts'
import { connect } from 'react-redux'

class PostsContainer extends Component {
    render() {
        return (
            <Posts posts={this.props.posts}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = state => {
    null
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)