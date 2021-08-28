import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomForm from '../custom-form/custom-form.component';
import CustomLabel from '../custom-label/custom-label.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './sign-up.styles.scss';

const initialValues = {
    fullName: '',
    email: '',
    createPassword: '',
    confirmPassword: '',
    skills: '',
};

const onSubmit = (values) => {
    console.log('Form data', values);
};

let validationSchema = Yup.object({
    fullName: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    createPassword: Yup.string().required('Required!'),
    confirmPassword: Yup.string().required('Required!'),
});

const SignUp = () => {
    const [userType, setUserType] = useState('Recruiter');
    useEffect(() => {
        console.log(userType);
    }, [userType]);
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
                            id='recruiterButton'
                            padding='15px 28px'
                            onClick={(e) => {
                                setUserType((prevState) => {
                                    if (
                                        prevState.toLowerCase() ===
                                        e.target.innerText.toLowerCase()
                                    )
                                        return prevState;
                                    else {
                                        let candidateButton =
                                            document.querySelector(
                                                '#candidateButton'
                                            );
                                        candidateButton.classList.add(
                                            'inverted'
                                        );
                                        e.target.classList.remove('inverted');
                                        return 'Recruiter';
                                    }
                                });
                            }}
                        >
                            Recruiter
                        </CustomButton>
                        <CustomButton
                            id='candidateButton'
                            padding='15px 28px'
                            onClick={(e) => {
                                setUserType((prevState) => {
                                    if (
                                        prevState.toLowerCase() ===
                                        e.target.innerText.toLowerCase()
                                    )
                                        return prevState;
                                    else {
                                        let recruiterButton =
                                            document.querySelector(
                                                '#recruiterButton'
                                            );
                                        recruiterButton.classList.add(
                                            'inverted'
                                        );
                                        e.target.classList.remove('inverted');
                                        return 'Candidate';
                                    }
                                });
                            }}
                            inverted
                        >
                            Candidate
                        </CustomButton>
                    </div>
                    <CustomLabel id='fullName'>Full Name*</CustomLabel>
                    <FormInput
                        id='fullName'
                        name='fullName'
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
                            <CustomLabel id='createPassword'>
                                Create Password*
                            </CustomLabel>
                            <FormInput
                                id='createPassword'
                                name='createPassword'
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

export default SignUp;
