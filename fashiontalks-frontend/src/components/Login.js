import React from 'react';
import { connect } from 'react-redux'
import { Form, Button, Col } from 'react-bootstrap'
import { updateLoginForm } from '../actions/loginAction.js'
import { login } from "../actions/currentUserAction.js"


const Login = ({ loginFormData, updateLoginForm, login, history }) => {

    const handleChange = (e) => {
        const { name, value } = e.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(loginFormData, history)
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

const mapStateToProps = state => {
    return {
        loginFormData: state.manageLogin
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)