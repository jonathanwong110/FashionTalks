import React from 'react'
import { Card } from 'react-bootstrap';

export default function Post(props) {
    
    let { post } = props

    return (
        <Card>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>
            </Card.Body>
            <br></br>
        </Card>
    )

}