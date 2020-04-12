import React from 'react'
import { Card } from 'react-bootstrap';

export default function Post(props) {

    let { post } = props

    return (
        <>
            <br></br>
            <Card style={{ height: '200px', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )

}