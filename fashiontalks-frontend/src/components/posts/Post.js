import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Post(props) {

    let { post } = props

    return (
        <>
            <br></br>
            <Card style={{ height: '200px', margin: '20px' }} className="bg-dark text-white">
                <Card.Body>
                    <Link to={`/sections/${post.section.name}`} style={{ color: 'white', textDecoration: 'none' }} className="post_caption"> {post.section.name} </Link>
                    <br></br>
                    <br></br>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text className="post_caption">
                        {post.comments.length} comments
                    </Card.Text>
                    <footer className="blockquote-footer">
                        By {post.user.username} / {post.created_at.slice(5, 10)}-{post.created_at.slice(0, 4)}
                    </footer>
                </Card.Body>
            </Card>
        </>
    )

}