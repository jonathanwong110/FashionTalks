import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap'


class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            username: "",
            password: ""
        }
    }

    render() {

        return (
            <Form className="login-form" onSubmit={e => this.handleSubmit(e)}>
                <Form.Group as={Col} controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <input type="text" name="email" placeholder="Email" onChange={e => this.handleChange(e)} value={this.state.email}></input>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicEmail">
                    <Form.Label>Username: </Form.Label>
                    <input type="text" name="username" placeholder="Username" onChange={e => this.handleChange(e)} value={this.state.username}></input>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <input type="text" name="password" placeholder="Password" onChange={e => this.handleChange(e)} value={this.state.password}></input>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                 </Button>
            </Form>
        )
    }
}

export default Signup