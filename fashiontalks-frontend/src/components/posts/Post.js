import React from 'react'
import { Card } from 'react-bootstrap';

export default function Post(props) {

    let { post } = props

    return (
        <>
        {console.log(post)}
            <br></br>
            <Card style={{ height: '200px', margin: '20px' }}>
                <Card.Body>
                    <Card.Text>{post.section_id}</Card.Text>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                    <Card.Text>
                        By {post.user_id} | {post.created_at}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )

}