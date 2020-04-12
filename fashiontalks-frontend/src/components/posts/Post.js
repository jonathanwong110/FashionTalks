import React from 'react'
import { Card } from 'react-bootstrap';

export default function Post(props) {

    let { post } = props

    return (
        <>
        {console.log(props)}
            <br></br>
            <Card style={{ height: '200px', margin: '20px' }}>
                <Card.Body>
                    <Card.Text>{post.section.name}</Card.Text>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                    <Card.Text>
                        By {post.user.username} / {post.created_at}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )

}