import React from 'react'
import { Card } from 'react-bootstrap';

export default function Post(props) {

    let { post } = props

    return (
        <>
            <br></br>
            <Card style={{ height: '200px', margin: '20px' }} className="bg-dark text-white">
                <Card.Body>
                    <Card.Text>{post.section.name}</Card.Text>
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