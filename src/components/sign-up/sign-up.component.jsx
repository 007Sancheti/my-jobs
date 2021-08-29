import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CustomForm from '../custom-form/custom-form.component';
import CustomLabel from '../custom-label/custom-label.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signup } from '../../api';
import './sign-up.styles.scss';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
};

let validationSchema = Yup.object({
    name: Yup.string()
        .required('Required!')
        .matches(/^[aA-zZ]+$/, 'Only alphabets are allowed & without space'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().min(6).required('Required!'),
    confirmPassword: Yup.string().min(6).required('Required!'),
});

const SignUp = ({ toast, history }) => {
    const onSubmit = (values) => {
        values.userRole = userRole;
        console.log('Form data', values);
        signup(values).then((res) => {
            toast();
            history.push('/login');
        });
    };

    const [userRole, setUserRole] = useState(0);

    useEffect(() => {
        console.log(userRole);
    }, [userRole]);

    return (
        <div className='signup'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <CustomForm title='Signup'>
                    <CustomLabel>I'm a*</CustomLabel>
                    <div className='buttons-container mg-b-20'>
                        <CustomButton
                            type='text'
                            id='recruiterButton'
                            padding='15px 28px'
                            onClick={(e) => {
                                e.preventDefault();
                                setUserRole((prevState) => {
                                    if (prevState === 0) return prevState;
                                    else {
                                        let candidateButton =
                                            document.querySelector(
                                                '#candidateButton'
                                            );
                                        candidateButton.classList.add(
                                            'inverted'
                                        );
                                        e.target.classList.remove('inverted');
                                        return 0;
                                    }
                                });
                            }}
                        >
                            Recruiter
                        </CustomButton>
                        <CustomButton
                            type='text'
                            id='candidateButton'
                            padding='15px 28px'
                            onClick={(e) => {
                                e.preventDefault();
                                setUserRole((prevState) => {
                                    if (prevState === 1) return prevState;
                                    else {
                                        let recruiterButton =
                                            document.querySelector(
                                                '#recruiterButton'
                                            );
                                        recruiterButton.classList.add(
                                            'inverted'
                                        );
                                        e.target.classList.remove('inverted');
                                        return 1;
                                    }
                                });
                            }}
                            inverted
                        >
                            Candidate
                        </CustomButton>
                    </div>
                    <CustomLabel id='name'>Name*</CustomLabel>
                    <FormInput
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Enter your full name'
                    />
                    <CustomLabel id='email'>Email address*</CustomLabel>
                    <FormInput
                        id='email'
                        name='email'
                        type='text'
                        placeholder='Enter your email'
                    />
                    <div className='password-container'>
                        <div className='create-password-container'>
                            <CustomLabel id='password'>
                                Create Password*
                            </CustomLabel>
                            <FormInput
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Enter your password'
                            />
                        </div>
                        <div className='confirm-password-container'>
                            <CustomLabel id='confirmPassword'>
                                Confirm Password*
                            </CustomLabel>
                            <FormInput
                                id='confirmPassword'
                                name='confirmPassword'
                                type='password'
                                placeholder='Enter your password'
                            />
                        </div>
                    </div>
                    <CustomLabel id='skills'>Skills</CustomLabel>
                    <FormInput
                        id='skills'
                        name='skills'
                        type='text'
                        placeholder='Enter comma separated skills'
                    />
                    <div className='group-container'>
                        <CustomButton>Signup</CustomButton>
                        <div className='mt-40'>
                            <span>Have an account? </span>
                            <Link className='login-link' to='/login'>
                                Login
                            </Link>
                        </div>
                    </div>
                </CustomForm>
            </Formik>
        </div>
    );
};

export default withRouter(SignUp);
