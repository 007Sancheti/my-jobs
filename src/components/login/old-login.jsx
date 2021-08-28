import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../custom-form/custom-form.component';
import CustomLabel from '../custom-label/custom-label.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.styles.scss';

const initialValues = {
    email: '',
    password: '',
};

const onSubmit = (values) => {
    console.log('Form data', values);
};

const validate = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
            values.email
        )
    ) {
        errors.email = 'Invalid email format';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
};

let validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().required('Required!'),
})

const Login = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema
    });

    return (
        <Form title='Login' onSubmit={formik.handleSubmit}>
            <CustomLabel id='email'>Email address</CustomLabel>
            <FormInput
                id='email'
                type='text'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.email}
                errormessage={formik.errors.email}
                placeholder='Enter your email'
            />
            <div className='flex-sb'>
                <CustomLabel id='password'>Password</CustomLabel>
                <a className='forgot-password-link' href='www.link.com'>
                    Forgot your password?
                </a>
            </div>
            <FormInput
                id='password'
                type='password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.password}
                errormessage={formik.errors.password}
                placeholder='Enter your password'
            />
            <div className='group-container'>
                <CustomButton type='submit'>Login</CustomButton>
                <div className='mt-50'>
                    <span>New to MyJobs? </span>
                    <Link className='create-account-link' to='/signup'>
                        Create an account
                    </Link>
                </div>
            </div>
        </Form>
    );
};

export default Login;
