import React from 'react';
import { Form, Button, Col } from 'react-bootstrap'


const Login = ({ loginFormData, updateLoginForm }) => {

    const handleChange = (e) => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            username: "",
            password: ""
        });
    }


    return (
        <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="formBasicUsername">
                <Form.Label>Username: </Form.Label>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} value={loginFormData.username}></input>
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <input type="text" name="password" placeholder="Password" onChange={handleChange} value={loginFormData.password}></input>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
                 </Button>
        </Form>
    )
}

export default Login