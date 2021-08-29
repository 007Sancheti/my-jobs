import React, { useEffect } from 'react';
import { selectError } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import WithToast from '../../higher-order-components/with-toast-hoc/with-toast.component';
import { Link } from 'react-router-dom';
import CustomForm from '../custom-form/custom-form.component';
import CustomLabel from '../custom-label/custom-label.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { emailSignInStartAsync } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import './login.styles.scss';

const initialValues = {
    email: '',
    password: '',
};

let validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().min(6).required('Required!'),
});

const Login = ({ emailSignInStartAsync, error, toast }) => {
    const onSubmit = (values) => {
        console.log('Form data', values);
        emailSignInStartAsync(values);
    };
    useEffect(() => {
        if (error) {
            toast(error.data.message);
        }
    }, [error]);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <CustomForm title='Login'>
                <CustomLabel id='email'>Email address</CustomLabel>
                <FormInput
                    id='email'
                    type='text'
                    name='email'
                    placeholder='Enter your email'
                />
                <div className='flex-sb'>
                    <CustomLabel id='password'>Password</CustomLabel>
                    <Link className='forgot-password-link' to='/forgot'>
                        Forgot your password?
                    </Link>
                </div>
                <FormInput
                    id='password'
                    type='password'
                    name='password'
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
            </CustomForm>
        </Formik>
    );
};

const mapStateToProps = createStructuredSelector({
    error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
    emailSignInStartAsync: (payload) =>
        dispatch(emailSignInStartAsync(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WithToast(Login));
