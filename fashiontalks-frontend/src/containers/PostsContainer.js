import React, { Component } from 'react'
import Posts from '../components/posts/Posts'
import SectionNav from '../components/navigation/SectionNav'
import { connect } from 'react-redux'
import { loadPosts } from '../actions/postsActions'
import { Container, Row, Col } from 'react-bootstrap'

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
            <br></br>
                <Container>
                    <Row>
                        <Col>
                            <SectionNav filterBy={this.filterBy} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Posts filterBy={this.state.filterBy} loadPosts={this.props.loadPosts} posts={this.props.posts} />
                        </Col>
                    </Row>
                </Container>
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