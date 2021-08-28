import React from 'react';
import CustomForm from '../custom-form/custom-form.component';
import CustomLabel from '../custom-label/custom-label.component';
import FormInput from '../form-input/form-input.component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router';
import CustomButton from '../custom-button/custom-button.component';
import './forgot-password.styles.scss';

const initialValues = {
    email: '',
};


let validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
});

const ForgotPassword = ({history}) => {
    const onSubmit = (values) => {
        history.push('/reset')
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <CustomForm title='Forgot your password?'>
                <p className='instructions'>
                    Enter the email associated with your account and we’ll send
                    you instructions to reset your password.
                </p>
                <CustomLabel id='email'>Email address</CustomLabel>
                <FormInput
                    id='email'
                    type='text'
                    name='email'
                    placeholder='Enter your email'
                />
                <div className="submit-button-container">
                    <CustomButton type="submit">Submit</CustomButton>
                </div>
            </CustomForm>
        </Formik>
    );
};

export default withRouter(ForgotPassword);
