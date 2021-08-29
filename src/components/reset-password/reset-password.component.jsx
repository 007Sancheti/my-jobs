import React from 'react';
import CustomForm from '../custom-form/custom-form.component';
import CustomLabel from '../custom-label/custom-label.component';
import FormInput from '../form-input/form-input.component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './reset-password.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const initialValues = {
    newPassword: '',
    confirmNewPassword: '',
};

const onSubmit = (values) => {
    console.log('Form data', values);
};

let validationSchema = Yup.object({
    newPassword: Yup.string().min(6).required('Required!'),
    confirmNewPassword: Yup.string().min(6).required('Required!'),
});

const ResetPassword = () => {
    return (
        <div className='reset-form'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <CustomForm title='Reset Your Password'>
                    <p className='instructions'>
                        Enter your new password below.
                    </p>
                    <CustomLabel id='newPassword'>New password</CustomLabel>
                    <FormInput
                        id='newPassword'
                        type='text'
                        name='newPassword'
                        placeholder='Enter your password'
                    />
                    <CustomLabel id='newPassword'>
                        Confirm new password
                    </CustomLabel>
                    <FormInput
                        id='confirmNewPassword'
                        type='text'
                        name='confirmNewPassword'
                        placeholder='Enter your password'
                    />
                    <div className='submit-button-container'>
                        <CustomButton type='submit'>Submit</CustomButton>
                    </div>
                </CustomForm>
            </Formik>
        </div>
    );
};

export default ResetPassword;
