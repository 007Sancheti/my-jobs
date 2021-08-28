import React from 'react'
import Form from '../form/form.component'
import CustomLabel from '../custom-label/custom-label.component'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './login.styles.scss'

const Login = () => {
    return (
        <Form title="Login">
            <CustomLabel id="email">Email address</CustomLabel>
            <FormInput id="email" type="text" placeholder="Enter your email" />
            <div className="flex-sb">
                <CustomLabel id="password">Password</CustomLabel>
                <a className="forgot-password-link" href="www.link.com">Forgot your password?</a>
            </div>
            <FormInput id="password" type="password" placeholder="Enter your password" />
            <div className="group-container">
                <CustomButton>Login</CustomButton>
                <div className="mt-50">
                    <span>New to MyJobs? </span>
                    <a className="create-account-link" href="www.link.com">Create an account</a>
                </div>
            </div>
        </Form>
    )
}

export default Login
